
import prisma from '@/app/lib/db';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const { name, email, hashScrete, password, confirmPassword} = await req.json();
        const bcrypt = require('bcrypt')

        // Validação dos dados
        const trimmed_name = name.trim().toLowerCase();
        const trimmed_email = email.trim().toLowerCase();
        const trimmed_hash = hashScrete;
        const trimmed_password = password?.trim();
        const trimmed_confirmPassword = confirmPassword?.trim();

        // Remover espaços
        if (!trimmed_email || !trimmed_name || !trimmed_hash || !trimmed_password || !trimmed_confirmPassword) {
            return NextResponse.json({ error: 'Todos os campos são obrigatórios' }, { status: 400 });
        }

        // Validação do comprimento do nome
        if (trimmed_name.length < 3 || trimmed_name.length > 50) {
            return NextResponse.json({ error: 'Dados incompletos' }, { status: 400 });
        }

        // Validação da senha
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordRegex.test(trimmed_password)) {
            return NextResponse.json({ error: 'A senha deve ter pelo menos 8 caracteres, incluindo letras e números' }, { status: 400 });
        } 
        // confirm password
        if (trimmed_password !== trimmed_confirmPassword){
            return NextResponse.json({error: 'A senha está incorreta'})
        }

        //validation name
        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/g;
        if (specialCharRegex.test(trimmed_name)) {
        return NextResponse.json({ message: 'O nome não pode conter caracteres especiais' });
        }

        const numberRegex = /\d/;
        if (numberRegex.test(trimmed_name)) {
        return NextResponse.json({ message: 'O nome não pode conter números' }); 
        }

        const nameFormatRegex = /^[A-Za-z\s]+$/;
        if (!nameFormatRegex.test(trimmed_name)) {
        return NextResponse.json({ message: 'O nome deve conter apenas letras e espaços' });
        }

        // hash number validation
        const numericRegex = /^\d+$/;
        if (!numericRegex.test(trimmed_hash)) {
        return NextResponse.json({ message: 'O código de inscrição deve conter apenas números' });
        }
        
        //DATABASE VALIDATION
        try{
            //validation if user was created
            const user_search_email = await prisma.user.findUnique({where:{email:trimmed_email}});
            const code = Number(process.env.SECRET_CODE);
            const password_crypt = await bcrypt.hash(trimmed_password, 10);
            
            if(!user_search_email){
                if(Number(hashScrete) === code){
                    const new_user = await prisma.user.create({
                        data:{
                            name:trimmed_name,
                            email:trimmed_email,
                            password:password_crypt,
                        },});
            }else { 
                return NextResponse.json({error:'Codigo de inscrição invalido'}); }
            }else {
                return NextResponse.json({error:'este email já está cadastrado'}); }
        } catch (error){
            return NextResponse.json({error:'erro ao criar ao criar a conta'}, {status: 500}); }

        // Se todas as validações passarem
        return NextResponse.json({ create: true });
    } catch (error) {
        return NextResponse.json({ error: 'Erro ao processar a solicitação' }, { status: 500 });
    }
}
