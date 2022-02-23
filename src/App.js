import './App.css';
import ToDoList from './TodoList';

function App() {
  return (
    <div className="App">
      <ToDoList name='books' initialTodos={[{id:1, name:'garfield', completed:false}]}/>
      <ToDoList name='articles' initialTodos={[{id:1, name:'bat man', completed:true}]}/>
      <ToDoList name='magazines'/>
    </div>
  );
}

export default App;

