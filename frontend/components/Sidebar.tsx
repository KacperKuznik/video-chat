import { closeSidebar, showSidebarChat, showSidebarParticipants } from '../redux/features/showSidebarSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Chat from './Chat'


export default function Sidebar() {
    const dispatch = useDispatch()
    const [sidebarContent, setSidebarContent] = useState(null)
    const showSidebar = useSelector(state => state.showSidebar.value)

    useEffect(() => {
        switch (showSidebar) {
            case 'chat':
                setSidebarContent(<Chat />)
                break;
            case 'participants':
                setSidebarContent(<div className='bg-gray-700'>adwada</div>)
                break;
        }
    }, [showSidebar])
    
    
    return (
        <aside className="bg-gray-900 w-[25%] flex flex-col px-3">
            <nav className='space-x-4 h-16 flex'>
                <button onClick={() => dispatch(showSidebarParticipants())} className="text-stone-50">Participants</button>
                <button onClick={() => dispatch(showSidebarChat())} className="text-stone-50">Chat</button>
                <button onClick={() => dispatch(closeSidebar())} className="text-stone-50">Close</button>
            </nav>
            {sidebarContent}
        </aside>
    )
}