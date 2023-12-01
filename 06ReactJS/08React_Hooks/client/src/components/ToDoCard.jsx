import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ToDoCard = ({
    _id,
    title,
    isFinished,
}) => {
    const { onTodoDeleteClick, onTodoChangeStateClick } = useContext(TodoContext);

    return (

        <Card style={{ width: "18rem" }}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>State: {isFinished === true ? 'Completed' : 'In Progress'}</Card.Text>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Button variant="primary" onClick={() => onTodoChangeStateClick(_id, title, isFinished)}>Change State</Button>
                    <Button variant="dark" onClick={() => onTodoDeleteClick(_id)}>X</Button>
                </div>
            </Card.Body>
        </Card>

    );
};

export default ToDoCard;