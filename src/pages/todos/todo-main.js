import React, {useState} from 'react';
import {v4} from 'uuid';
import TodoItem from "../../components/todos/item/todo-item";
import * as classes from "./main.module.scss"

const TodoMain = () => {
    let [todos, setTodos] = useState([]);
    let [pending, setPending] = useState(0);
    let [showActive, setShowActive] = useState(false);
    let [showCompleted, setShowCompleted] = useState(false);
    let [showAll, setShowAll] = useState(true);

    const handleKeyDown = (ev) => {
        if(ev.key === 'Enter') {
            if(ev.target.value === '') {
                return;
            }
            setTodos([...todos, {
                'task': ev.target.value,
                'done': false,
                'key': v4(),
                'active': true,
                'completed': false
            }]);

            setPending(pending+1);

            ev.target.value = '';
        }
    };

    const toggleShowActive = () => {
        setShowActive(true);
        setShowAll(false)
        setShowCompleted(false)
    }

    const toggleShowAll = () => {
        setShowActive(false);
        setShowAll(true)
        setShowCompleted(false)
    }

    const toggleShowCompleted = () => {
        setShowActive(false);
        setShowAll(false)
        setShowCompleted(true)
    }

    return (
        <div>
            <h1 className={classes.header}>
                todos
             </h1>
            <div className={classes.container}>
                <input id={classes.enter} type="text" placeholder="What needs to be done?" onKeyDown={handleKeyDown}/>
            </div>
            <div>
                {todos.length > 0 && todos.map((item, idx)=> {
                    if (showAll) {
                     return <TodoItem key={item.key} todo={item} pending={pending} setPending={setPending} todos={todos} setTodo={setTodos}/>
                    } else{
                        if(showActive && item.active) {
                            return <TodoItem key={item.key} todo={item} pending={pending} setPending={setPending} todos={todos} setTodo={setTodos}/>
                        } else if(showCompleted && item.done){
                            return <TodoItem key={item.key} todo={item} pending={pending} setPending={setPending} todos={todos} setTodo={setTodos}/>
                        } else {
                            return null;
                        }
                    }
                })} </div>
            <div className={classes.summary}>
                <div className={classes.lhs}>
                    {pending}  {pending === 1 ? `item left` : `items left` }
                </div>
                <div className={classes.rhs}>
                    <button onClick={toggleShowAll}> All </button>
                    <button onClick={toggleShowActive}> Active </button>
                    <button onClick={toggleShowCompleted}> Completed </button>
                </div>
            </div>
        </div>
    );
};

export default TodoMain;
