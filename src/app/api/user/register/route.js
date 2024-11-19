import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const { name, email, hashScrete, password, confirmPassword} = await req.json();

        // Validação dos dados
        const trimmed_name = name.trim().toLowerCase();
        const trimmed_email = email.trim();
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
        throw new Error('O nome não pode conter caracteres especiais');
        }
        const nameFormatRegex = /^[A-Za-z\s]+$/;
        if (!nameFormatRegex.test(trimmed_name)) {
        throw new Error('O nome deve conter apenas letras e espaços');
        }



        // hash number validation
        const numericRegex = /^\d+$/;
        if (!numericRegex.test(trimmed_hash)) {
        throw new Error('O código de inscrição deve conter apenas números');
        }


        //DATABASE VALIDATION

        // Se todas as validações passarem
        return NextResponse.json({ message: 'Dados recebidos com sucesso' });
    } catch (error) {
        console.error('Erro ao processar a solicitação:', error);
        return NextResponse.json({ error: 'Erro ao processar a solicitação' }, { status: 500 });
    }
}
