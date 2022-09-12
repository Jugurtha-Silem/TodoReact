import React, { useState } from 'react';

const AddTodo = ({addNewTodo}) => {

  const [addTodo, setAddTodo] = useState("");
  

  const hadleTodo = (e) =>{
    e.preventDefault();
    addNewTodo(addTodo);
    setAddTodo("")
  }


  return ( 
    <form onSubmit={hadleTodo}>
      <label>Ajouter un todo </label>
      <input type="text" value={addTodo} onChange={(e) => setAddTodo(e.target.value)}/>
      <input type="submit" />
    </form>
  );
};

export default AddTodo;