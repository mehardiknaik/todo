import React, { useState } from "react";
import { Dropdown } from "./Dropdown";


export const TodoListItem = ({ todo, toggleComplete, onRemoveTodo, editTodo }) => {
  const [isEditOn, setIsEditOn] = useState(false);
  const [inputText, setInputText] = useState(todo.text);

  const onDelete = () => {
    onRemoveTodo(todo);
  }

  const onEdit = () => {
    console.log('edit');
    setIsEditOn(prev=>!prev)
  }

  const onTodoUpdate = (e) => {
    let text = e.target.value;
    setInputText(text);
    editTodo(todo.id,text);
  }

  const dropdownOptions = [
    {
      value: "Delete",
      onClick: onDelete,
      color: "red",
    },
    {
      value: "Edit",
      onClick: onEdit,
      color: "blue",
    }
  ]
  return (
    <li className={todo.complete? "todo-row completed" : "todo-row"}>
      <label>
      <input
        type="checkbox"
        onChange={() => toggleComplete(todo)}
        checked={todo.complete}
        />
        {isEditOn ? <input className="edit-input" type="text" value={inputText} onChange={(e) => onTodoUpdate(e)}/> : todo.text}
      </label>
      <Dropdown
        options={dropdownOptions}
      />
    </li>
  )
}
