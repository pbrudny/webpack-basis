import React from 'react';
import style from './Todo.css';


const Todo = props => {
    return (
        <div className={style.Todo}>
            <li key={props.id} onClick={event => props.remove(props.id)}>
                {props.text}
            </li>
        </div>
    )
}
export default Todo;