import React from 'react'
import { useHistory } from 'react-router-dom';
import style from "./NotFound.module.css"
import img from "./hexa.gif"
import PageFooter from "../../components/PageFooter/PageFooter"

const NotFound = () => {

    const history = useHistory()

    return (
        <div>
            <div className={style.wrapper}>
                <div className={style.left}>
                <img src={img} alt="page not found"/>
                
                </div>
                <div className={style.right}>
                    <h3>Page not found</h3>
                    <button className={style.button} onClick={() => {
        history.push("/")
   }}>Go to "Home"</button>
                </div>
            </div>
        </div>
    )
}

export default NotFound;
