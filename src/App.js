import React, {Component}from 'react';
import './App.css';

class Welcome extends Component {
  render() {
    return <div>
      <h1>Hello React</h1>
      <h2>Mein Name ist Akira.</h2>
    </div>
  }
}

class Main extends Component {
  render() {
    return <div>
      <Welcome/>
    </div>
  }
}

class Hello extends Component{
  render(){
    return(
      <div>
        <p>Hello {this.props.title} </p>
        <p> Ihr name ist {this.props.name} </p>
      </div>
    )

  }
}

export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      myState: 'My first state',
      saySomething: 'Hello World'
    }
  }
  // method in this component
  changeState = () =>{
    this.setState({ myState:'Schönen Tag noch', saySomething: 'Danke!'})
  }
  render(){
    return(
      <div >
        <Main />
        <p> {this.state.myState} </p>
        <p>{this.state.saySomething} </p>
        <button onClick = {this.changeState}>Click me </button>
        <button onClick = {()=>{this.setState({saySomething:'GOGO'})}}>Click me </button>
        <button onClick={()=>{alert('hello')}}>Alert</button>
        <Hello title="World!" name="Devil Cat man"/>        
        <Hello title="React!" name = "IDK"/>
      </div>
    )
  }
}

//export default Hello

