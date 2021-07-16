import React, {useState} from 'react';
import {v4} from 'uuid';
import TodoItem from "../../components/todos/item/todo-item";
import * as classes from "./main.module.scss"

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
            <h1 className={classes.header}>
                todos
             </h1>
            <div className={classes.container}>
                <input id={classes.enter} type="text" placeholder="What needs to be done?" onKeyDown={handleKeyDown} onBlur={handleSubmit}/>
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
