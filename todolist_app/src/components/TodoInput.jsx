import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "../redux/reducers/TodoSlice";
import { v4 as uuidv4 } from "uuid";

const TodoInput = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const sendTodo = () => {
    dispatch(
      todoActions.addTodo({
        id: uuidv4(),
        text: todo,
        complete: false,
      })
    );
  };

  return (
    <div className="todo-inputbox">
      <input
        type="text"
        className="todo-inputbox-input"
        placeholder="할 일을 입력하세요"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="todo-inputbox-add-btn" onClick={() => sendTodo()}>
        등록
      </button>
    </div>
  );
};

export default TodoInput;
