import React, {useState, useRef} from 'react';
import '../../css/ToDo.css';
import {Card, Row, Col, Button, Form} from 'react-bootstrap';
import {Pencil, Trash, Check2 } from 'react-bootstrap-icons';

const ToDo = (props) => {
    const inputRef = useRef(null);
    const [showEditBox, setShowEditBox] = useState(false);

    return(
        <div>
            <Row className="align-items-center">
                <Col xs={10}>
                    <Card className="item">
                            <Card.Body className="item-text">
                                {props.currentItem.content}

                            {
                            showEditBox ? <Form className="form-margin-top">
                                <Row>
                                    <Col xs={10}>
                                        <Form.Control ref={inputRef} placeholder="Edit your to do here." />
                                    </Col>
                                    <Col xs={1}>
                                        <Button variant="success" onClick={() => {
                                            props.editer({id: props.currentItem.id, content: inputRef.current.value});
                                            setShowEditBox(false);
                                        }}>
                                            <Check2 color="yellow" />
                                        </Button>
                                    </Col>
                                </Row>
                            </Form> : ''
                            }

                            </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Button variant="primary" onClick={() => {
                        setShowEditBox(true);
                    }}>
                        <Pencil color="white" />
                    </Button>
                </Col>

                <Col className="set-left-margin">
                    <Button variant="danger" onClick={() => props.remover(props.currentItem.id)}>
                        <Trash color="white" />
                    </Button>
                </Col>
            </Row>
        </div>
    );
}

export default ToDo;