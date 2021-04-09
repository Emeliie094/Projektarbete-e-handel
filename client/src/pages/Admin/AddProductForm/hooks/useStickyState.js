import { useState, useEffect } from 'react';

export default function useStickyState(key,initialValue){

    const [value, setValue] = useState(()=>{

        const value = localStorage.getItem(key);
        if (value) return value;
        
        return initialValue;
    });

    useEffect(() => {

    localStorage.setItem(key,value);
    
    }, [key,value]);

    return [value,setValue];


}