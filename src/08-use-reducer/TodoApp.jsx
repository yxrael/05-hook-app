import { useReducer } from "react"
import { todoReducer } from "./todoReducer"
import {TodoList}  from "./componentes/"
import {TodoAdd} from "./componentes/TodoAdd"


const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la pìedra del alma',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar la pìedra del infinito',
        done: true,
    }
]

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, initialState )

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action );
    }

  return (
    <>
        <h1>TodoApp { todos.length }, <small>pendientes: 2</small></h1>
        <hr />


        <div className="row">
            <div className="col-7">

                <TodoList 
                    todos = { todos }
                    dispatch={ dispatch }
                />

            </div>
            <div className="col-5">

                <h4>Agregar TODO</h4>
                <hr />

                <TodoAdd
                    onNewTodo={ handleNewTodo }
                />
                
                {/* Fin del formulario */}
            </div>

        </div>
    </>
  )
}
