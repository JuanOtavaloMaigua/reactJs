import React, { Component } from 'react';
import './App.css';

import tasks from './examples/task.json'

console.log(tasks)
class App extends Component{

  state = {
    tasks: tasks
  }

  render(){
    return(
      <div> 
        { this.state.tasks.map( element => <h1>{element.title}</h1> )}
      </div>
    )
  }
}

export default App;
