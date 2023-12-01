import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ToDoCard = ({
    _id,
    title,
    isFinished,
    onTodoDeleteClick,
}) => {

    return (

        <Card style={{ width: "18rem" }}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>State: {isFinished === true ? 'Completed' : 'In Progress'}</Card.Text>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <Button variant="primary">Change State</Button>
                    <Button variant="dark" onClick={() => onTodoDeleteClick(_id)}>X</Button>
                </div>
            </Card.Body>
        </Card>

    );
};

export default ToDoCard;