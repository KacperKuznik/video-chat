import { useRef, useEffect } from "react";

export default function MyUserVideo() {
    const videoRef = useRef<HTMLVideoElement>();
    const getVideo = () => {
        navigator.mediaDevices.getUserMedia({
            'video': true,
            'audio': true
        })
        .then(stream => {
            videoRef.current.srcObject = stream;
        })
        .catch(error => {
            console.error('Error accessing media devices.', error);
        });
    }
    useEffect(() =>{
        getVideo();
    }, [videoRef])
    
    return (
            <video ref={videoRef} autoPlay className="rounded-lg fixed bottom-20 left-5 max-w-[15%]"  muted/>
    )
}
