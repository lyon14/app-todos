import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';
//import './App.css';

//const defaultTodos = [
//  { text: 'Cortar cebolla', completed: false },
//  { text: 'Tomar el curso de intro a react', completed: false },
//  { text: 'Llorar con la llorona', completed: true },
//];



function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
