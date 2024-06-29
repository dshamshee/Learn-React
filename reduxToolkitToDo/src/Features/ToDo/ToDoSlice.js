import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [{id: 1, text: "Hello World"}]
}

export const todoSlice = createSlice({
    name: "tod",
    initialState,
    reducers: { 
        // is function me hamesa 2 values milegi (state, action). state all previous values deta hai, action me just like id milta h verify krne ke liye
        addToDo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            // state wahi h jo upar initialState banaya hai usi ye state manipulate (update) krega 
            state.todos.push(todo)
        },
        removeToDo: (state, action) => {
            state.todos = state.todos.filter((Elements) => Elements.id !== action.payload) 
        },
    }
})

export const {addToDo, removeToDo} = todoSlice.actions
export default todoSlice.reducer