import React, {useState} from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, Row} from 'react-bootstrap/';
import ToDoList from './components/ToDoList';

function App() {

  const [db, setDb] = useState(
    [
      {
        id: 1,
        content: "To do item 1"
      },
      {
        id: 2,
        content: "To do item 2"
      },
      {
        id: 3,
        content: "To do item 3"
      }
    ]
  );

  const addToDo = (todo) => {
    if(db.length === 0) {
      todo.id = 1;
    } else {
      todo.id = (db[db.length-1].id + 1);
    }

    setDb([...db, todo]);
  }

  const editToDo = (todo) => {
    let newDb = [...db];
    
    newDb.map((item) => {
      if(item.id === todo.id){
        newDb[newDb.indexOf(item)] = todo;
        setDb(newDb);
        return 0;
      } 

      return -1;
    });
  }

  const removeToDo = (id) => {
    setDb(db.filter((todo) => todo.id !== id));
  }

  return (
    <div className='App'>
      <Container>
        <Row className="justify-content-center">
            <ToDoList data={db} adder={addToDo} editer={editToDo} remover={removeToDo} />
        </Row>
      </Container>
    </div>
  );
}

export default App;
