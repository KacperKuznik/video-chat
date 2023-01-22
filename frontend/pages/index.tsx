import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import conference from '../public/conference.png'
import CreateRoomButton from '../components/CreateRoomButton'

export default function Home() {

  return (
    <>
      <Head>
        <title>Video Chat</title>
      </Head>
      <Navbar />
      <div className='h-screen flex justify-center items-center bg-stone-100'>
        <CreateRoomButton />
        <Image src={conference} alt="conference image" className='w-1/2' />
      </div>
    </>
  )
}