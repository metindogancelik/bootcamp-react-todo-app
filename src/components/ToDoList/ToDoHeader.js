import React from 'react';
import '../../css/ToDoHeader.css';
import logo from '../../img/checklist.png';

const ToDoHeader = () => {
    return(
        <div className="header">
            <img className="header-logo" src={logo} alt="Logo"/>
            <h1 className="header-text">React & Bootstrap | To Do App</h1>
        </div>
    );
        
}

export default ToDoHeader;