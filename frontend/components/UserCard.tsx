import { useRef, useEffect } from "react";


export default function UserCard(props) {
    const videoRef = useRef<HTMLVideoElement>();

    useEffect(() =>{
        videoRef.current.srcObject = props.stream;
    }, [videoRef, props])

    return (

        <div className="bg-gray-900 flex justify-center rounded-lg items-center min-h-full relative ">
            {/* <div className="rounded-full bg-red-500 aspect-square w-16 flex justify-center items-center">a</div>
            <div className="absolute bottom-20 left-20 rounded bg-neutral-900 opacity-20"></div> */}
            <div className="h-full w-full">
                
            <video ref={videoRef} autoPlay className="h-full w-full"/>
        </div>
        </div>
    )
}
