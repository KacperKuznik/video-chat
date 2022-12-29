import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from '../components/Navbar'
import ControlBar from '../components/ControlBar'
import UserCard from '../components/UserCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Video Chat</title>
      </Head>
      {/* <Navbar /> */}
      <ControlBar />
      <UserCard />
    </>
  )
}