import React, { Component } from "react";

class Footer extends Component {
    render(){
        return(
            <>
                <div className="container-fluid mt-5" style={{}}>
                    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                        <div className="col-md-4 d-flex align-items-center">
                        <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                            <img src="Justlogo.png" alt="logo" width='45px'/>
                        </a>
                        <span className="mb-3 mb-md-0 text-muted">&copy; 2022 Virtual Agency, Inc</span>
                        </div>

                        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                            <li>
                                <a className="text-muted" href="https://www.reddit.com/r/Hololive/" target={'_blank'} style={{width: '60px'}}>
                                    <img src="rd_icon.svg" width="26"/>
                                </a>
                            </li>
                            <li>
                                <a className="text-muted" href="https://twitter.com/hololive_en" target={'_blank'} style={{width: '60px'}}>
                                    <img src="tw_icon.svg" width="26"/>
                                </a>
                            </li>
                            <li>
                                <a className="text-muted" href="https://www.youtube.com/channel/UCJFZiqLMntJufDCHc6bQixg" target={'_blank'} style={{width: '60px'}}>
                                    <img src="yt_icon.svg" width="26"/>
                                </a>
                            </li>
                        </ul>
                    </footer>
                </div>
            </>
        )
    }
}
export default Footer;