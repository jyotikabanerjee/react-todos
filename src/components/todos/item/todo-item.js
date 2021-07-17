import React, {useState} from 'react';
import PropTypes from 'prop-types';
import * as classes from './items.module.scss';
import { BsTrash } from "react-icons/bs";

const TodoItem = ({todo, pending, setPending, todos, setTodos}) => {
    let [done, setDone] = useState(false);

    const findTodo = (key) => {
        return todos.findIndex(elem =>  elem.key === key);
    }

    const taskDone = (ev) => {
        todo.done = true;
        let index = findTodo(todo.key);
        todos.splice(index, 1, {
            'task': todo.task,
            'key': todo.key,
            'done': true
        });
        setTodos([...todos])
        console.log(todos);
        setDone(true);
        pending = pending-1 >= 0 ? pending-1 : 0 ;
        setPending(pending);
    }

    const removeTask = () => {
        console.log('remove task clicked...')
        let index = findTodo(todo.key);
        todos.splice(index, 1);
        setTodos([...todos]);
        if(todo.done === false) {
            pending = pending-1 >= 0 ? pending-1 : 0;
            setPending(pending);
        }
    }

    return (
        <div>
            <div className={classes.container}>
                <input type="radio" value={todo.done} name={todo.id} onChange={taskDone}/>
                <span className={`${classes.taskname}  ${done  === true ? classes.taskdone : ""} `}> {todo.task} </span>
                <span className={classes.cancel} onClick={removeTask}> <BsTrash/> </span>
            </div>
        </div>
    );
};

TodoItem.propTypes = {
    todo: PropTypes.object,
    pending: PropTypes.number,
    setPending: PropTypes.func,
    todos: PropTypes.array,
    setTodos: PropTypes.func
};
TodoItem.defaultProps = {
    todo: {},
    pending: 0,
    setPending: () => {},
    todos: [],
    setTodos: () => {}
};

export default TodoItem;
