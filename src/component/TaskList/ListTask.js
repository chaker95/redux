 import Task from '../todo/ToDo' ;
 import {Button, ButtonGroup} from'react-bootstrap' ;
import { useSelector, useDispatch } from "react-redux";
import {taskDone, taskTodo} from '../../redux/actions/actions';


const ListTAsk = () => {
    const listT = useSelector(state => state.taskReducer.tasks)
    const dispatch = useDispatch()
    const handleDone = () => {
         dispatch(taskDone())
    }
    const handleTodo = () => {
        dispatch(taskTodo())
   }
    
    
    return <div>
           <div style={{display:'flex',justifyContent:'space-around', width:'700px',marginLeft:'300px'}}>
                <h1>TODO List</h1>
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="secondary" onClick={handleDone} >DONE</Button>
                        <br/>
                        <Button variant="secondary" onClick={handleTodo}>TODO</Button>
                    </ButtonGroup>
            </div>
              {listT.map((tasks, index) => {
                    
                      return <Task tasks={tasks} index={index} key={index} /> ;
                })}
               
          </div>
     

};

export default ListTAsk;

      
    
