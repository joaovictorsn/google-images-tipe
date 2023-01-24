import React from "react";
import logo from "../../assets/Img/logo.svg.png";
import styles from "./Index.module.css";


export function Index(){
    return(
        <div id={styles.divContainer}>
            <img src={logo} alt="google-images" />

            <form action="" id={styles.formContainer}>
                <input type="text" name="text" id="text" placeholder="Procurar imagens"/>
                <button>Enviar</button>
            </form>
        </div>
    )
}