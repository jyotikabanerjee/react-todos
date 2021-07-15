import React, {useState} from 'react';
import './todo-main.css';
import TodoItem from "../components/item/todo-item";

const TodoMain = () => {
    let [todoItem, setTodoItem] = useState({});
    const handleKeyDown = (ev) => {
        // console.log(ev.key);
        if(ev.key === 'Enter') {
            console.log(ev.target.value);
            let obj = {
                'task': ev.target.value,
                'done': false
            };
            setTodoItem(obj);
        }
    };

    return (
        <div>
            <h1 className="Todo-header">
                todos
             </h1>
            <div className="Todo-container">
                <input id="Todo-enter" type="text" placeholder="What needs to be done?" onKeyDown={handleKeyDown}/>
            </div>
            <TodoItem todo={todoItem}/>
        </div>
    );
};

export default TodoMain;
