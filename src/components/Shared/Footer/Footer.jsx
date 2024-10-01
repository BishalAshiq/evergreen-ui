import React from 'react';
import style from "./Footer.module.css";
import Link from 'next/link';

const Footer = () => {
    return (
        <div>
            <div >
                <div className='row'>
                    <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4'>
                        <div>
                            <div>
                                <hr className={style.footerhr} />
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4'>
                        <div className={style.footerlinksdiv} >
                            <Link href="/">Sustainable Websites</Link>
                            <Link href="">Blog</Link>
                            <Link href="">Contact Us</Link>
                        </div>
                    </div>
                    <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4'>
                        <div>
                            <div>
                                <hr className={style.footerhr} />
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <div className='row container-fluid'>
                        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12'>
                            <div className={style.contactUsfooterdiv}>
                                <span className={style.contactUsfooter}>Contact:</span>
                                <p>   <span className='me-1'><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" /></svg></span>contact@everythinggreen.org</p>
                            </div>
                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12'>
                            <div className={style.contactUsfooterpdiv}>
                                <p className={style.contactUsfooterPolicitex}>
                                    Privacy Policy
                                    <span className='ms-2'>
                                        <svg width="12" height="12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_17_32)">
                                                <path d="M44.4567 0H3.54333C2.60358 0 1.70232 0.373315 1.03782 1.03782C0.373315 1.70232 0 2.60358 0 3.54333V44.4567C0 45.3964 0.373315 46.2977 1.03782 46.9622C1.70232 47.6267 2.60358 48 3.54333 48H44.4567C45.3964 48 46.2977 47.6267 46.9622 46.9622C47.6267 46.2977 48 45.3964 48 44.4567V3.54333C48 2.60358 47.6267 1.70232 46.9622 1.03782C46.2977 0.373315 45.3964 0 44.4567 0ZM14.3067 40.89H7.09V17.9667H14.3067V40.89ZM10.6933 14.79C9.87473 14.7854 9.07583 14.5384 8.39747 14.0802C7.71911 13.622 7.19168 12.9731 6.88175 12.2154C6.57183 11.4577 6.4933 10.6252 6.65606 9.82291C6.81883 9.02063 7.2156 8.28455 7.79631 7.70756C8.37702 7.13057 9.11563 6.73853 9.91893 6.58092C10.7222 6.42331 11.5542 6.50719 12.3099 6.82197C13.0656 7.13675 13.7111 7.66833 14.1649 8.34962C14.6188 9.03092 14.8606 9.83138 14.86 10.65C14.8677 11.1981 14.765 11.7421 14.558 12.2496C14.351 12.7571 14.044 13.2178 13.6551 13.6041C13.2663 13.9905 12.8037 14.2946 12.2948 14.4983C11.786 14.702 11.2413 14.8012 10.6933 14.79ZM40.9067 40.91H33.6933V28.3867C33.6933 24.6933 32.1233 23.5533 30.0967 23.5533C27.9567 23.5533 25.8567 25.1667 25.8567 28.48V40.91H18.64V17.9833H25.58V21.16H25.6733C26.37 19.75 28.81 17.34 32.5333 17.34C36.56 17.34 40.91 19.73 40.91 26.73L40.9067 40.91Z" fill="#0A66C2" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_17_32">
                                                    <rect width="48" height="48" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>

                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12'>
                            <div className={style.contactUsfooteraddressdiv}>
                                <span className={style.contactUsfooteraddresstext}>Address:</span>
                                <span className={style.contactUsfooteraddresstext}>China Hong Kong City Block 3, Room 1203,</span>
                                <span className={style.contactUsfooteraddresstext}>12th Floor, 33 Canton Rd, Tsim Sha Tsui, Hong Kong</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;