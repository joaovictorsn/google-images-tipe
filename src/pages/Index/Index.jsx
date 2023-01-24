import React from "react";
import logo from "../../assets/Img/logo.svg.png";
import { Div, FormSearch } from "./IndexStyle";
import styles from "./Index.module.scss"


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