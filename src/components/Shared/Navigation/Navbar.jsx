// import Image from 'next/image';
import Image from "next/image";
import Logo from "../../../../public/images/greenWeb-logo-white.png"
import React from 'react';
import style from "./Navbar.module.css";
import Link from "next/link";
import Banner from "@/components/Home/Banner/Banner";

const Navbar = () => {
    return (
        <div className={style.navbardivful}>

            <div className={style.navbardiv}>
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg ">
                        <div className="container-fluid">
                            <Link className="navbar-brand" href="/">
                                <Image width={""} height={56} src={Logo} alt='Logo' />

                            </Link>


                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>


                            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">


                                <div className={style.navbarLinks}>



                                    <div className={style.hrdiv}>
                                        <hr className={style.hr} />

                                    </div>

                                    <div className={style.navbarLinksingle}>
                                        <Link href="/" className="nav-item">
                                            Sustainable Websites</Link>
                                        <Link href="/">

                                            Blog</Link>
                                        <Link href="/" className="nav-item">

                                            Contact Us</Link>
                                        <Link href="/" className="nav-item">

                                            Login</Link>

                                            <div className={style.hrsdiv}>
                                            <hr className={style.hrs} />
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>



                <div>
                    <Banner/>
                </div>
            </div>


          
        </div>
    );
};

export default Navbar;






  {/* <div className={style.navbardiv}>
                <div>
                    <Image width={120} height={20} src={Logo} alt='Logo' />
                </div>

                <div>
                    <div className={style.hr}/>
                </div>

                <div>
                    <Link href="/">
                        Sustainable Websites</Link>
                    <Link href="/">

                        Blog</Link>
                    <Link href="/">

                        Contact Us</Link>
                    <Link href="/">

                        Login</Link>
                </div>
            </div> */}