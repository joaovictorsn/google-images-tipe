import React from "react";
import logo from ".././assets/Img/logo.google.png";
import styles from "./Header.module.css"

export function Header(){
    return(
        <body>
            <header>
                <div id={styles.headerContainer}>
                    <img src={logo} alt="google-images" />

                    <input type="text" name="text" id="text" placeholder="Procurar imagens"/>

                    <button>Enviar</button>
                </div>
            </header>
        </body>
        
    )
}