import { useState } from "react";
import { useForm } from "../hooks/";

export const TodoAdd = ({ onNewTodo }) => {
  const {description, onInputChange, onResetForm} = useForm({
    description: ''
  });
  
  
  
  
  

  const onSubmit = ( event ) => {
    event.preventDefault();
    
    if( description.trim().length <= 1 ) return;
    
    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false
    };

    onNewTodo( newTodo );

    onResetForm();
  }

  return (
    <form onSubmit={ onSubmit }>
      <input 
        type="text"
        placeholder="¿Qué hay que hacer?"
        className="form-control"
        name="description"
        value={ description }
        onChange={ onInputChange }
      />
      <button 
        type="submit"
        className="btn btn-outline-primary mt-1"
      >
        Agregar 
      </button>
    </form>
  )
}
