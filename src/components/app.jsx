import React, { Component } from 'react';
import Router from '../router';
import "../css/app.scss"
class App extends Component{
    constructor(props){
        super(props);
    };
    render(){
        return (
           <div id="app">
            <h2><span className="title">react代码随笔</span></h2>
                  <Router/>
            </div>
          )
    }
};

export default App;
