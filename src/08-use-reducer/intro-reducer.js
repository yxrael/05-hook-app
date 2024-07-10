

const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
}];

const todoReducer = ( state = initialState, action = {} ) => {

    
    if( action.type === '[TODO] add todo' ){
        return [...state, action.payload ];
        // state.push( action.payload );
    }

    if( action?.type === '[TODO] delete todo' ) {
        console.log('borrar');
        return state.filter( todo  => todo.id !== action.id )
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recoletar la piedra del poder',
    done: false,
};

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer( todos, addTodoAction );
console.log( todos )

const eliminarTodoAction = {
    type: '[TODO] delete todo',
    id: 1
}

todos = todoReducer( todos, eliminarTodoAction );
console.log(todos);

