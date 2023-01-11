import { useRef, useEffect } from "react";

export default function UserVideo() {
    // const videoRef = useRef<HTMLVideoElement>();
    // const getVideo = () => {
    //     navigator.mediaDevices.getUserMedia({
    //         'video': true,
    //         'audio': true
    //     })
    //     .then(stream => {
    //         videoRef.current.srcObject = stream;
    //     })
    //     .catch(error => {
    //         console.error('Error accessing media devices.', error);
    //     });
    // }
    // useEffect(() =>{
    //     getVideo();
    // }, [videoRef])
    
    return (
        <div className="h-full w-full">
            {/* <video ref={videoRef} autoPlay className="h-full w-full"/> */}
        </div>
    )
}
