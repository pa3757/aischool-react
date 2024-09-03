import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todoList = state.todoList.concat(action.payload);
      console.log(state.todoList);
    },
    checkChangeTodo: (state, action) => {
      const index = state.todoList.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (index !== -1) {
        state.todoList[index].complete = action.payload.complete;
      }
    },
    textChangeTodo: (state, action) => {
      state.todoList.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.text = action.payload.text;
          todo.complete = action.payload.complete;
        }
        return todo;
      });
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload.id
      );
    },
  },
});

export const todoActions = TodoSlice.actions;

export default TodoSlice.reducer;
