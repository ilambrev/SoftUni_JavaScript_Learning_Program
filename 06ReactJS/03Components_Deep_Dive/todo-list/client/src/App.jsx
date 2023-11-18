import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Loading from "./components/Loading";

function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3030/jsonstore/todos')
      .then(response => response.json())
      .then(data => {
        setTodos(Object.values(data));
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  const changeStatusHandler = (todoId) => {
    setTodos(state => state.map(todo => todo._id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo));
  };

  const onTodoAdd = () => {
    const lastId = Number(todos[todos.length - 1].id);
    const _id = `todo_${lastId + 1}`;
    const text = prompt('Task name: ');
    const isCompleted = false;
    const newTask = { _id, text, isCompleted };
    setTodos(state => [newTask, ...state]);
  };

  return (
    <div>

      {/* Navigation header */}
      <Header />

      {/* Main content */}
      <main className="main">

        <section className="todo-list-container">
          <h1>Todo List</h1>

          <div className="add-btn-container">
            <button className="btn" onClick={onTodoAdd}>+ Add new Todo</button>
          </div>

          <div className="table-wrapper">

            {/* Loading spinner - show the load spinner when fetching the data from the server */}
            {isLoading ? <Loading /> : <TodoList todos={todos} changeStatusHandler={changeStatusHandler} />}

          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App