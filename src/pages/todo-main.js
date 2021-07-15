import React from 'react';
import './todo-main.css';
// import PropTypes from 'prop-types';

const TodoMain = () => {
    return (
        <div>
            <h1 className="Todo-header">
                todos
             </h1>
            <div className="Todo-container">
                <input id="Todo-enter" type="text" placeholder="What needs to be done?"/>
            </div>
        </div>
    );
};

export default TodoMain;
