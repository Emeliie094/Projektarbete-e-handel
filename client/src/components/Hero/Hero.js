import React from 'react'
import styles from "./Hero.module.css";
import {Link} from "react-router-dom";

function Hero({hero}) {
    
    return (
        <div>
            <div >
                <div className={styles.heroImage}>
                <img  src={hero[0].imgUrl} alt="hero" width="100%" />
                </div>
                <div className={styles.heroText}>
                    <h1>{hero[0].heading}</h1>
                        <p>{hero[0].info}</p>
                    <Link to={hero[0].linkUrl}>Realted items</Link>
                </div>   
            </div>
        </div>
    )
}

export default Hero;
