import React, { Component } from 'react';
import {
    HashRouter as Router,
    Route,
    Link

} from 'react-router-dom';
function Mychildone(){
  return(
    <div>woshi childone</div>
  )
}
function Mychildtwo(){
  return(
    <div>woshi childtwo</div>
  )
}
class Shopping extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <div>

      Shopping
    
      </div>
    )
  }
}
export default Shopping
