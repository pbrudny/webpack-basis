import React from 'react';
import style from './TodoList.css';
import Todo from './Todo';

const TodoList = (props) => {
    const todoList = props.todos.map(
        task =>
            <Todo key={task.id} id={task.id} text={task.text} remove={props.remove} />
    );
    return (
        <div className={style.TodoList}>
            <ul>
                {todoList}
            </ul>
        </div>
    )
};

export default TodoList;