import React, { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext()

function TodoProvider({ children }) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);
      const [ openModal, setOpenModal ] = useState(false);
      const [searchValue, setSearchValue] = React.useState('');
      const searchedTodos = todos.filter( (todo) => {
        const todoText = todo.text.toLocaleLowerCase();
        const searchText = searchValue.toLocaleLowerCase();
    
        return todoText.includes(searchText);
      });
    
      const completedTodos = todos.filter(todo => {
        return !!todo.completed;
      }).length;
      const totalTodos = todos.length;
      console.log(totalTodos);
     
      console.log('Se esta guardando el state ' + searchValue);
      
      const addTodo = (text)=> {
        const newTodo = [...todos];
        newTodo.push({
          text,
          completed: false,
        });
        saveTodos(newTodo);
      }
    
      function completeTodo(text) {
        const newTodo = [...todos];
        const todoIndex = newTodo.findIndex((todo)=> {
          return todo.text === text;
        });
    
        newTodo[todoIndex].completed = true;
        saveTodos(newTodo);
      }
    
      function deleteTodo(text) {
        const newTodo = [...todos];
        const todoIndex = newTodo.findIndex((todo)=> {
          return todo.text === text;
        });
    
        newTodo.splice(todoIndex, 1);
        saveTodos(newTodo);
      }
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos, 
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo,
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };