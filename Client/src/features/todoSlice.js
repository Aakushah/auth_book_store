import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState={
    todos: JSON.parse(localStorage.getItem('todos')) || [{ id: 1, text: 'Hello world' }],
}


const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers : {
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
            localStorage.setItem('todos', JSON.stringify(state.todos));

        },
        addTodo:(state,action) => {
          
            const todo ={
            id:nanoid(),
            text:action.payload,
           }

           state.todos.push(todo);
           localStorage.setItem('todos', JSON.stringify(state.todos));


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