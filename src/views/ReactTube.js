import React from 'react';

class ReactTube extends React.Component {
    render() {
        return(
            <div className='playerWrapperWrapper'>
                <div className='playerWrapper'>
                    <video width="100%" height="100%">
                        <source src="video.mp4" type="video/mp4"></source>
                    </video>
                </div>
            </div>
        )
    }
}
export default ReactTube