import { useState } from "react";
import './Todo.css';

const AddTodoWindow = ({todos, setTodos}) => {
  const [isVisible, setIsVisible] = useState(false);

  const [newTodoText, setNewTodoText] = useState("");

  const addTodo = () =>{
    if(newTodoText!== ""){
      const newTodo = {
        "id": todos.length + 1,
        "text": newTodoText,
        "is_completed": false,
      };
      setTodos([...todos, newTodo]);
      setNewTodoText("");
    }
  }

  return (
    <>
      <div className={isVisible? "todo-add-window": "hide todo-add-window"}>
        <h2>Add new todo</h2>
        <input value={newTodoText} type="text" onChange={e => setNewTodoText(e.target.value)}></input>

        <button className="add-btn" onClick = {() => {setIsVisible(false); addTodo();}}>Add</button>
        <button className="cancel-btn" onClick = {() => setIsVisible(false)}>Cancel</button>
      </div>
      <div className="todo-add-btn" onClick={() => setIsVisible(true)}>+</div>
    </>
  );
}

const TodoElement = ({todo, todos, setTodos}) => {

  const removeTodo = targetTodoId => {
    const newTodos = todos.filter(todo => todo.id !== targetTodoId);
    setTodos(newTodos);
  }

  const completeTodo = targetTodoId => {
    const newTodos = [...todos];
    newTodos.map(todo => {
      if (todo.id === targetTodoId){
        todo.is_completed = true;
      }
      return todo;
    })

    setTodos(newTodos);
  }

  return(
    <div key={todo.id}  className="todo">
      <div onClick={() => completeTodo(todo.id)} className={todo.is_completed ? "completed-todo todo-text" : "todo-text"}>{todo.text}</div>
      <div className="todo-del-btn" onClick={() => removeTodo(todo.id)}>x</div>
    </div>
  )
}

const TodoList = () => {
  const [todos, setTodos] = useState([]); 

  return(
    <>
        {todos.map((todo) => (<TodoElement todo={todo} todos={todos} setTodos={setTodos}/>))}
        <AddTodoWindow todos={todos} setTodos={setTodos}/>
    </>

  )
} 

const Todo = () => {
  return (
    <div className="todo-container">
      <h1>Simple To Do</h1>
      <TodoList />
    </div>
  );
}

export default Todo;