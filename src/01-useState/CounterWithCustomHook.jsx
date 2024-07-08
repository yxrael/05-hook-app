import { useState } from "react";
import { useCounter } from "../hooks/useCounter"


export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter();
    const [valorBoton, setValorBoton] = useState(1);


  return (
    <>

        <h1>Counter with Hook: { counter }</h1>
        <hr />

        <button className="btn btn-primary" onClick={ () => increment( valorBoton ) }>+ { valorBoton } </button>
        <button className="btn btn-primary" onClick={ () => increment(10) }>+10</button>
        <button className="btn btn-primary" onClick={ () => increment(100) }>+100</button>
        <button className="btn btn-primary" onClick={ reset }>+Reset</button>
        <button className="btn btn-primary" onClick={ decrement }>-1</button>
        <hr />
        <button className="btn btn-secondary" onClick={ () => setValorBoton( valorBoton + 1)}>Botón +1</button>
        <button className="btn btn-secondary" onClick={ () => setValorBoton( valorBoton - 1)}>Botón -1</button>
    </>
    
  )
}
