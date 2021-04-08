import React from 'react'
import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {translateMoonPhase, asignMoonPhaseImg} from './script/Moonphase.script';
import {Month,Moon_phase,Moon, Full_moon, Black_moon, Last_quarter, First_quarter} from './phases';
import styles from "./Moonphase.module.css";


function Moonphase({currentMoon,filterHero,relatedProducts}) {

    
    const [defaultMoon,setDefaultMoon]=useState();

    const [selectedMoon,setSelectedMoon]=useState({});

    useEffect(() => {
        currentMoon.map(element => {
            let phase = translateMoonPhase(element.Phase);
            let image = asignMoonPhaseImg(phase);
            let moonName = element.Moon[0];  
            let moon = 
            {
                phase,
                image,
                moonName
            };

            setDefaultMoon(moon);
            setSelectedMoon(moon);
            relatedProducts(phase);
            filterHero(phase);  

        })
      
    }, [currentMoon]);

   

const handleCurrentUserInput = (e) => {
    
    let userInput = e.target.value;
    const selectedValueId = e.target.selectedOptions[0].getAttribute('id');

    if (selectedValueId === Moon_phase){
    let phase = translateMoonPhase(userInput);
    let image = asignMoonPhaseImg(phase);

    setSelectedMoon({
        phase,
        image,
        moonName:""
    })

    filterHero(phase);
    relatedProducts(phase);

    }

    if (selectedValueId === Moon){
        let phase = translateMoonPhase("Full Moon");
        let image = asignMoonPhaseImg(phase);
        setSelectedMoon({
            phase,
            image,
            moonName:userInput
        })

        
    }
    
        if (selectedValueId === Month){
            let phase = translateMoonPhase("Full Moon");
            let image = asignMoonPhaseImg(phase);
            setSelectedMoon({
                phase,
                image,
                moonName:userInput
            })

        }

        if (!selectedValueId){

            setSelectedMoon(defaultMoon);
            relatedProducts(defaultMoon.phase);
            
        }

}


    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles.moonImg}>
                   
                    <img src={selectedMoon.image} alt={selectedMoon.phase}></img>
                    <div className={styles.moonText}>
                    
                    <h1>{selectedMoon.moonName}</h1>
                    <p>{selectedMoon.phase}</p>   
                    
                </div>
                </div>

            
            <div className={styles.selectWrapper}>
            
                <form className={styles.selectContainer}>
                <h2>Set the moon you are interested in here:</h2> 
                    
                    
                    <select className={styles.selectBox} id={Moon_phase} onChange={handleCurrentUserInput}>
                        <option >Select moonphase</option>
                        <option id={Moon_phase} value={Full_moon}>Full Moon</option>
                        <option id={Moon_phase} value={Black_moon}>New Moon</option>
                        <option id={Moon_phase} value={Last_quarter}>Last Quarter Moon</option>
                        <option id={Moon_phase} value={First_quarter}>First Quarter Moon</option>
                    </select>
                   
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
                </form>
            </div>
            </div>
        </div>
    );
}

export default Moonphase;
