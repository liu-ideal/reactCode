import React, { Component } from 'react';
import {connect} from 'react-redux';
{/*import style from '../css/index';*/}
import "./freeList.scss"
import Cover from './cover'
class Index extends Component {
  constructor(props){
    super(props);
    this.state={
      rootList:[1,2,3],
      coverShow:true
    }
  this.rootList = this.state.rootList.map((x)=>
      <li key={x}>菜单{x}</li>
    )
    this.coverShouldShow=this.coverShouldShow.bind(this)
  }
    render() {
        return (
            <div className="wrap_freeList">
        {this.state.coverShow?<Cover title="输入1-10之间任意正整数" notProperly="输入非法" coverShouldShow={this.coverShouldShow}/>:''}
                <p className="tip">输入任意整数n,生成n级菜单目录(为测试方便,n只能小于10)</p>
                <nav>
                <ul className="root_list">
                {this.rootList}
                </ul>
                </nav>
               <div className="reset" onClick={()=>{this.coverShouldShow(true)}}>重新输入</div>
            </div>
        )
    }
    coverShouldShow(data){
      this.setState({
        coverShow:data
      })
    }
};
export default Index
