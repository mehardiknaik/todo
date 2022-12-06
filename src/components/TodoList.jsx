import React from "react";
import { TodoListItem } from './TodoListItem';
export const TodoList = ({ todos, toggleComplete, onRemoveTodo, editTodo }) => {
  return (
    <ul>
     {todos.map(todo => (
       <TodoListItem
          key={todo.text}
          todo={todo}
          toggleComplete={toggleComplete}
          onRemoveTodo={onRemoveTodo}
          editTodo={editTodo}
        />
     ))}
    </ul>
  );
};
