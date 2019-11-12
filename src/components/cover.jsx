import React, { Component } from 'react';
import "./cover.scss"
class Cover extends Component {
  constructor(props) {
    super(props);
    this.state={
      value:'',
      errorShow:false
    }
  }
  render(){
    return(
      <div className="cover">
       <div className="confirm_box">
       <p>{this.props.title}</p>
        <input type="text" value={this.state.value} onChange={this.handleValue.bind(this)}/>
        <div className="confirm" onClick={this.toFix.bind(this)}>确定</div>
        <div className="not_properly">{this.state.errorShow?this.props.notProperly:''}</div>
       </div>
      </div>
    )


  }
  handleValue(e){
    this.setState({
      value:e.target.value
    },()=>{
      let numberReg=new RegExp("[^1-9]");
      let isProperly=numberReg.test(Number(this.state.value));
      let errorLength=this.state.value.length!==1;
      if(isProperly||errorLength){
        this.setState({
          errorShow:true
        })
      }else{
        this.setState({
          errorShow:false
        })
      }
    })
  }
  toFix(){
    let numberReg=new RegExp("[^1-9]");
    let isProperly=numberReg.test(Number(this.state.value));
    let errorLength=this.state.value.length!==1;
    if(isProperly||errorLength){
      return
    }
    this.props.coverShouldShow(false)
  }
}
export default Cover
