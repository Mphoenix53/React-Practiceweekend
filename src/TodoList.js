import {useState} from 'react'
const TodoList = (props)=>{

  const [todos, setTodos]= useState(props.initialTodo || [])
  
  const renderTodos =() => {
    return todos.map((x)=>{
      return (
        <div key={x.id} style={{textDecoration: x.completed ? 'line-thruogh':''}}>
        <p>{x.todo}</p>
        </div>
      )
    })
  }

  return (
    <div>
      <h1>{props.name}</h1>
      <div>{renderTodos()}</div>
      
    </div>
  );
};

export default TodoList;