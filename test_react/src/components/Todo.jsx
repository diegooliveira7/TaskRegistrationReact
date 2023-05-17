import React from 'react' //rafce - atalho para começar o código, com o pluguin ES7

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div 
      className='todo'
      style={{ textDecoration: todo.isCompleted ? "line-through" : ""}}
    >
        <div className='content'>
            <p>{todo.text}</p>
            <p className='category'>({todo.category})</p>
        </div>
        <div>
            <button className='complete' onClick={() => completeTodo(todo.id)}>Complet</button>
            <button className='remove' onClick={() => removeTodo(todo.id)}>x</button>
        </div>
    </div>
  );
};

export default Todo