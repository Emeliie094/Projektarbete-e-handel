import React from 'react'
import styles from "./PageFooter.module.css";
import {useHistory} from "react-router-dom"

function PageFooter() {

    const history = useHistory()

    function handleClickAdmin() {
       history.push({
         pathname: "/admin",
       });}

       
       function handleClick404() {
        history.push({
          pathname: "/*",
        });}


    return (
        <div className={styles.footer}>
            
            <p>
              <button 
              className={styles.footerLink} 
              onClick={handleClickAdmin}>Admin</button> | 
              <button 
              onClick={handleClick404}
              className={styles.footerLink} 
              >Page 404</button>
               | © Jenny Bäcklin, Emelie Nilsson 2021</p>
        </div>
    )
}

export default PageFooter;
