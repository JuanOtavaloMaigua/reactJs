import React, { Component } from 'react'
import './Task.css'
import PropTypes from 'prop-types';

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
            <input type='checkbox' onChange={this.props.checkDone.bind(this, task.id)}/>
            <button style={btnDelete} onClick = {this.props.deleteTask.bind(this, task.id)}>
                X
            </button>
         </div>
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired
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