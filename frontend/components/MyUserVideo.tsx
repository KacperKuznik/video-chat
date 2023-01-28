import { useRef, useEffect } from "react";
import { useSelector } from 'react-redux';

export default function MyUserVideo(props) {
    const videoRef = useRef<HTMLVideoElement>();
    const showCamera = useSelector(state => state.showCamera.value)

    useEffect(() =>{
        if (showCamera)
            videoRef.current.srcObject = props.myStream;
    }, [videoRef, props, showCamera])
    
    return (
        <div>
            {showCamera ? <video ref={videoRef} autoPlay className="rounded-lg fixed bottom-20 left-5 max-w-[15%]"  muted/> : null}
        </div>
    )
}
