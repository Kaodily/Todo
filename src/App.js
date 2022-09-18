import React, {useState, Fragment } from "react";
import Header from './components/Header'
import Input from './components/Input'
import Todo from './components/Todo'
import Filtered from "./components/Filtered";
import './App.css';

function App() {
  const [input, setInput] = useState({
    todoInput: '',
    isTrue:false
  })
  const [arr,setArr] = useState([])
  const handleChange = (e) => {
    const {name,type,value,checked} = e.target
    setInput(prev => {
      return {
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setInput(prev => {
      return {
        ...prev,
        todoInput:''
      }
    })
    setArr(prev => [...prev, input.todoInput])
  }
  const onDelete = (id) => {
   setArr(prev => prev.filter(item => item !== id))
  }
  // const filteredhandleClick = (status) => {
  //   if (status === 'all') {
  //     setArr(prev => [...prev])
  //   } else if (status === 'active') {
      
  //   }
  // }
 
  return (
    <Fragment>
      <Header />
      <div className="inputField">
      <Input handleSubmit={handleSubmit} handleChange={handleChange} input={input} />
        <Todo arr={arr} onDelete={onDelete} handleChange={handleChange} input={input}  />
        <Filtered />
      </div>
    </Fragment>
  );
}

export default App;
