import { ADD_TASK } from "../constants/action-types"
import { TOGGLE_COMPLETE } from "../constants/action-types"
import { EDIT_TASK } from "../constants/action-types"
import { TASK_DONE } from "../constants/action-types"
import { TASK_TODO } from "../constants/action-types"

export const addTask = (payload) => {
    return {
        type:ADD_TASK,
        payload,
    }
}
export const toggleComplete = (payload) => {
    return {
        type:TOGGLE_COMPLETE,
        payload,
    }
}
export const editTask = (payload) => {
    return {
        type:EDIT_TASK,
        payload,
    }
}
export const taskDone = (payload) => {
    return {
        type:TASK_DONE,
        payload,
    }
}
export const taskTodo = (payload) => {
    return {
        type:TASK_TODO,
        payload,
    }
}