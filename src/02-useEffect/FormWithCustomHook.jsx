import { useForm } from "../hooks/useForm";


export const FormWithCustomHook = () => {

    const { onInputChange, username, email, password, onResetForm, onSubmitForm } = useForm({
        username: '',
        email: '',
        password: ''
    });
 
  return (
    <>
        <h1>Formulario simple</h1>
        <hr />

        <input
            type="text" 
            className="form-control"
            placeholder="Username"
            name="username"
            value={ username }
            onChange={ onInputChange }       
        />

 
        <input
            type="email" 
            className="form-control mt-2"
            placeholder="yxrael@gmail.com"
            name="email"
            value={ email }
            onChange={ onInputChange }           
        />

        <input
            type="password" 
            className="form-control mt-2"
            placeholder="Contraseña"
            name="password"
            value={ password }
            onChange={ onInputChange }           
        />

        <button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>
        <button onClick={ onSubmitForm } className="btn btn-secondary mt-2">Enviar</button>

  

    </>
    
  )
}
