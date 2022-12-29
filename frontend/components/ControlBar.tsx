export default function ControlBar() {
    return (
        <div className="bg-gray-800 flex space-x-4 justify-center py-3">
            <div className="bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Camera</div>
            <div className="bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Mute</div>
            <div className="bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Deafen</div>
            <div className="bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Participants</div>
            <div className="bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Chat</div>
            <div className="bg-red-600 text-white hover:bg-red-500  px-3 py-2 rounded-md text-sm font-medium">Disconnect</div>
        </div>
    )
}