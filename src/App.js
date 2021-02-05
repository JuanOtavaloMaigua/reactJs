import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

import './App.css';

import tasks from './sample/task.json';

//Components
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import Posts from './components/Posts';



class App extends Component{

  state = {
    tasks: tasks
  }

  addTask = (title, description) =>{
    //Creacion del objeto task
    const newTask = {
        title: title,
        description: description,
        id: this.state.tasks.length
    }
    //Al json de task que se tiene se le agrega el nuevo task
    this.setState({
      tasks: [...this.state.tasks, newTask] 
    })
  }

  
  deleteTask = (id) => {
    const newTask = this.state.tasks.filter(task => task.id !== id)
    this.setState({ tasks: newTask})
  }

  checkDone = (id) => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id){
        task.done = !task.done
      }
      return task
    })
    this.setState({tasks: newTasks})
  }

  render(){
    return <div>
      <Router>
          <Link to="/">Home</Link>
          <br/>
          <Link to="/posts">Posts</Link>


          <Route exact path="/" render={()=>{
            return <div>
                <TaskForm addTask = {this.addTask}/>

                <Tasks tasks = {this.state.tasks} 
                        deleteTask = {this.deleteTask} 
                        checkDone = {this.checkDone}/>
            </div>
          }}>
            
          </Route>

          <Route path="/posts" component={Posts}/>

      </Router>

      

    </div>
  }
}

export default App;


//Este es un componente
// function Helloworld(props) {
//   console.log(props)
//   return(
//     <div id="hello">
//       <h3>{props.subtitle}</h3>
//       {props.mytext}
//       </div>
//   )
// }


// //Esto es un componente escrito como arrow function
// const App = ()=> <div>This is my component: <Helloworld/><Helloworld/></div>

// //Este es un componente escrito como clase
// class App extends React.Component{
//   render(){
//     return <div>This is my component: <Helloworld/><Helloworld/></div>
//   }
// }


// class Helloworld extends React.Component{


//   state = {
//     show: true
//   }

//   toggleShow = ()=>{
//     this.setState({show: !this.state.show})
//   }

//   render(){
//     if (this.state.show) {
//       return (
//         <div id="hello">
//           <h3>{this.props.subtitle}</h3>
//           {this.props.mytext}
//           <button onClick={()=> this.toggleShow}>toggle Show</button>
//         </div>
//       )
//     } else {
//       return <h1> 
//         There are not elements
//         <button onClick={this.toggleShow}> toggleShow</button>
//         </h1>
//     }
//   }
  
// }

// //Este es un componente escrito como una funcion normal
// function App() {
//   return (
//     <div>
//       This is my component: 
//       <Helloworld mytext="Hello Fazt" subtitle="lorem ipsum"/>
//       <Helloworld mytext="Hello Simple" subtitle="Cample Sumple"/>
//       <Helloworld mytext="Hello Friend" subtitle="Component 3"/>
//       </div>
//   );
// }
