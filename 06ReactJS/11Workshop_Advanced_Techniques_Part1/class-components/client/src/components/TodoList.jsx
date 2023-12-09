import { Component } from "react";
import TodoListItem from "./TodoListItem";

export default class TodoList extends Component {
    render() {
        return (
            <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
                {this.props.todos.map(todo =>
                    <TodoListItem
                        key={todo._id}
                        {...todo}
                        toggleTodo={this.props.toggleTodo}
                        deleteTodo={this.props.deleteTodo}
                    />)}
            </div>
        );
    };
}