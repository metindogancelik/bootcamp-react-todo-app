import React from 'react';
import ToDo from './ToDo';

const ToDoContent = (props) => {
    return(
        <div>
            { 
                props.data.map((todo, i) => {                         
                    return(<ToDo key={i} currentItem={todo} editer={props.editer} remover={props.remover} />);
                })
            }

        </div>
    );
}

export default ToDoContent;