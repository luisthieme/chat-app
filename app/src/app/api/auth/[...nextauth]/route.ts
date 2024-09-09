import { PrismaClient } from '@prisma/client';
import { compare } from 'bcrypt';
import NextAuth, { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    providers: [
        Credentials({
            name: 'Sign in',
            credentials: {
                username: {
                    label: 'Username',
                    type: 'text',
                    placeholder: 'maxdumm',
                },
                password: {
                    label: 'Password',
                    type: 'password',
                },
            },
            async authorize(credentials) {
                if (!credentials?.username || !credentials?.password) {
                    return null;
                }

                const user = await prisma.user.findUnique({
                    where: {
                        username: credentials.username,
                    },
                });

                if (!user) {
                    return null;
                }

                const isPasswordValid = await compare(credentials.password, user.password);

                if (!isPasswordValid) {
                    return null;
                }

                return {
                    id: user.id,
                    username: user.username,
                    email: user.email,
                };
            },
        }),
    ],
    callbacks: {
        session: ({ session, token }) => {
            console.log('Session Callback');
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    username: token.username,
                },
            };
        },
        jwt: ({ token, user }) => {
            console.log('JWT Callback');
            if (user) {
                const u = user as unknown as any;
                return {
                    ...token,
                    id: u.id,
                    username: u.username,
                    email: u.email,
                };
            }
            return token;
        },
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
