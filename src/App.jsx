import { useState } from 'react'
import reactLogo from './imagenes/reactLogo.png'
import './App.css'
import ButtonCalc from './componentes/ButtonCalc'
import Pantalla from './componentes/Pantalla'
import ButtonClear from './componentes/ButtonClear'
import {evaluate} from 'mathjs';
function App() {
 
  const [input,setInput] = useState("");

  const insertarTexto = (valor) => { 
    setInput(input+valor);
  }

  const resultado = () =>{ //no recibe valor
    if (input){
      setInput(evaluate(input))
    }else{
      alert("ingresa valores para calcular")
    }
    
  }

  const clear = () =>{
    setInput("")
  }
  return (
    <div className='App'>
     
  
     <div className='calculadora-contenedor'> 
     <Pantalla input={input} />
        <div className='fila'>
          <ButtonCalc insertarTexto={insertarTexto}> 1</ButtonCalc>
          <ButtonCalc insertarTexto={insertarTexto}>2</ButtonCalc>
          <ButtonCalc insertarTexto={insertarTexto}>3</ButtonCalc>
          <ButtonCalc insertarTexto={insertarTexto}>+</ButtonCalc>
        </div>
        <div className='fila'>
        <ButtonCalc insertarTexto={insertarTexto}> 4</ButtonCalc>
          <ButtonCalc insertarTexto={insertarTexto}>5</ButtonCalc>
          <ButtonCalc insertarTexto={insertarTexto}>6</ButtonCalc>
          <ButtonCalc insertarTexto={insertarTexto}>-</ButtonCalc>
        </div>
        <div className='fila'> 
        <ButtonCalc insertarTexto={insertarTexto}> 7</ButtonCalc>
          <ButtonCalc insertarTexto={insertarTexto}>8</ButtonCalc>
          <ButtonCalc insertarTexto={insertarTexto}>9</ButtonCalc>
          <ButtonCalc insertarTexto={insertarTexto}>*</ButtonCalc>
          </div>
        <div className='fila'>
        <ButtonCalc insertarTexto={resultado}> =</ButtonCalc>
          <ButtonCalc insertarTexto={insertarTexto}>0</ButtonCalc>
          <ButtonCalc insertarTexto={insertarTexto}>.</ButtonCalc>
          <ButtonCalc insertarTexto={insertarTexto}> /</ButtonCalc>
        </div>
        <div className='fila'>
        <ButtonClear clear={clear}/>
        </div>
     </div>
     
     </div>
  
  )
}

export default App
