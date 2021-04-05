import React from 'react'
import {useState,useEffect} from 'react';
import {translateMoonPhase, asignMoonPhaseImg, filterRelatedProducts} from './script/Moonphase.script';
import styles from "./Moonphase.module.css";


function Moonphase({products}) {

 //Räkna ut UNIX timestamp till API 
let dateTime = new Date(

).getTime();
let timestamp = Math.floor(dateTime / 1000);


const [moonphase,setMoonphase]=useState("");
const [moon,setMoon]=useState("");
const [moonImg,setMoonImg]=useState("");
const [relatedProducts,setRelatedProducts]=useState("");



useEffect (()=>{
   
let url=`https://api.farmsense.net/v1/moonphases/?d=${timestamp}`;    

    fetch (url)
        .then (resp => resp.json())
        .then (data => {
            let phase = translateMoonPhase(data[0].Phase);
            let image = asignMoonPhaseImg(phase);
            let productsWithSameMoonphase = filterRelatedProducts(phase,data[0].Moon[0],products);

            
            setMoonphase(phase);
            setMoonImg(image);
            setMoon(data[0].Moon[0]);
            setRelatedProducts(productsWithSameMoonphase);

        });
        
},[]);

    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles.moonImg}>
                    <img src={moonImg} alt={moonphase}></img>
                </div>
                <div className={styles.moonText}>
                    <h1>{moon}</h1>
                    <p>{moonphase}</p>   
                </div>
            </div>
        </div>
    )
}

export default Moonphase;
