import React from 'react'
import {useState,useEffect} from 'react';
import styles from "./Moonphase.module.css";

function Moonphase() {

 //Räkna ut UNIX timestamp   
let dateTime = new Date(

).getTime();
let timestamp = Math.floor(dateTime / 1000);


const [moonphase,setMoonphase]=useState("");
const [moon,setMoon]=useState("");
const [moonImg,setMoonImg]=useState(
  "https://png2.cleanpng.com/sh/6a400a6c766ca1306df36744441f2d2c/L0KzQYi4UsE6N6NngJGAYUO7dYa3UBRnPGkATpC6NkW6SIS5VcE2OWQ7T6o5OEO8QYW9VcIzOl91htk=/5a38e503df4896.16578325151367808391465222.png"
    );

useEffect (()=>{
   
let url=`https://api.farmsense.net/v1/moonphases/?d=${timestamp}`;    

    fetch (url)
        .then (resp => resp.json())
        .then (data => {
            console.log(data);
            setMoonphase(data[0].Moon[0])
            setMoon(data[0].Phase);
        });
        
},[]);

    return (
        <div className={styles.wrapper}>
             <div >
                <img className={styles.moonImg} src={moonImg} alt={moon}></img>
            </div>
            <div className={styles.moonText}>
                <h1>{moonphase}</h1>
                <p>{moon}</p>   
            </div>
        </div>
    )
}

export default Moonphase;
