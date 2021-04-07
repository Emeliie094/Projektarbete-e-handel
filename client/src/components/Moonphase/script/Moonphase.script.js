import {First_quarter, Full_moon, Last_quarter, Black_moon} from '../phases';
import fullmoon from '../moonImages/fullmoon.png';
import firstquarter from '../moonImages/firstquarter.png';
import lastquarter from '../moonImages/lastquarter.png';
import blackmoon from '../moonImages/blackmoon.png';


export const translateMoonPhase = (moonphase) => {
    //Asign some moonphases to closest "primary" moonphase

    let asignedMoonPhase ="";
    
    if (moonphase.toLowerCase().includes("waxing crescent")){
        asignedMoonPhase= First_quarter;
    }     
        
    else if (moonphase.toLowerCase().includes("waxing gibbous")){
                asignedMoonPhase= Full_moon;
    }  

    else if (moonphase.toLowerCase().includes("waning gibbous")){
                     asignedMoonPhase= Last_quarter;
    }    
    
    else if (moonphase.toLowerCase().includes("waning crescent")){
                    asignedMoonPhase=Black_moon;
    } else {
        asignedMoonPhase=moonphase;
    }
    return asignedMoonPhase;
}

export const asignMoonPhaseImg = (moonphase) =>{

    let moonPhaseImg = null;

        if (moonphase === Full_moon){
            moonPhaseImg = fullmoon;

        }
        else if (moonphase === First_quarter){
            moonPhaseImg = firstquarter;
        }
        else if (moonphase === Black_moon){
            moonPhaseImg = blackmoon;
        }
        else if (moonphase === Last_quarter){
            moonPhaseImg = lastquarter;
        }
       

    return moonPhaseImg;
};
