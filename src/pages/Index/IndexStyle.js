import styled from "styled-components";
import { colors } from "../../assets/Variables_Global/colors";


// aqui dentro podemos criar tags personalizadas, oq facilita demais nossa vida;

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    img{
        width: 30vw;
    }
`
export const FormSearch = styled.form`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1.4em;
    width: 58%;
    input{
        width: 45vw;
        margin-bottom: 1.01em;
        border-radius: 25px;
        border: 1px solid ${colors.grey};
        height: 5vh;
        font-size: 1.05em;
        padding: 0 3vw;
        :hover{
            box-shadow: rgba(0,0,0,0.25) 0px 3px 4px;
        }
        :focus{
            outline: 0;
        }
        
    }
    button{
        background-color: ${colors.backgroundcolor};
        border: 1px solid ${colors.grey};
        border-radius: 10px;
        height: 3.5vh;
        font-size: 1em;
        padding: 0 2vw;
        cursor: pointer;
        :hover{
            background-color: rgb(255, 239, 239);
            border: 1px solid #f0e7e7;
            border-radius: 10px;
        }
    }
   
`
