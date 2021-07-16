import React, {useEffect, useState} from 'react';
import * as classes from './items.module.scss';

const TodoItem = (todo) => {
    // let [item, setItem] = useState({});
    // useEffect(() => {
    //     console.log('Inside item');
    //     console.log(todo);
    //     setItem(todo);
    // }, [todo]);
    /*
    *
    * */
    let item = {todo};
    console.log(item);

    return (
        <div>
           <div className={classes.container}>
               Here are your tasks:
               <span> {item.task} </span>
               <span> {item.done} </span>
           </div>
        </div>
    );
};


export default TodoItem;
