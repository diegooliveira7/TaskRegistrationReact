import React from 'react' //rafce - atalho para começar o código, com o pluguin ES7

const Todo = ({ todo }) => {
  return (
    <div className='todo'>
        <div className='content'>
            <p>{todo.text}</p>
            <p className='category'>({todo.category})</p>
        </div>
        <div>
            <button className='complete'>Complet</button>
            <button className='remove'>x</button>
        </div>
    </div>
  )
}

export default Todo