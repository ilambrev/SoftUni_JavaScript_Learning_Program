import { Component } from "react";
import { Card } from 'antd';

export default class TodoListItem extends Component {
    render() {

        return (
            <Card
                title={this.props.title}
                style={{
                    width: 300,
                }}
            >
                <p>Status: {this.props.isFinished ? 'Completed' : 'In Progress'}</p>
            </Card>
        );
    };
}