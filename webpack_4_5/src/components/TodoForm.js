import style from './TodoForm.css';
import React from 'react';
// logika została przeniesiona do kontenera app
// zmiany stanu dzieją się tylko w kontenerze
const TodoForm = props => {
    return (
        <div className={style.TodoForm}>
            <form onSubmit={event => {
                event.preventDefault();
                props.addTodo(props.text)}
            }>
                <input
                    type="text"
                    onChange={event => props.onInputChange(event.target.value)}
                    value={props.text}
                />

            </form>
        </div>
    )
}

export default TodoForm;