import UserCard from './UserCard'
import { useRef, useEffect } from "react";

export default function UsersGrid(props) {

    
    return (
        <div className='bg-neutral-900 grid gap-1 grid-flow-col min-h-screen min-w-[75%] w-full'>
            {props?.videos.length > 0 ? props.videos.map(video => 
                <UserCard key={video.stream.id} stream={video.stream}/>
            ) : null}
        </div>
    )
}