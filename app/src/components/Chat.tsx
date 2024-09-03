'use client';

import { useEffect, useState, useRef } from 'react';
import io, { Socket } from 'socket.io-client';
import Message from './Message';

export type Message = {
    username: string;
    message: string;
};

export default function Chat() {
    const [messages, setMessages] = useState<Array<Message>>([]);
    const [currentMessage, setCurrentMessage] = useState<string>('');
    const socketRef = useRef<Socket | null>(null);

    useEffect(() => {
        // Connect to the Socket.io server at ws://localhost:3500
        socketRef.current = io('ws://localhost:3500');

        socketRef.current.on('message', (message: Message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        return () => {
            socketRef.current?.disconnect();
        };
    }, []);

    const sendMessage = () => {
        if (socketRef.current) {
            socketRef.current.emit('message', { username: 'user', message: currentMessage });
            setCurrentMessage('');
        }
    };

    return (
        <div className="h-screen">
            <div className="bg-neutral-300 h-4/5 overflow-y-scroll">
                {messages.map((data, index) => {
                    return <Message key={index} username={data.username} message={data.message}></Message>;
                })}
            </div>

            <div className="flex justify-center items-center h-1/5 gap-2">
                <input
                    type="text"
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    className="border border-neutral-300 rounded-md px-4 outline-none text-xl w-2/5 h-12"
                />

                <button onClick={sendMessage} className="bg-blue-500 text-white px-2 rounded-md h-12">
                    Send
                </button>
            </div>
        </div>
    );
}
