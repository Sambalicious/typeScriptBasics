import React, { useState } from 'react';
import TodoListItem from './TodoListItem';


const App :React.FC=()=> {

  const initialTodos: Array<Todos> = [
    {text: 'i am a boy', complete: false},
    {text: 'i want to buy suya', complete:true},
    {text: 'i want to play all day', complete: true}
]

const [todos, setTodo ] = useState(initialTodos);
const toggleTodo :ToggleTodo = (selectedTodo)  => {
 const newTodo = todos.map(todo=>{
    if(todo === selectedTodo){
      return {
        ...todo, complete: !todo.complete
      }
    }
    return todo;
  })
  setTodo(newTodo);
}

  return (
    <div>
    <TodoListItem todo={todos[0]} toggleTodo={toggleTodo} />
    <TodoListItem todo={todos[1]} toggleTodo={toggleTodo}/>
    <TodoListItem todo={todos[2]} toggleTodo={toggleTodo}/>
      
    </div>
  );
}

export default App;
