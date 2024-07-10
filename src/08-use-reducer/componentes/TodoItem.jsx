


export const TodoItem = ({ todo, dispatch }) => {

  const onClickDelete = () => {
    const action = {
      type: '[TODO] Delete Todo',
      payload: todo.id
    };
    dispatch( action );
  }

  const onClickChange = () => {
    const action = {
      type: '[TODO] change',
      payload: todo.id
    };
    dispatch( action );
  }
  return (
    <>
        <li className="list-group-item d-flex justify-content-between">
            <span className="align-self-center">{ todo.description }</span>
            {
              !todo.done? (<button onClick={ onClickChange } className="btn btn-primary">Completar</button>)
                  : (<button onClick={ onClickChange } className="btn btn-danger">Deshacer</button>)
            }
            
            <button onClick={ onClickDelete } className="btn btn-danger">Borrar</button>
        </li>
    </>
  )
}
