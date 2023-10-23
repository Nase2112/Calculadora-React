import '../css/ButtonClear.css'
const ButtonClear = (props) =>{
    return(
        <div onClick={props.clear}className="boton-clear">
        Clear
        </div>
    )
}

export default ButtonClear