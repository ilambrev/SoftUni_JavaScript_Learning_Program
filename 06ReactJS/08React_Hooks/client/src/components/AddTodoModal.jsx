import { useForm } from '../hooks/useForm';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const AddTodoModal = ({
    show,
    onTodoAddSubmit,
    onTodoAddClose,
}) => {

    const { formValues, onChangeHandler, onSubmit } = useForm({
        title: '',
        isFinished: false,
    }, onTodoAddSubmit);

    return (

        <Modal show={show} onEscapeKeyDown={onTodoAddClose}>
            <Modal.Header closeButton onHide={onTodoAddClose}>
                <Modal.Title>Add Todo</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Todo</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                            placeholder="Do something"
                            value={formValues.name}
                            onChange={onChangeHandler}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">Submit</Button>
                    <Button variant="secondary" style={{ marginLeft: "10px" }} onClick={onTodoAddClose} >Close</Button>
                </Form>

            </Modal.Body>

        </Modal>

    );
};

export default AddTodoModal;