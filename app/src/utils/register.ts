'use server';

import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';
import { redirect } from 'next/navigation';

export default async function register(formData: FormData) {
    const data = {
        username: formData.get('username') as string,
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    };

    const prisma = new PrismaClient();
    const password = await hash(data.password, 12);
    const user = await prisma.user.upsert({
        where: { username: data.username },
        update: {},
        create: {
            username: data.username,
            email: data.email,
            password: password,
        },
    });
    console.log(user);
    redirect('/user');
}
