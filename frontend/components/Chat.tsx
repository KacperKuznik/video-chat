import { useState, useEffect } from "react"
import io from 'socket.io-client';

export default function Chat() {
    const [message, setMessage] = useState("")
    const socket = io('localhost:3001');
    socket.emit('join-room', 'abc', '123')
    socket.on('broadcasted-message', (message) => {
        console.log(message)
    })
    function sendMessage() {
        socket.emit('message', message);

    }

    return (
        <div className="h-full bg-gray-500 px-2">
            <div >
                Chat
            </div>
            <input type="text" onChange={(e) => setMessage(e.target.value)} value={message}></input>
            <button onClick={() => sendMessage()}>Send</button>
        </div>
    )
}