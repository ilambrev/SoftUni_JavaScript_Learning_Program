import React from 'react';

import TodoContext from './contexts/TodoContext';
import Navigation from './components/Navigation';
import TodoList from './components/TodoList';

// Class component
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            name: 'Todo List',
            username: 'John',
        }

        this.toggleTodo = this.toggleTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    componentDidMount() {

        fetch('http://localhost:3030/jsonstore/todos')
            .then(res => res.json())
            .then(result => {
                this.setState({
                    todos: Object.values(result),
                });
            });
    }

    toggleTodo(todoId) {
        this.setState({
            todos: this.state.todos.map(todo => todo._id === todoId ? { ...todo, isFinished: !todo.isFinished } : todo)
        });
    }

    deleteTodo(todoId) {
        this.setState({
            todos: this.state.todos.filter(todo => todo._id != todoId)
        });
    }

    render() {
        return (
            <TodoContext.Provider value={{ todos: this.state.todos, name: this.state.name, username: this.state.username }}>
                
                <Navigation />

                <h1 style={{ textAlign: "center" }}>{this.state.name}</h1>

                {/* <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo.bind(this)} /> */}
                <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} deleteTodo={this.deleteTodo} />
            </TodoContext.Provider>
        );
    }
}

export default App;