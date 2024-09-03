import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = ({ title, checked }) => {
  const todoList = useSelector((state) => state.todo.todoList);

  return (
    <div className="todo-list">
      <p className="todo-list-tit">{title}</p>
      <ul className="todo-list-ul">
        {todoList.map((todo) =>
          todo.complete === checked ? <TodoItem todo={todo} /> : ""
        )}
      </ul>
    </div>
  );
};

export default TodoList;
