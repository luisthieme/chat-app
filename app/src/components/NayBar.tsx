import { UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function NavBar() {
    return (
        <div className="h-screen p-4">
            <div className="bg-container w-80 h-full flex rounded-lg">
                <div className="flex flex-col w-full p-3 gap-2">
                    <Link
                        href="/user"
                        className="mx-auto px-4 py-2 bg-secondary hover:bg-secondary-highlighted hover:bg-secondary-highlighted hover:text-primary text-white rounded-md w-full text-center flex justify-between"
                    >
                        <UserIcon className="h-7 w-7 text-white border rounded-lg p-1" />
                        <p className="flex items-center px-2">User Info</p>
                    </Link>
                    <button className="mx-auto px-4 py-2 bg-secondary hover:bg-secondary-highlighted text-white rounded-md w-full">
                        New Chat
                    </button>
                    <div className="border-b border-neutral-400 my-2 h-0"></div>
                    <h2 className="w-fit mx-auto text-xl font-bold text-white">Chats</h2>
                    <div className="mx-auto px-4 py-2 bg-secondary hover:bg-secondary-highlighted text-white rounded-md w-full text-center">
                        Chat 1
                    </div>
                    <div className="mx-auto px-4 py-2 bg-secondary hover:bg-secondary-highlighted text-white rounded-md w-full text-center">
                        Chat 2
                    </div>
                    <div className="mx-auto px-4 py-2 bg-secondary hover:bg-secondary-highlighted text-white rounded-md w-full text-center">
                        Chat 3
                    </div>
                </div>
            </div>
        </div>
    );
}
