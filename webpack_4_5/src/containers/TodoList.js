import React from 'react';

const TodoList = (props) => {
    const todoList = props.todos.map(x => <li key={x.id}>{x.text}</li>);
    return (
        <ul>
            {todoList}
        </ul>
    )
};

export default TodoList;