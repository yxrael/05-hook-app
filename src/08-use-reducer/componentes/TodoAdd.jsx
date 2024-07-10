import { useForm } from "../../hooks/useForm";



export const TodoAdd = ({ onNewTodo }) => {

    const { description, formState, onInputChange, onResetForm } = useForm({
        description: ''
    })

    const onFormSubmit = ( event ) => {
        event.preventDefault();
        // const datoFormulario = document.getElementById('formulario').value;
        if( description.length <= 1 ) return;

        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false
        }
        
        onNewTodo( newTodo );
        onResetForm();
    }

  return (

        <form onSubmit={ onFormSubmit }>
            <input 
                id="formulario"
                type="text"
                placeholder="¿Qué hay que hacer"
                className="form-control"
                name="description"
                value={ description }
                onChange={ onInputChange }
            />
            <button
                // onClick={ onFormSubmit }
                type="submit"
                className="btn btn-outline-primary mt-1"
            >
                Agregar
            </button>
        </form> 
 
  )
}

