import { useState, useEffect } from "react";
import { TodoContext } from "./contexts/TodoContext";

import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
import AddTodoModal from "./components/AddTodoModal";

const BASE_URL = "http://localhost:3030/jsonstore/todos";

function App() {
    const [todos, setTodos] = useState([]);
    const [showAddTodo, setShowAddTodo] = useState(false);

    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(result => setTodos(Object.values(result)));

    }, []);

    const onTodoAddSubmit = async (values) => {

        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(values),
        });

        const result = await response.json();

        setShowAddTodo(false);
        setTodos(state => [...state, result]);
    };

    const onTodoAddClick = () => {
        setShowAddTodo(true);
    };

    const onTodoAddClose = () => {
        setShowAddTodo(false);
    };

    const onTodoDeleteClick = async (todoId) => {
        const response = await fetch(`${BASE_URL}/${todoId}`, { method: 'DELETE' });

        setTodos(state => state.filter(x => x._id !== todoId));
    };

    const onTodoChangeStateClick = async (todoId, title, isFinished) => {

        const response = await fetch(`${BASE_URL}/${todoId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ title, isFinished: !isFinished, _id: todoId }),
        });

        setTodos(state => state.reduce((acc, curr) => {
            if (curr._id === todoId) {
                curr.isFinished = !curr.isFinished;
            };

            acc.push(curr);

            return acc;
        }, []));
    };

    const contextValue = {
        onTodoDeleteClick,
        onTodoChangeStateClick,
    };

    return (
        <TodoContext.Provider value={contextValue}>
            <div>
                <Header />

                <CardContainer todos={todos} onTodoAddClick={onTodoAddClick} />

                <AddTodoModal show={showAddTodo} onTodoAddSubmit={onTodoAddSubmit} onTodoAddClose={onTodoAddClose} />
            </div>
        </TodoContext.Provider>
    )
};

export default App;