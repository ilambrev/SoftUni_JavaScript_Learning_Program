import { Component } from "react";
import { Card, Button } from 'antd';

export default class TodoListItem extends Component {
    componentDidUpdate() {
        console.log(`${this.props.title} - Did Update`);
    }

    componentWillUnmount() {
        console.log(`${this.props.title} - Will Unmount`);
    }


    render() {
        return (
            <Card
                title={this.props.title}
                style={{
                    width: 300,
                    background: this.props.isFinished ? "green" : "red",
                }}
            >
                <p>Status: {this.props.isFinished ? 'Completed' : 'In Progress'}</p>
                <Button type="primary" onClick={() => this.props.toggleTodo(this.props._id)}>{this.props.isFinished ? 'Undo' : 'Done'}</Button>
                <Button type="primary" danger onClick={() => this.props.deleteTodo(this.props._id)}>Remove</Button>
            </Card>
        );
    };
}