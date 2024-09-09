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
        socketRef.current = io('orca-app-v4tk5.ondigitalocean.app');

        socketRef.current.on('message', (message: Message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        return () => {
            socketRef.current?.disconnect();
        };
    }, []);

    const sendMessage = () => {
        if (socketRef.current) {
            socketRef.current.emit('message', {
                username: socketRef.current.id?.substring(0, 5),
                message: currentMessage,
            });
            setCurrentMessage('');
        }
    };

    return (
        <div className="h-full w-full">
            <div className="h-5/6 w-3/5 mx-auto overflow-y-scroll">
                {messages.map((data, index) => {
                    return <Message key={index} username={data.username} message={data.message}></Message>;
                })}
            </div>

            <div className="flex justify-center items-center h-1/6 gap-2">
                <input
                    type="text"
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    className="bg-secondary rounded-md px-4 outline-none text-xl text-white w-2/5 h-12"
                />

                <button
                    onClick={sendMessage}
                    className="bg-primary  text-white px-2 rounded-md h-12 outline-none focus:bg-transparent focus:text-primary border-2 border-primary"
                >
                    Send
                </button>
            </div>
        </div>
    );
}
