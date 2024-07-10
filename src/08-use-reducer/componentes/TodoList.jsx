import { TodoItem } from "./TodoItem"


export const TodoList = ( { todos = [], dispatch }) => {
  return (
        <ul className="list-group">
            {
                todos.map( todo => (
                    <TodoItem 
                        todo = { todo }
                        key = { todo.id }
                        dispatch={ dispatch }/>
                ))
            }
        </ul>
  )
}
