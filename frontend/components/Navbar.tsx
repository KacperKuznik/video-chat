import Image from 'next/image'
import logo from '../public/logo.png'

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 shadow-md p-2 flex items-center gap-8">
            <Image src={logo} alt="Video Chat Logo" width={64} height={64} />
            <h1 className="text-2xl">Video Chat</h1>
        </nav>
    )
}