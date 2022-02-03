import React from "react";
import "./style.css";

class App extends React.Component{
  constructor(){
    console.log("Constructor called")
    super();
    this.state={
       fname:'',
       lname:'',
       fullname:''
    }
  }
  input1=(e)=>{
   this.setState({fname:e.target.value})
  }
  input2=(e)=>{
    this.setState({lname:e.target.value})
   }
   name=()=>{
     this.setState({fullname:this.state.fname+this.state.lname})
   }
   //testing Life cycle methods which methods called firrst//
   componentDidMount(){
     console.log("componentDidMount called")
   }
   componentDidUpdate(){
     console.log("componentDidUpdate called")
   }
   shouldComponentUpdate(){
     console.log("shouldComponentUpdate-true")
     return true;
   }
   static getDerivedStateFromProps(x){
     console.log('getDerivedStatefromProps',x);
   }
  render(){
    console.log("Render called")
    return(
      <div>
        <h2>Class Componte Life Cycle Methods</h2>
        FirstName:<input type="text" placeholder="Enter your FirstName" onKeyUp={this.input1}/><br/><br/>
        LastName:<input type="text" placeholder="Enter your LastName" onKeyUp={this.input2}/><hr/>
        <button onClick={this.name}>Show</button><br/><br/>
      
        <b>FullName : </b><span><b>{this.state.fullname}</b></span>

      </div>
    )
  }
}
export default App;
