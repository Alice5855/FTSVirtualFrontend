import React from 'react';
import ReactPlayer from 'react-player/youtube';

export default function ReactTube() {
    return(
        <div className='d-flex justify-content-center'>
            <div className='playerWrapper'>
                <ReactPlayer className='player' url="https://www.youtube.com/watch?v=3RxlzJWWzdY" loop={true} muted={true} playing={true}/>
            </div>
        </div>
    )
}
