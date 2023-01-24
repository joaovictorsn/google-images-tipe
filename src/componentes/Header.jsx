import React from "react";
import logo from ".././assets/Img/logo.svg.png";
import styles from "./Header.module.scss"

export function Header(){
    return(
            <header id={styles.header}>
                <div id={styles.headerContainer}>
                    <img src={logo} alt="google-images" id={styles.imgLogo}/>

                    <form action="" id={styles.formContainer}>

                        <input type="text" name="text" id="text" placeholder="Procurar imagens"/>

                        <button>Enviar</button>
                    </form>
                </div>
            </header>
        
    )
}