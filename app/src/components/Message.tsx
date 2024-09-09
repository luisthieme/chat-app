export default function Message({ username, message }: { username: string; message: string }) {
    return (
        <div className="w-full">
            <div className="bg-neutral-50 p-2 w-fit border border-neutral-200 rounded-md my-2 flex gap-2">
                <p className="font-bold">{username}: </p>
                <p className="font-light">{message}</p>
            </div>
        </div>
    );
}
