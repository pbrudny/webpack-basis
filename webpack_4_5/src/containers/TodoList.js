import React from 'react';
import style from './TodoList.css';

const TodoList = (props) => {
    const todoList = props.todos.map(x => <li key={x.id}>{x.text}</li>);
    return (
        <div className={style.TodoList}>
            <ul>
                {todoList}
            </ul>
        </div>
    )
};

export default TodoList;