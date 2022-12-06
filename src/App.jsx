import React, { useEffect, useState } from 'react';
import './App.css';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

function App() {
  const [todos, setTodos] = useState(JSON.parse( localStorage.getItem('todo'))||[]);

  const toggleComplete = selectedTodo => {
    const updatedTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const addTodo = newTodo => {
    if (newTodo !== "") {
      setTodos([...todos, { text: newTodo, complete: false,id:Date.now() }]);
    }
  };

  const removeTodo = todoToRemove => {
    let updatedTodos = todos.filter(todo => todo.text != todoToRemove.text);
    setTodos(updatedTodos);
  }

  const editTodo = (todoToEdit,text) => {
    let todoToUpdateIndex = todos.map(todo => todo.id===todoToEdit?{...todo,text}:todo);
    setTodos(todoToUpdateIndex);
  }

  useEffect(()=>{
    localStorage.setItem("todo",JSON.stringify(todos))
  },[todos])

  return (
    <div className="todo-app">
      <header>
        <h1>
        Todo App
        </h1>
      </header>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} toggleComplete={toggleComplete} onRemoveTodo={removeTodo} editTodo={editTodo}/>
    </div>
  );
};

export default App;
