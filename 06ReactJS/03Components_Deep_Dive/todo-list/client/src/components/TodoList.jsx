import TodoItem from "./TodoItem";

export default function TodoList({ todos, changeStatusHandler }) {
    return (

        //Todo list table
        <table className="table">
            <thead>
                <tr>
                    <th className="table-header-task">Task</th>
                    <th className="table-header-status">Status</th>
                    <th className="table-header-action">Action</th>
                </tr>
            </thead>
            <tbody>

                {todos.map(todo => (
                    <TodoItem
                        key={todo._id}
                        id={todo._id}
                        text={todo.text}
                        isCompleted={todo.isCompleted}
                        changeStatusHandler={changeStatusHandler}
                    />
                ))}

            </tbody>
        </table>

    );
}