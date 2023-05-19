import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';
// import { useLocalStorage } from './useLocalStorage';


function App() {
  
  
  // console.log(parsedTodos);
  // const {
  //   item: todos,
  //   saveItem: saveTodos,
  //   loading,
  //   error,
  // } = useLocalStorage('TODOS_V1', []);
  // const [searchValue, setSearchValue] = React.useState('');
  // const searchedTodos = todos.filter( (todo) => {
  //   const todoText = todo.text.toLocaleLowerCase();
  //   const searchText = searchValue.toLocaleLowerCase();

  //   return todoText.includes(searchText);
  // });

  // const completedTodos = todos.filter(todo => {
  //   return !!todo.completed;
  // }).length;
  // const totalTodos = todos.length;
  // console.log(totalTodos);
 
  // console.log('Se esta guardando el state ' + searchValue);

  // // const saveTodos = (newTodos) => {
  // //   localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
  // //   setTodos(newTodos);
  // // };

  // function completeTodo(text) {
  //   const newTodo = [...todos];
  //   const todoIndex = newTodo.findIndex((todo)=> {
  //     return todo.text === text;
  //   });

  //   newTodo[todoIndex].completed = true;
  //   saveTodos(newTodo);
  // }

  // function deleteTodo(text) {
  //   const newTodo = [...todos];
  //   const todoIndex = newTodo.findIndex((todo)=> {
  //     return todo.text === text;
  //   });

  //   newTodo.splice(todoIndex, 1);
  //   saveTodos(newTodo);
  // }
  return (
    <TodoProvider>  
      <AppUI 
      // loading={loading}
      // error={error}
      // completedTodos={completedTodos} 
      // totalTodos={totalTodos}
      // searchValue={searchValue}
      // setSearchValue={setSearchValue}
      // searchedTodos={searchedTodos}
      // completeTodo={completeTodo}
      // deleteTod={deleteTodo}
      />
    </TodoProvider>
  );
}

export default App;
