import { v4 as uuid } from 'uuid';
import { ADD_TASK } from '../constants/action-types'; 
import { TOGGLE_COMPLETE } from '../constants/action-types';
import { EDIT_TASK } from "../constants/action-types"
import { TASK_DONE } from '../constants/action-types';
import { TASK_TODO } from '../constants/action-types';

const initiaState = {
    tasks: [
        {
            id: uuid(),
            todo: "Give dog a bath",
            complete: true,
        },
        {
            id: uuid(),
            todo: "Do laundry",
            complete: true,
        },
        {
            id: uuid(),
            todo: "Vacuum floor",
            complete: false,
        },
        {
            id: uuid(),
            todo: "Feed cat",
            complete: true,
        },
        {
            id: uuid(),
            todo: "Change light bulbs",
            complete: false,
        },  
    ]
};

function taskReducer  (state = initiaState, action){
    const {type, payload} = action;
    switch (type) {
        case ADD_TASK:
            return {
                tasks:[...state.tasks, {id:uuid(),todo: payload.newTask, complete:false}],
            }
        case TOGGLE_COMPLETE:
                return {
                    tasks :  state.tasks.map((task) =>
                     (payload.id === task.id ? {...task, complete:true} : task))
                }
        case EDIT_TASK:
            return {
                tasks: state.tasks.map((task) =>
                    (payload.id === task.id  ? {...task, todo:payload.newTodo } : task))
                
            }
            case TASK_DONE:
            return {
                tasks: state.tasks.filter(
                    (task => task.complete !== true))
                
            }
            case TASK_TODO:
            return {
                tasks: state.tasks.filter(
                    (task => task.complete !== false))
                
            }
            default:
                return state; 
            }
        }
        
export default taskReducer;