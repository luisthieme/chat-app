'use client';

import { signOut } from 'next-auth/react';

export default function LogoutButton() {
    return (
        <button onClick={() => signOut()} className="bg-primary p-2 w-fit text-white rounded-md">
            Log out
        </button>
    );
}
