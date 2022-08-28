import React from 'react';
import ReactPlayer from 'react-player/youtube';

export default function ReactTube() {
    return(
        <div className='d-flex justify-content-center'>
            <div className='playerWrapper'>
                <ReactPlayer className='player' url="https://www.youtube.com/watch?v=3RxlzJWWzdY" loop='true' muted='true' playing='true'/>
                <img src="" alter="ytplayer"/>
                {/* yt player가 load 되기 전, 또는 재생될 수 없는 경우 보여지게 될 이미지 */}
            </div>
        </div>
    )
}
