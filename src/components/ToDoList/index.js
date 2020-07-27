import React from 'react';
import ToDoHeader from './ToDoHeader';
import ToDoContent from './ToDoContent';
import ToDoForm from './ToDoForm';
import {Row, Col} from 'react-bootstrap';

const ToDoList = (props) => {
    return(
        <div>
            <Row>
                <ToDoHeader />
            </Row>
            <Row className="justify-content-center">
                <Col xs={10}>
                    <ToDoContent data={props.data} editer={props.editer} remover={props.remover} />
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs={10}>
                    <ToDoForm adder={props.adder} />
                </Col>
            </Row>
        </div>
    );
}

export default ToDoList;