import React, {useState, Fragment } from "react";
import Header from './components/Header'
import Input from './components/Input'
import Todo from './components/Todo'
import './App.css';

function App() {
  const [input, setInput] = useState('')
  const [arr,setArr] = useState([])
  const handleChange = (e) => {
    setInput(prev => e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setArr(prev => [...prev, input])
  }
  console.log(arr)
  
  return (
    <Fragment>
      <Header />
      <div className="inputField">
      <Input handleSubmit={handleSubmit} handleChange={handleChange} input={input} />
       <Todo arr={arr} />
      </div>
    </Fragment>
  );
}

export default App;
