   import { Badge , Card ,  Button , Form } from 'react-bootstrap';
   import React, { useState } from 'react' ;
   import './ToDo.css' ;
   import { useDispatch } from 'react-redux';
   import { toggleComplete } from '../../redux/actions/actions';
   import { editTask } from '../../redux/actions/actions';

   const Task = ({tasks , index}) => {
      const dispatch = useDispatch()
      const handleComplete = () =>{
         dispatch(toggleComplete({id : tasks.id}))
         
      }
      const [inputTodo , setInputTodo] = useState(false) ;
      const handleInput = () =>{
          setInputTodo (true)
      }
      const [newTodo, setNewTodo] =useState("")
      const handleSubmit = () => {
         setInputTodo (false)
         dispatch(editTask({id:tasks.id, newTodo: newTodo}))
         
         
      }
      
      return (
         <div className='list'>
            <Badge bg="primary" pill>{Number(index) + 1}</Badge>
            
         {inputTodo === false ? 
         (<Card><Card.Body className='todo'>{tasks.todo}</Card.Body></Card>) 
         : <><Form.Control as="textarea" onChange={(event)=>{setNewTodo(event.target.value)}} style={{height:'80px',width:'300px'}}/>
         <Button onClick={handleSubmit}>submit</Button></>}
         
         { tasks.complete === false ?  <Button variant="success" onClick={handleComplete}>done</Button>  : null }
         <Button variant="secondary" onClick={handleInput}>edit</Button>
            
         </div> 
      )
   }
   
   export default Task
 
        
        
              
             