import { useCounter } from "../hooks"



export const LoadingMessage = () => {

    const { counter } = useCounter();

  return (
    <section
        style={{ height: 200}}
        className='alert alert-info text-center p-0 m-0 d-flex align-items-center justify-content-center'
    
    >Cargando
    </section>
  )
}
