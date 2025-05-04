import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList() {
  // State to store the list of todos
  const [todos, setTodos] = useState([]);
  
  // State to store the current input value
  const [inputValue, setInputValue] = useState('');

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Add a new todo
  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      // Create a new todo object with a unique id
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false
      };
      
      // Add the new todo to the list
      setTodos([...todos, newTodo]);
      
      // Clear the input field
      setInputValue('');
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  // Delete a todo
  const handleDeleteTodo = (id) => {
    // Filter out the todo with the specified id
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  // Toggle todo completion status
  const handleToggleComplete = (id) => {
    // Map through todos and toggle the completed status of the matching todo
    const updatedTodos = todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // Get stats about completed/total tasks
  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="todo-list">
      <div className="todo-input-container">
        <input
          type="text"
          className="todo-input"
          placeholder="Enter a task..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button 
          className="add-button"
          onClick={handleAddTodo}
        >
          Add Task
        </button>
      </div>
      
      {totalCount > 0 && (
        <div className="todo-stats">
          <span>
            {completedCount} of {totalCount} tasks completed
          </span>
        </div>
      )}
      
      <div className="todo-items">
        {todos.length === 0 ? (
          <p className="empty-message">No tasks yet. Add a task to get started!</p>
        ) : (
          todos.map(todo => (
            <TodoItem 
              key={todo.id} 
              todo={todo} 
              onDelete={handleDeleteTodo}
              onToggleComplete={handleToggleComplete}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default TodoList;