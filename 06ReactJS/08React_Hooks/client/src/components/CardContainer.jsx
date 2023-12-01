import ToDoCard from "./ToDoCard";
import Button from 'react-bootstrap/Button';

const CardContainer = ({
    todos,
    onTodoAddClick,
    onTodoDeleteClick,
}) => {

    return (

        <div style={{ display: "flex", flexDirection: "column", gap: "20px", margin: "20px" }}>

            <div style={{ display: "flex", gap: "20px", margin: "auto" }}>
                {todos.map(item => <ToDoCard key={item._id} {...item} onTodoDeleteClick={onTodoDeleteClick} />)}
            </div>

            <div style={{ display: "flex", margin: "auto" }}>
                <Button variant="primary" onClick={onTodoAddClick}>Add Todo</Button>
            </div>

        </div>


    );
}

export default CardContainer;