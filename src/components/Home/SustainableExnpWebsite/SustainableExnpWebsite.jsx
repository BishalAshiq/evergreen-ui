import React from 'react';
import style from "./SustainableExnpWebsite.module.css";
import Image from 'next/image';

import susImg from "../../../assests/google-offset.png"
import susImg1 from "../../../assests/facebook-offset.png"
import susImg2 from "../../../assests/alphabet-offset.png"
import susImg3 from "../../../assests/red-offset.png"



const websiteData = [
    { id: 1, name: "Google", img: susImg, gmPerVisit: (Math.random() * 100).toFixed(2) + " gm/visit" },
    { id: 2, name: "Facebook", img: susImg1, gmPerVisit: (Math.random() * 100).toFixed(2) + " gm/visit" },
    { id: 3, name: "Alphabet", img: susImg2, gmPerVisit: (Math.random() * 100).toFixed(2) + " gm/visit" },
    { id: 4, name: "Red Website", img: susImg3, gmPerVisit: (Math.random() * 100).toFixed(2) + " gm/visit" }
];

const SustainableExnpWebsite = () => {
    return (
        <div>
            <div className='container'>
                <div className={style.susfulldiv}>
                    <h1 className={style.sustag}>sustainable <br />
                        example websites</h1>

                    <div>
                        <div>
                            <div className={style.websitesList}>
                                {websiteData.map((site) => (
                                    <div key={site.id} className={style.websiteCard}>
                                        <Image className={style.websiteCardimg} src={site.img} alt={site.name} width={"auto"} height={150} />
                                        <h2 className={style.websiteCardname}>{site.name}</h2>
                                        <p className={style.websiteCardpara}>{site.gmPerVisit}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <div className={style.pahtextdiv}>
                        <p className={style.pahtext}>
                            These websites avoid bloated frameworks by using compressed graphics, efficient file formats, and lightweight fonts. Check out our information on developing sustainable websites and establishing a page weight budget if you want to learn more.
                        </p>
                    </div>

                    <div className={style.sustestbuttondiv}>
                        <button className={style.sustestbutton}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
                        </svg>
                        test Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SustainableExnpWebsite;