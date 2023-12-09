import { Component } from "react";
import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import TodoContext from "../contexts/TodoContext";

export default class Navigation extends Component {
    render() {

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
                label: (
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                        Navigation Three - Link
                    </a>
                ),
                key: 'alipay',
            },
        ];

        return (
            <TodoContext.Consumer>
                {({ username }) => (
                    <Menu mode="horizontal" items={[...items, {label: username, key: 'username'}]} />
                )}
            </TodoContext.Consumer>
        );
    }
}