import React from 'react'
import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {translateMoonPhase, asignMoonPhaseImg} from './script/Moonphase.script';
import {Month,Moon_phase,Moon, Full_moon, Black_moon, Last_quarter, First_quarter} from './phases';
import styles from "./Moonphase.module.css";


function Moonphase({currentMoon,filterHero,relatedProducts}) {


    const [moonphase,setMoonphase]=useState("");
    const [moon,setMoon]=useState("");
    const [moonImg,setMoonImg]=useState("");

    useEffect(() => {
        currentMoon.map(element => {
            let phase = translateMoonPhase(element.Phase);
            let image = asignMoonPhaseImg(phase);
            let moonName = element.Moon[0];  
            setMoonphase(phase);
            setMoonImg(image);
            setMoon(moonName);
            filterHero(phase);  
            relatedProducts(phase);   
        })
      
    }, [currentMoon]);

   

const handleCurrentUserInput = (e) => {
    
    let userInput = e.target.value;
    const selectedValueId = e.target.selectedOptions[0].getAttribute('id');

    //TODO-reset if field is empty, show currentMoon

    if (selectedValueId === Moon_phase){
    let phase = translateMoonPhase(userInput);
    let image = asignMoonPhaseImg(phase);
    setMoon("");
    setMoonphase(phase);
    setMoonImg(image);
    filterHero(phase);
    relatedProducts(phase);

    }

    if (selectedValueId === Moon){
        let phase = translateMoonPhase("Full Moon");
        let image = asignMoonPhaseImg(phase);
        setMoon(userInput);
        setMoonphase(phase);
        setMoonImg(image);
        
    }
    
        if (selectedValueId === Month){
            let phase = translateMoonPhase("Full Moon");
            let image = asignMoonPhaseImg(phase);
            setMoon(userInput);
            setMoonphase(phase);
            setMoonImg(image);
        }

        if (!selectedValueId){

            console.log("Add a reset function");
        }

}


    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles.moonImg}>
                   
                    <img src={moonImg} alt={moonphase}></img>
                    <div className={styles.moonText}>
                    
                    <h1>{moon}</h1>
                    <p>{moonphase}</p>   
                    
                </div>
                </div>

            
            <div className={styles.selectWrapper}>
            
                <form className={styles.selectContainer}>
                <h2>Set the moon you are interested in here:</h2> 
                    
                    {/* <label to={Moon_phase} >Moonphase  */}
                    <select className={styles.selectBox} id={Moon_phase} onChange={handleCurrentUserInput}>
                        <option >Select moonphase</option>
                        <option id={Moon_phase} value={Full_moon}>Full Moon</option>
                        <option id={Moon_phase} value={Black_moon}>New Moon</option>
                        <option id={Moon_phase} value={Last_quarter}>Last Quarter Moon</option>
                        <option id={Moon_phase} value={First_quarter}>First Quarter Moon</option>
                    </select>
                    {/* </label> */}
                    {/* <label to={Moon}>Pick moon by moon name  */}
                    <select className={styles.selectBox} id={Moon} onChange={handleCurrentUserInput}>
                    <option>Select by name of fullmoon</option>
                        <option id={Moon} value="Wolf Moon">Wolf Moon</option>
                        <option id={Moon} value="Snow Moon">Snow Moon</option>
                        <option id={Moon} value="Worm Moon">Worm Moon</option>
                        <option id={Moon} value="Pink Moon">Pink Moon</option>
                        <option id={Moon} value="Flower Moon">Flower Moon</option>
                        <option id={Moon} value="Strawberry Moon">Strawberry Moon</option>
                        <option id={Moon} value="Buck Moon">Buck Moon</option>
                        <option id={Moon} value="Sturgeon Moon">Sturgeon Moon</option>  
                    </select>
                    {/* </label> */}
                    {/* <label to={Month}>Pick moon by month  */}
                    <select className={styles.selectBox} id={Month} onChange={handleCurrentUserInput}>
                    <option>Select fullmoon name by month</option>
                        <option id={Month} value="Wolf Moon">January</option>
                        <option id={Month} value="Snow Moon">February</option>
                        <option id={Month} value="Worm Moon">March</option> 
                        <option id={Month} value="Pink Moon">April</option> 
                        <option id={Month} value="Flower Moon">May</option> 
                        <option id={Month} value="Strawberry Moon">June</option> 
                        <option id={Month} value="Buck Moon">July</option>
                        <option id={Month} value="Sturgeon Moon">August</option>
                        <option id={Month} value="Corn Moon">September</option>
                        <option id={Month} value="Harvest Moon">October</option>
                        <option id={Month} value="Beaver Moon">November</option>
                        <option id={Month} value="Cold Moon">December</option>
                    </select>
                    {/* </label> */}


                </form>
            </div>
            </div>
        </div>
    );
}

export default Moonphase;
