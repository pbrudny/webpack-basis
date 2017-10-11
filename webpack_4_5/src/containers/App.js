import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from './Title.js';
import TodoList from './TodoList';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    text: 'sleep'
                }, {
                    id: 2,
                    text: 'wake up'
                }, {
                    id: 3,
                    text: 'brush teeth'
                }
            ]
        };
    }

    addTodo(val) {
        const todo = {
            text: val,
            id: uuid.v4()
        };

        const data = [...this.state.data, todo];
        this.setState({data});
    }

    removeTodo(id) {
        const remaining = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remaining});
    }

    render() {
        return (
            <div className={style.TodoApp}>
                <Title title={'Todo'} todoCount={this.state.data.length}/>
                <TodoList todos={this.state.data} remove={this.removeTodo}/>
            </div>
        )
    }
}

export default App;
