import React, {useState} from 'react';
import {v4} from 'uuid';
import TodoItem from "../../components/todos/item/todo-item";
import * as classes from "./main.module.scss"

const TodoMain = () => {
    let [todos, setTodos] = useState([]);
    let [pending, setPending] = useState(0);

    const handleKeyDown = (ev) => {
        if(ev.key === 'Enter') {
            if(ev.target.value === '') {
                return;
            }
            setTodos([...todos, {
                'task': ev.target.value,
                'done': false,
                'key': v4()
            }]);

            setPending(pending+1);

            ev.target.value = '';
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
                {todos.length > 0  && todos.map((item, idx)=> {
                    return <TodoItem key={item.key} todo={item} pending={pending} setPending={setPending} todos={todos} setTodo={setTodos}/>
                })}
            </div>
            <div className={classes.summary}>
                <div className={classes.lhs}>
                    {pending}  {pending === 1 ? `item left` : `items left` }
                </div>
                <div className={classes.rhs}>
                    <button> All </button>
                    <button> Active </button>
                    <button> Completed </button>
                </div>
            </div>
        </div>
    );
};

export default TodoMain;
