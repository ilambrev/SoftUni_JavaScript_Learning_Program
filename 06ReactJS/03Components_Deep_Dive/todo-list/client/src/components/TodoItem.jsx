export default function TodoItem({ id, text, isCompleted, changeStatusHandler }) {
    const onChangeStatusClick = () => {
        changeStatusHandler(id);
    }

    return (
        <tr className={`todo${isCompleted ? ' is-completed' : ''}`}>
            <td>{text}</td>
            <td>{isCompleted ? 'Complete' : 'Incomplete'}</td>
            <td className="todo-action">
                <button onClick={onChangeStatusClick} className="btn todo-btn">Change status</button>
            </td>
        </tr>
    );
}