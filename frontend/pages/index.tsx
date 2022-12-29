import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from '../components/Navbar'
import conference from '../public/conference.png'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Video Chat</title>
      </Head>
      <Navbar />
      <div className='h-screen flex justify-center items-center'>
        <button>sdaw</button>
        <Image src={conference} alt="conference image" className='w-1/2' />
      </div>
    </>
  )
}