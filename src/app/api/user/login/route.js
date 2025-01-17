import prisma from '@/app/lib/db';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { z } from 'zod';

const loginSchema = z.object({
    email: z.string().email('Email inválido'),
    password: z.string().min(8, 'Senha muito curta')
});

export async function POST(req) {
    try {
        const data = await req.json();
        const validatedData = loginSchema.parse(data);

        const user = await prisma.user.findUnique({
            where: { email: validatedData.email },
            select: { id: true, email: true, password: true }
        });

        if (!user) {
            return NextResponse.json(
                { error: 'Usuário não encontrado' }
            );
        }
    
        const isPasswordValid = await bcrypt.compare(
            validatedData.password,
            user.password
        );

        if (!isPasswordValid) {
            return NextResponse.json(
                { error: 'Credenciais inválidas' }
            );
        }
    
       return NextResponse.json({login:true})

    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json(
            { error: 'Erro no processo de login' }
        );
    }
}