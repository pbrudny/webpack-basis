import React from 'react';
import uuid from 'uuid';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    addTodo(val) {
        const todo = {
            text: val,
            id: uuid.v4()
        }; //uuid for creating a uniq id

        const data = [...this.state.data, todo]; //instead of push we do it immutable way
        this.setState({data}); //shorter version of {data: data}
    }

    removeTodo(id) {
        const remaining = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remaining});
    }

    render() {
        //it's a container so we only have divs and other components
        return (
            <div className={style.TodoApp}>
                Tutaj pojawią się komponenty naszej aplikacji
            </div>
        )
    }
}

export default App;
