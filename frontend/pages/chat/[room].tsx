import ControlBar from '../../components/ControlBar'
import UsersGrid from '../../components/UsersGrid'
import MyUserVideo from '../../components/MyUserVideo';
import { useRouter } from 'next/router'
import io from 'socket.io-client';


export default function Room() {
  const router = useRouter()
  const { room } = router.query
  const socket = io('localhost:3001');

  // import("peerjs").then(({ default: Peer }) => {
  //   const peer = new Peer();
  //   peer.on('open', userId => {
  //     socket.emit('join-room', room, userId)
  //   })
  // })

  // socket.on('user-connected', userId => {
  //   console.log(userId)
  // })
  return (
    <>
      <UsersGrid />
      <MyUserVideo />
      <ControlBar />
    </>
  )
}