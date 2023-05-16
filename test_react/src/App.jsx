import { useState } from 'react';
import Todo from "./components/Todo";
import "./App.css";
import TodoForm from './components/TodoForm';

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar o react",
      category: "Trabalho",
      isCompleted: false,
    }
  ])

  return <div className='app'>
    <h1>Lista de Tarefas</h1>
    <div className='todo-list'>
      {todos.map((todo) =>( //Isso é uma forma de acessar os dados da variável
        <Todo todo={todo} />
      ))}
    </div>
    <TodoForm />
  </div>
}

export default App
