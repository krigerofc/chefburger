import CredentialsProvider from "next-auth/providers/credentials";
import prisma from '@/app/lib/db';
import bcrypt from 'bcrypt';

export const authOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
          select: { id: true, email: true, password: true }
        });

        if (!user || !credentials.password) {
          return null;
        }

        const isPasswordValid = await bcrypt.compare(credentials.password, user.password);

        if (!isPasswordValid){
          return null;
        }

        return { id: user.id, email: user.email };
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  // Outras configurações do NextAuth
};
