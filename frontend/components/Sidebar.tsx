import { closeSidebar, showSidebarChat, showSidebarParticipants } from '../redux/features/showSidebarSlice'
import { useDispatch } from 'react-redux'

export default function Sidebar() {
    const dispatch = useDispatch()

    return (
        <aside className="bg-gray-900 w-[25%] flex justify-center">
            <nav className='space-x-4 h-16 flex'>
                <button onClick={() => dispatch(showSidebarParticipants())} className="text-stone-50">Participants</button>
                <button onClick={() => dispatch(showSidebarChat())} className="text-stone-50">Chat</button>
                <button onClick={() => dispatch(closeSidebar())} className="text-stone-50">Close</button>
            </nav>

        </aside>
    )
}