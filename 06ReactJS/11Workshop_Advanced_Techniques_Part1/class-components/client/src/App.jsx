import React from 'react';

import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import TodoList from './components/TodoList';

const items = [
    {
        label: 'Navigation One',
        key: 'mail',
        icon: <MailOutlined />,
    },
    {
        label: 'Navigation Two',
        key: 'app',
        icon: <AppstoreOutlined />,
        disabled: true,
    },
    {
        label: 'Navigation Three - Submenu',
        key: 'SubMenu',
        icon: <SettingOutlined />,
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    {
                        label: 'Option 1',
                        key: 'setting:1',
                    },
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Item 2',
                children: [
                    {
                        label: 'Option 3',
                        key: 'setting:3',
                    },
                    {
                        label: 'Option 4',
                        key: 'setting:4',
                    },
                ],
            },
        ],
    },
    {
        label: (
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Navigation Four - Link
            </a>
        ),
        key: 'alipay',
    },
];

// Class component
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            name: 'Todo List',
        }
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

    render() {
        return (
            <>
                <Menu mode="horizontal" items={items} />

                <h1 style={{ textAlign: "center"}}>{this.state.name}</h1>

                <TodoList todos={this.state.todos} />
            </>

        );
    }
}

export default App;