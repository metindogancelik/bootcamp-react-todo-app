import React, {useRef} from 'react';
import {Form, Row, Col, Button} from 'react-bootstrap';
import {Check2} from 'react-bootstrap-icons';
import '../../css/ToDoForm.css';

const ToDoForm = (props) => {
    const inputRef = useRef(null);

    return(
        <Form className="form-margin-top">
            <Row>
                <Col xs={10}>
                    <Form.Control ref={inputRef} placeholder="Write your to do here." />
                </Col>
                <Col xs={1}>
                    <Button variant="success" onClick={() => props.adder({id: 0, content: inputRef.current.value})}>
                        <Check2 color="white" />
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}

export default ToDoForm;