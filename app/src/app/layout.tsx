import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NayBar';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import Providers from '@/components/Providers';
import NotLoggedInScreen from '@/components/NotLoggedInScreen';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Chat App',
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await getServerSession(authOptions);
    return (
        <html lang="en" className="bg-background h-full">
            <Providers>
                <body className={inter.className + ' h-full'}>
                    {session != undefined ? (
                        <div className="flex">
                            <NavBar />
                            <div className="w-full p-4 pl-0 h-screen">
                                <div className="bg-container h-full rounded-lg">{children}</div>
                            </div>
                        </div>
                    ) : (
                        <NotLoggedInScreen />
                    )}
                </body>
            </Providers>
        </html>
    );
}
