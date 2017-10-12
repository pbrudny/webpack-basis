import style from './TodoForm.css';
import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
          taskText: ''
        };
    }

    reset() {
        this.setState({taskText: ''});
    }

    onSubmit(event) {
        event.preventDefault();
        const {taskText} = this.state;
        this.props.add(taskText);
        this.reset();
    }

    onChangeHandle(event) {
        this.setState({taskText: event.target.value});
    }

    render() {
        return (
            <div className={style.TodoForm}>
                <form onSubmit={event => this.onSubmit(event)}>
                    <input
                        type="text"
                        onChange={event => this.onChangeHandle(event)}
                        value={this.state.taskText}
                    />

                </form>
            </div>

        )
    }
}

export default TodoForm;