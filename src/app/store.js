import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/toDo/toDoSlice'


export const store = configureStore({
  reducer: todoReducer
});