import React from 'react';
import style from "./CoTextComp.module.css";

const CoTextComp = () => {
    return (
        <div>
            <div className={style.paragraphtextdiv}>
                <p className={style.paragraphtext}>The CO<sub>2</sub> footprint of the Internet's data centers alone may already be comparable to that of global air travel. The good news is that a growing number of major Internet corporations are becoming more environmentally conscientious, opting for more renewable energy sources for their data centers and operations.</p>
            </div>
        </div>
    );
};

export default CoTextComp;