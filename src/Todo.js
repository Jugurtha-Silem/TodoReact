import React, { useState } from 'react';
import AddTodo from './AddTodo';

const Todo = () => {
    const [todos, setTodos ]= useState([
        {id: "1", todo:'Acheter du lait '},
        {id: "2", todo:'Acheter du pain '}
    ]);

    const [warning, setWarning] = useState(false);

    const myTodos = todos.map((todo, index) => { 
        return (<li key={index}>{todo.todo}</li>)
    });



    const addNewTodo = (newTodo, index) =>{

        if(newTodo!== ""){
            warning && setWarning(false)

            setTodos([...todos, {
                id: {index},
                todo: newTodo
            }])
        } else {
            setWarning(true);
        }
    }

    const warningMsg = warning && alert('veuillez remplir tous les champs')

    return (
        <div>
            {warningMsg}
            <h1>{todos.length} - Todo</h1>
            <ul>
                {myTodos}
            </ul>
            <AddTodo addNewTodo={addNewTodo}/>
        </div>
    );
};

export default Todo;