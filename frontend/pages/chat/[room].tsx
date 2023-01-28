import ControlBar from '../../components/ControlBar'
import UsersGrid from '../../components/UsersGrid'
import MyUserVideo from '../../components/MyUserVideo';
import { useRouter } from 'next/router'
import io from 'socket.io-client';
import {useEffect, useRef, useState} from 'react'
import { useSelector } from 'react-redux';

export default function Room() {
  const router = useRouter()
  const muted = useSelector(state => state.muted.value)
  type VideoStream = {
    userId: string,
    video: MediaStream
  }
  const [videos, setVideos] = useState<VideoStream[]>([])
  const [myStream, setMystream] = useState()

    function connectToNewUser(peer, userId, stream){
      const call = peer.call(userId, stream)
      let id
      call.on('stream', function(remoteStream) {
        if (id !== remoteStream.id){
        id = remoteStream.id
        addVideo(userId, remoteStream)
        } 
      });
    }
    function addVideo(userId, remoteStream){
      let video = {userId: userId, stream: remoteStream}
      setVideos(videos => [...videos, video])
    }

  useEffect(() => {
    const { room } = router.query
    if (room) {
      navigator.mediaDevices.getUserMedia({
        'video': true,
        'audio': true
      })
      .then(stream => {
        setMystream(stream)
        const socket = io('localhost:3001');
        import('peerjs').then(({ default: Peer }) => {
          const peer = new Peer()
          peer.on('open', userId => {
            socket.emit('join-room', room, userId)
          })
          socket.on('user-connected', userId => {
            connectToNewUser(peer, userId, stream)
          })
          peer.on('call', function(call) {
            call.answer(stream);
            let id
            call.on('stream', function(remoteStream) {
              if (id !== remoteStream.id){
              id = remoteStream.id
              addVideo(call.peer, remoteStream)
              } 
            });
          })
          socket.on('disconnect-user', (userId) => {
            setVideos(videos => videos.filter(video => video.userId != userId))
          })
        })
      });
    }
  }, [router])

  useEffect(() => {
    if (myStream){
      myStream.getAudioTracks()[0].enabled = !muted
    }
  }, [muted])
  
  
  return (
    <>
      <UsersGrid videos={videos}/>
      <MyUserVideo myStream={myStream}/>
      <ControlBar />
    </>
  )
}