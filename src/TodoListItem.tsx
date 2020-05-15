import React from 'react'



export interface TodoListItemProps {
    todo: Todos,
    toggleTodo : ToggleTodo;
}
 
const TodoListItem: React.SFC<TodoListItemProps> = ({todo, toggleTodo}) => {
    return ( 
        <div>
            <li>
            <label style={{textDecoration: todo.complete ? "line-through" : undefined}}>{todo.text}</label>
            <input type="checkbox" checked={todo.complete} onChange={()=>toggleTodo(todo)} />
            </li>
        </div>
     );
}
 
export default TodoListItem;