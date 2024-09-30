// import Image from 'next/image';
import Image from "next/image";
import Logo from "../../../../public/images/greenWeb-logo-white.png"
import React from 'react';
import style from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div>
            {/* Hello */}
                <div>
                    <div>
                        <Image width={120} height={20} src={Logo} alt='Logo'/>
                    </div>
                </div>
        </div>
    );
};

export default Navbar;