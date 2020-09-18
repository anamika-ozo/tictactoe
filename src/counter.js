import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Counter extends React.Component{
 constructor(props){
   super(props)
       this.state = {
         count : 0 
       }
    }

addOne() {
  this.setState((preState) => {
    return {
      count : preState.count + 1
      };
   });
 }

render() {
   return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={this.addOne}>+1</button>
      </div>
     );
   }
 }


ReactDOM.render(
  <Counter />,
  document.getElementById('root')
);
