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

    return (
        <>
            <Header />

            <CardContainer todos={todos} onTodoAddClick={onTodoAddClick} onTodoDeleteClick={onTodoDeleteClick} />

            <AddTodoModal show={showAddTodo} onTodoAddSubmit={onTodoAddSubmit} onTodoAddClose={onTodoAddClose} />
        </>
    )
};

export default App;