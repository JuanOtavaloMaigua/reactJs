import React, { Component } from 'react';
import './App.css';

import tasks from './sample/task.json';

import Tasks from './components/Tasks';



class App extends Component{

  state = {
    tasks: tasks
  }

  render(){
    return <div>
        <Tasks tasks = {this.state.tasks}/>
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
