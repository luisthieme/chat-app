import LogoutButton from '@/components/LogoutButton';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function Page() {
    // TODO: Create User Type
    const session: any = await getServerSession(authOptions);
    return (
        <div className="w-full h-full p-4 pt-5">
            <div className="mb-8">
                <Link href="/" className="bg-primary p-2 w-fit text-white rounded-md mt-2">
                    Back
                </Link>
            </div>
            <div className="h-4/5 w-4/5 mx-auto text-white">
                <div className="grid grid-cols-12 gap-4 p-4 border rounded-lg mb-4">
                    <h2 className="col-span-4">Username:</h2>
                    <p className="col-span-6">{session.user.username}</p>
                    <button className="bg-secondary col-span-2 p-2 text-white rounded-md">edit</button>
                    <h2 className="col-span-4">Email:</h2>
                    <p className="col-span-6">{session.user.email}</p>
                    <button className="bg-secondary col-span-2 p-2 text-white rounded-md">edit</button>
                </div>
                <LogoutButton />
            </div>
        </div>
    );
}
