import React from 'react'
import styles from "./Hero.module.css";
import {Link} from "react-router-dom";

function Hero({hero}) {
    
    return (
        <div>
            <div className={styles.wrapper} >
            {hero.map((element) => (
                <div key={element.id}className={styles.heroImage}>
                    <img  src={element.imgUrl} alt={element.heading} width="100%" />
                    <div className={styles.heroText}>
                        <h1>{element.heading}</h1>
                        <p>{element.info}</p>
                        <Link to={element.linkUrl}>Realted items</Link>
                    </div>   
                </div>  
            ))}
            </div>
        </div>
    )
}

export default Hero;


