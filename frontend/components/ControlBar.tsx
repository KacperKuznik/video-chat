import { toggleMuted } from '../redux/features/mutedSlice'
import { useDispatch } from 'react-redux'
import { toggleDeafened } from '../redux/features/deafenedSlice'
import { toggleShowCamera } from '../redux/features/showCameraSlice'

export default function ControlBar() {
    const dispatch = useDispatch()

    return (
        <div className="bg-gray-800 flex space-x-4 justify-center py-3 fixed bottom-0 left-0 right-0">
            <div className="bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={() => dispatch(toggleShowCamera())}>Camera</div>
            <div className="bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={() => dispatch(toggleMuted())}>Mute</div>
            <div className="bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={() => dispatch(toggleDeafened())}>Deafen</div>
            <div className="bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Participants</div>
            <div className="bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Chat</div>
            <div className="bg-red-600 text-white hover:bg-red-500  px-3 py-2 rounded-md text-sm font-medium">Disconnect</div>
        </div>
    )
}