type Todos = {
    text :string;
    complete: boolean;
    
}


type ToggleTodo =  (selectedTodo:Todo) => void;