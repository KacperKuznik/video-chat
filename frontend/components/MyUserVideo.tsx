import { useRef, useEffect } from "react";

export default function MyUserVideo(props) {
    const videoRef = useRef<HTMLVideoElement>();
    
    useEffect(() =>{
        videoRef.current.srcObject = props.myStream;
    }, [videoRef, props])
    
    return (
            <video ref={videoRef} autoPlay className="rounded-lg fixed bottom-20 left-5 max-w-[15%]"  muted/>
    )
}
