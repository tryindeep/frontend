import React from 'react'
import {ACTIONS} from '@/App'

function Task({task , dispatch}) {
  return (
    <div>
        <span style={{ color : task.completed ? "#AAA" : "#000"}}>
            {task.title} 
        </span>
        <button onClick={() => dispatch({type : ACTIONS.TOGGLE_TASK , payload : {id : task.id}})}>
            Toggle
        </button>
        <button onClick={() => dispatch({type : ACTIONS.DELETE_TASK , payload : {id : task.id}})}>
            Delete
        </button>
    </div>
  )
}

export default Task;