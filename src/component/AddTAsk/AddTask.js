import { Button, Form } from 'react-bootstrap'
import React, {useState} from 'react';
import './Addtask.css' ;
import {useDispatch} from 'react-redux';
import {addTask} from "../../redux/actions/actions";

const Addtask = () => {
  const [newTask, setNewTask] =useState("")
  const handleChange = (e) => {
      setNewTask(e.target.value)
  }
  const dispatch = useDispatch()
  const handleSubmit = () => {
     dispatch(addTask({newTask: newTask}))
     setNewTask("")
  }
  
  return (
    <div className='Add'>
       <Form.Control as="textarea" value={newTask}  onChange={handleChange} />  
       <Button variant='secondary' onClick={handleSubmit}  >add a newTodo</Button>   
       
     
    </div>

  )
}

export default Addtask ;