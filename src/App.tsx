import React, { useState } from 'react';
import './App.css';
import{ NewTodoForm} from './components/NewTodoForm';

import {TodoTable} from './components/TodoTable';
export const  App=()=> {

  const [todos,setTodos] = useState([
    { rowNumber: 1, rowDescription: 'Java', rowAssigned: 'nitya'},
    { rowNumber: 2, rowDescription: 'ml', rowAssigned: 'again nityaa' },
    { rowNumber: 3, rowDescription: 'React Project', rowAssigned: 'Nityaa'}
  ])


  const [showAddTodoForm, setShowTodoForm] = useState(false);


  const addTodo = (description:string,assigned:string) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    }
    else {
      rowNumber = 1;
    }
      const newTodo = {
        rowNumber: rowNumber,
       // rowNumber: todos.length + 1,
        rowDescription: description,
        rowAssigned: assigned
      };
      setTodos(todos => [...todos, newTodo]);
    setShowTodoForm(false);
  }

  const deleteTodo = (deleteRowNumber:number) => {
    let filtered = todos.filter(function (value){
      return value.rowNumber !== deleteRowNumber;
    });
    
    setTodos(filtered);
  }
  

  return(
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} deleteTodo={deleteTodo} />         
          <button type="button" className="btn btn-primary mt-3" onClick={() => {
            setShowTodoForm(!showAddTodoForm);
          }}>
            {showAddTodoForm?'Close Todo':'New Todo'}
          </button>
          {showAddTodoForm && <NewTodoForm addTodo={addTodo}/>
          }
        </div>
      </div>
    </div>
  );
}
