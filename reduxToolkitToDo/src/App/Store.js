import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../Features/ToDo/ToDoSlice'

export const Store = configureStore({
    reducer: todoReducer
})
