import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState={
    todos:[{id:1,text:"Hello world"}]
}


const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers : {
        removeTodo:(state,action)=>{
            state.todos =state.todos.filter((todo)=> todo.id !== action.payload)

        },
        addTodo:(state,action) => {
          
            const todo ={
            id:nanoid(),
            text:action.payload
           }

           state.todos.push(todo)

        },
        
        // updateTodo:(state,action) => {
        //     state.todos=state.todos.map((todo) =>{
        //         if(todo.id == action.payload){
        //             return {...todo,text:action.text}
        //         }
        //     })  
        // }

    }
})

export const {addTodo,removeTodo}=todoSlice.actions

export default todoSlice.reducer