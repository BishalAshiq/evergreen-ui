import Image from 'next/image';
import React from 'react';
import bannerimg from "../../../assests/bannerImages.png";
import style from "./Banner.module.css";

const Banner = () => {
    return (
        <div>
            <div className={style.bannerdiv}>
                <div className='row'>
                    <div className='col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12'>
                        <div>
                            <div className={style.bannerTagdiv}>
                                <h2 className={style.bannerTag}>Unlock Insights for a Greener Future!</h2>
                                <p className={style.bannerparag}>
                                Download our comprehensive whitepaper now and embark on a journey towards a more sustainable future.
                                </p>
                                <button className={style.bannertagbuttn}>Download Now!</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12'>
                        <div>
                            <div className={style.bannerimgdiv}>
                                <Image className={style.bannerimg} src={bannerimg} width={""} height={""} alt='banner-logo'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;