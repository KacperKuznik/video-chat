import axios from 'axios';
import { useRouter } from 'next/router';

export default function CreateRoomButton() {
    const router = useRouter();

    const createRoom = async () => {
        const response = await axios.get(
            'http://localhost:3001/create-room'
        );
        router.push('/chat/'+response.data)
    };

    return (
        <button className="bg-green-400 text-white p-3 rounded-lg font-medium" onClick={createRoom}>
            Create Room
        </button>
    )
}