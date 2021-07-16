import React, {useState} from 'react';
import './todo-main.css';
import {v4} from 'uuid';
import TodoItem from "../components/item/todo-item";

const TodoMain = () => {
    let [todos, setTodos] = useState([]);

    const handleKeyDown = (ev) => {
        if(ev.target.value )
        if(ev.key === 'Enter') {
            if(ev.target.value === '') {
                return;
            }
            setTodos([...todos, {
                'task': ev.target.value,
                'done': false,
                'key': v4()
            }]);

            ev.target.value = '';
            // console.log(todos);
        }
    };

    const handleSubmit = () => {

    };

    return (
        <div>
            <h1 className="Todo-header">
                todos
             </h1>
            <div className="Todo-container">
                <input id="Todo-enter" type="text" placeholder="What needs to be done?" onKeyDown={handleKeyDown} onBlur={handleSubmit}/>
            </div>
            <div>
                {todos.length > 0  && todos.map((item)=> {
                    return <TodoItem key={item.key} todo={item}/>
                })}
            </div>
        </div>
    );
};

export default TodoMain;
