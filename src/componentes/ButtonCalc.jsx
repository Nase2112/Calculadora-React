import { Button } from "@mui/material"
import '../css/ButtonCalc.css'
const ButtonCalc = (props) =>{

    const esOperador = (valor) =>{
        return isNaN(valor) && (valor != '.') && (valor != '=');
    }
    return(
        <div  className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`}
        onClick={() => props.insertarTexto(props.children)}>
            {props.children}
        </div>
    )
}

export default ButtonCalc