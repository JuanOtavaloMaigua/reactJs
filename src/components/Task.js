import React, { Component } from 'react'
import './Task.css'

class Task extends Component{
    StyleCompleted(){
        return{
            fontSize: '20px',
            color: this.props.task.done ? 'yellow': 'black',
            textDecoration: 'none'
        }
    }



    render(){
        const {task} = this.props
         return <div style= {this.StyleCompleted()}>
            {task.title} - 
            {task.description} - 
            {task.done} - 
            {task.id}
            <input type='checkbox'/>
            <button style={btnDelete}>
                X
            </button>
         </div>
    }
}

const btnDelete = {
    fontSize: "18px",
    background: "blue",
    color: "red",
    border: "none",
    padding: "10px 15px",
    borderRadius: "50px",
    cursor: "pointer"
    
}

export default Task;