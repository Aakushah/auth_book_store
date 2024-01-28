import React from 'react'
import AddTodo from './AddTodo'
import Todos from './Todos'

const Todo = ({token='hi'}) => {



  return (
    <div>
        
        <AddTodo />
        <Todos />

    </div>
  )
}

export default Todo