import React from "react";
import { Parallax, ParallaxProvider, useParallax } from "react-scroll-parallax";

const Card2 = () => {
    const parallax = useParallax({
        speed: -10,
    });

    return(
        <Parallax>
            <div className="px-3 py-5 my-5 mx-5 text-center rounded-5" ref={parallax.ref} style={{backgroundColor: "#25C1FF"}}>
                <h1 className="display-5 fw-bold">Shops</h1>
                <div className="col-lg-12 mx-auto">
                    <p className="my-5">
                        <a href="https://shop.hololivepro.com/en" target={'_blank'} className="cBanner">
                            <img src="offshop.jpg" alter="official shop" width="27%"/>
                        </a>
                        <a href="https://shop.geekjack.net/pages/hololive" target={'_blank'} className="cBanner">
                            <img src="geekjack.jpg" alter="official shop" width="30%"/>
                        </a>
                        <a href="https://www.omocat-shop.com/collections/omocat-x-hololive-en" target={'_blank'} className="cBanner">
                            <img src="omocat.png" alter="official shop" width="30%"/>
                        </a>
                    </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">

                    </div>
                </div>
            </div>
        </Parallax>
    )
    
}
export default Card2;