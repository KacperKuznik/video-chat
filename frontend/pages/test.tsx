import { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('localhost:3001');
const roomId = "232"
socket.emit('join-room', roomId, 10)
socket.on('user-connected', userId => {
  console.log(userId)
})
export default function Home2() {

    return (
      <>

      </>
    )
  }