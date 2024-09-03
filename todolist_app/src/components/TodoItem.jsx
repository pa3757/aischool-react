import React, { useState } from "react";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { todoActions } from "../redux/reducers/TodoSlice";

const TodoItem = ({ todo }) => {
  const [edit, setEdit] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const dispatch = useDispatch();

  const handleCompleteToggle = () => {
    dispatch(
      todoActions.checkChangeTodo({
        id: todo.id,
        complete: !todo.complete,
      })
    );
  };

  const handleDelete = () => {
    dispatch(
      todoActions.deleteTodo({
        id: todo.id,
      })
    );
  };

  return (
    <li className="todo-item">
      {todo.complete ? (
        <FaCheckCircle
          className="todo-item-checkbox"
          onClick={handleCompleteToggle}
        />
      ) : (
        <FaRegCircle
          className="todo-item-checkbox"
          style={{ color: "lightgray" }}
          onClick={handleCompleteToggle}
        />
      )}

      {edit ? (
        <div>
          <input
            type="text"
            onChange={(e) => setNewText(e.target.value)}
            value={newText}
          />
          <button
            className="todo-item-edit-btn"
            onClick={() => {
              setEdit(false);
              dispatch(
                todoActions.textChangeTodo({
                  id: todo.id,
                  text: newText,
                  complete: todo.complete,
                })
              );
            }}
          >
            👌
          </button>
        </div>
      ) : (
        <div>
          <span className="todo-item-content">{todo.text}</span>
          <button className="todo-item-edit-btn" onClick={() => setEdit(true)}>
            ✍
          </button>
        </div>
      )}

      <button className="todo-item-delete-btn" onClick={handleDelete}>
        ✂
      </button>
    </li>
  );
};

export default TodoItem;
