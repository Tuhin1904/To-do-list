import './index.css'
import {useState} from 'react';
import ToDoLists from './ToDoLists';

function App() {

  const[inputList, setInputList]=useState("")
  const [items, setItems]= useState([])

  const inputEvent=(event)=>{
    setInputList(event.target.value)

  } 
  const listOfItems=(event)=>{
    setItems((oldItems)=>{
      return [...oldItems,inputList]
    });
    setInputList("")
  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br/>
          <h1>To do list</h1>
          <br/>
          <input type= "text"
          value={inputList}
            placeholder="Add your item"
            onChange={inputEvent}
          />
          <button onClick={listOfItems}>+</button>
          <ul>
            {/* <li>{inputList}</li> */}
            {items.map( (itemValue,index) =>{
              return <ToDoLists 
              text={itemValue}
              id={index}
              key={index}
              />
            })}
          </ul>
        </div>
      </div>
    </>
      );
}

export default App;
