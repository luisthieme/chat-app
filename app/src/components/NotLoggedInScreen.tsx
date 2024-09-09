'use client';

import register from '@/utils/register';
import { ChatBubbleLeftEllipsisIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/solid';

import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function NotLoggedInScreen() {
    const [isRegistering, setIsRegistering] = useState(false);
    return (
        <>
            {isRegistering ? (
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <ChatBubbleLeftEllipsisIcon className="h-20 w-20 text-primary mx-auto" />
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-primary">
                            Register a new Account
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form action={register} className="space-y-6">
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-white">
                                    Username
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        required
                                        className="bg-secondary rounded-md px-4 outline-none w-full text-white text-lg h-10"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                                    Email Address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="text"
                                        required
                                        className="bg-secondary rounded-md px-4 outline-none w-full text-white text-lg h-10"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium leading-6 text-white"
                                    >
                                        Password
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        autoComplete="current-password"
                                        className="bg-secondary rounded-md px-4 outline-none w-full text-white text-lg h-10"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Sign up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            ) : (
                <main className="grid min-h-full place-items-center bg-transparent px-6 py-24 sm:py-32 lg:px-8">
                    <div className="text-center">
                        <p className="text-base font-semibold text-primary">Welcome!</p>
                        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Not logged in</h1>
                        <p className="mt-6 text-base leading-7 text-secondary-highlighted">
                            You need to be logged in to view your chats.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <button
                                onClick={() => signIn()}
                                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Log in
                            </button>
                            <button
                                onClick={() => setIsRegistering(true)}
                                className="text-sm font-semibold text-primary"
                            >
                                Sign up <span aria-hidden="true">&rarr;</span>
                            </button>
                        </div>
                    </div>
                </main>
            )}
        </>
    );
}
