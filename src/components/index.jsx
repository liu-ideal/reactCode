import React, { Component } from 'react';
import {connect} from 'react-redux';
{/*import style from '../css/index';*/}
import "./freeList.scss"
import Cover from './cover'
import createData from "../../mock/data.js"
import axios from 'axios'
class Index extends Component {
  constructor(props){
    super(props);
    this.state={
      rootList:[1,2,3],
      coverShow:true,
      dataHtml:'',
      firstListShow:''
    }
    this.coverShouldShow=this.coverShouldShow.bind(this);
  }
    render() {
        return (
            <div className="wrap_freeList" onClick={()=>{this.setState({firstListShow:''})}}>
        {this.state.coverShow?<Cover title="输入1-6之间任意正整数" notProperly="输入非法" coverShouldShow={this.coverShouldShow}/>:''}
                <p className="tip">输入任意整数n,生成n级菜单目录(考虑性能及测试方便,n只能小于6)</p>
                <nav>
                <ul className="root_list">
                {this.state.rootList.map((x)=>
                    (
                      <li key={x} onMouseOver={(e)=>{this.firstListShow.bind(this,x,e)()}} onMouseOut={(e)=>{this.firstListShow.bind(this,'',e)()}} id='myself'>
                    <span>菜单{x}</span>
                      {this.state.firstListShow===x?<ul dangerouslySetInnerHTML={{__html: this.state.dataHtml}}/>:''}
                     </li>
                  )
                  )}
                </ul>
                </nav>
               <div className="reset" onClick={()=>{this.setState({coverShow:true})}}>重新输入</div>
            </div>
        )
    }
    coverShouldShow(obj){
      this.setState({
        coverShow:obj.show
      })
      this.mockCreateData(obj.number)
      this.receiveServerData("/mylist")
    }
    mockCreateData(num){
      createData(num)
    }
    receiveServerData(url){
      axios.get(url).then((res)=>{
        this.setState({
          dataHtml:this.createNode(res.data.list)
        })
      })
    }
    createNode(data){
      let str='<ul class="need_absolute">';
      for(let i=0;i<data.length;i++){
      str=str+'<li>'+`<span class="list_span">${data[i].value}</span>`;
      if(data[i].child[0].hasOwnProperty('value')){
      str=str+this.createNode(data[i].child)
      }
      str=str+'</li>'
      }
      str=str+'</ul>'
    return str
    }
    firstListShow(x,e){
      if(e.type==="mouseout"){
        if(e.target.id==="myself"){
          this.setState({
            firstListShow:x
          })
        }
      }else if(e.type==="mouseover"){
        this.setState({
          firstListShow:x
        },dealWithEvent)
        {/*这里开始使用原生JS操作事件代理*/}
        function dealWithEvent(){
          let totalUl = document.getElementsByClassName("need_absolute")[0];
          totalUl.onmouseover=(e)=>{
            let target = e.target||e.srcElement;
          if(target.className==='list_span'){
          let objLi = siblings(target.parentNode);
           for(let i=0;i<objLi.length;i++){
             if(getNextSibling(objLi[i].getElementsByClassName("list_span")[0])){
                  getNextSibling(objLi[i].getElementsByClassName("list_span")[0]).style.display='none'
             }

           }
            let targetSibling=getNextSibling(target);
            if(targetSibling){
              targetSibling.style.display='block';
            }
          //console.log(targetSibling)
          }
        };
      function siblings(elm){
          var a = [];    //保存所有兄弟节点
          var p = elm.parentNode.children; //获取父级的所有子节点
          for(var i = 0; i < p.length; i++){  //循环
              if(p[i].nodeType == 1 && p[i] != elm){  //如果该节点是元素节点与不是这个节点本身
                  a.push(p[i]);      // 添加到兄弟节点里
              }
          }

         return a;

      }
      function getNextSibling(target){
        return target.nextElementSibling||target.nextSibling;
      }
        }


      }

    }
};
export default Index
