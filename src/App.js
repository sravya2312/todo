import logo from './logo.svg';
import { useEffect, useState } from "react";
import './App.css';
import Input from "./components/input";
import Box from "./components/box";

function App() {
  const [todos,setToDo] = useState([]);

  const removeToDo = (id) => {
    console.log(id);
    const newTodos = todos.filter(
       (d,index) => {
          if(index !== id){
            return true;
          }else{
            return false;
          }
       }
    )
    setToDo(newTodos); 
  }

  const addToDoHandler = (item) => {
    setToDo(
      [
        ...todos,
        {
          item,
          time: new Date().toLocaleTimeString()
        }
      ]
    )
  }
  return (
    <div className="bg-black h-screen p-3">
      <div className="rounded mx-auto max-w-[750px] min-h-[550px] shadow-2xl bg-white">
        <Input handler={addToDoHandler}/>
        <Box data={todos}  removeHandler={removeToDo}/>
      </div>
    
          
    </div>
  );
}

export default App;
