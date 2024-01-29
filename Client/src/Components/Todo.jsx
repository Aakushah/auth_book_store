import React from 'react'
import AddTodo from './AddTodo'
import Todos from './Todos'

const Todo = () => {

  return (
    <div className='max-w-screen-md mx-auto'>
        
        <AddTodo />
        <Todos />

    </div>
  )
}

export default Todo