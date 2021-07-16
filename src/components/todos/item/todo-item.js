import React from 'react';
import PropTypes from 'prop-types';
import * as classes from './items.module.scss';

const TodoItem = ({todo}) => {
    return (
        <div>
            <div className={classes.container}>
                <span> {todo.task} </span>
            </div>
        </div>
    );
};

TodoItem.propTypes = {
    todo: PropTypes.object
};
TodoItem.defaultProps = {
    todo: {}
};

export default TodoItem;
