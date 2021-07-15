import React, {useEffect, useState} from 'react';

const TodoItem = (todo) => {
    // let [item, setItem] = useState({});
    // useEffect(() => {
    //     console.log('Inside item');
    //     console.log(todo);
    //     setItem(todo);
    // }, [todo]);
    let item = {todo};
    console.log(item);

    return (
        <div>
           <div className="Item-container">
               Here are your tasks:
               <span> {item.task} </span>
               <span> {item.done} </span>
           </div>
        </div>
    );
};


export default TodoItem;
