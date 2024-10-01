import React from 'react';
import style from "./LearnAboutWeb.module.css";
import learnImg from "../../../assests/logofooter.png";
import Image from 'next/image';


const LearnAboutWeb = () => {
    return (
        <div>
            <div className='container'>
                <div className={style.learnfulldiv}>
                    <h1 className={style.learntag}>
                        learn more about <br />
                        web sustainability?
                    </h1>

                    <div className={style.learnfullCarddiv}>
                        <div className={style.learnCarddiv}>
                            <h3 className={style.learnCardtag}>join the greenWeb newsletter</h3>
                            <div className={style.learnCardInpdiv}>
                                <input className={style.learnCardinp} placeholder='your email address' type='search' />
                                <button className={style.learnCardbtn}>Subscribe</button>
                            </div>
                            <p className={style.learnCardparagraph}>The greenWeb team will send you occasional updates on web accessibility and sustainability. There will be no spam, only high-quality information.</p>

                        </div>
                    </div>


                    <div className={style.learnfulCardtwodiv}>
                        <div className={style.learnfullCardtwodiv}>
                            <div className={style.learnCardtwotagdiv}>
                                <h2>claim and download your greenWeb certificate</h2>
                            </div>

                            <div className={style.learnImgCardtwodiv}>
                                <Image className={style.learnImgCardtwo} src={learnImg} width={150} height={""} alt='' />
                                <p className={style.learnparaCardtwo}>The green<span className={style.learnparaCardtwospan}>Web</span> team designed this website's carbon calculator to inspire and enlighten people about the importance of creating websites with low carbon emissions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearnAboutWeb;