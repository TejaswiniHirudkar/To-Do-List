import React , {useState} from 'react';
import './App.css';
import TodoList from './components/todolist';

function App() {
  return (
    <div className="todo-app">
      <TodoList/>
    </div>
  );
}

export default App;
