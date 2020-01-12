{/*购物车结算组件*/}
import React, { Component } from 'react';
import "./statement.scss"
import { withRouter } from 'react-router-dom';
import Store from "../redux"
class Statement extends Component {
  constructor(props) {
    super(props)
    this.state={
      list:[],
      selectAll:'',
      totalPrice:0
    }
    this.state.list=Store.getState()
  }
  render(){
    let mylist=this.state.list.map((x,index)=>
     (
      <li key={x.id}>
     <div className='goods_list_left'><input type="checkbox" checked={this.state.list[index].select} onChange={(e)=>{this.everyoneCheckboxOnchange.bind(this,index,e)()}}/><img src={x.imgSrc}/><p>{x.title}</p></div>
     <div className='goods_list_right'><p>￥{x.price}</p><div className="change_num"><i onClick={()=>{this.addOrReduceNumber.bind(this,{type:'reduce',index:index})()}}>-</i><input type="text" value={this.state.list[index].num} onChange={(e)=>{this.changeGoodsNumber.bind(this,index,e)()}} onBlur={(e)=>{this.dealWithOnblur.bind(this,index,e)()}}/><i onClick={()=>{this.addOrReduceNumber.bind(this,{type:'add',index:index})()}}>+</i></div><span className="go_delete" onClick={this.deleteSomeoneGoods.bind(this,index)}>删除</span></div>
     </li>)
   );
    return(
      <div className="wrap_statement">
     <h3>商品列表</h3>
     <div className="item_title">

     <div className="item_title_left">
     <label><input type="checkbox" checked={this.state.selectAll} onChange={this.checkboxSelectAll.bind(this)}/> 全选</label>
     <p>商品</p>
     </div>

     <div className="item_title_right">
     <p>单价</p>
     <p>数量</p>
     <p>操作</p>
     </div>

     </div>

     <ul className="goods_list">
     {
      this.state.list.length>0?mylist:<p id="no_goods">你的购物车空空如也...</p>
     }
     </ul>

     <div className="delete_and_total_price">
     <div className="delete_and_total_price_left">
    <label><input type="checkbox" checked={this.state.selectAll} onChange={this.checkboxSelectAll.bind(this)}/> 全选</label>
    <p className="delete_select_goods" onClick={this.deleteSelectGoods.bind(this)}>删除选中商品</p>
     </div>

    <div className="delete_and_total_price_right">
    <p>总价:</p> <div className="price_item"><span className="price">￥{this.state.totalPrice}</span><button className="settle_accounts" onClick={()=>{alert("此处调用支付接口,总价格￥"+this.state.totalPrice)}}>结算</button></div>
    </div>

     </div>
    <button className="continue_shop" onClick={()=>{this.props.history.push('/')}}>暂不结算,继续购物</button>
      </div>
    )
  }
  componentDidMount(){
    this.computePrice();
  }
  everyoneCheckboxOnchange(index,e){
    this.state.list[index].select=e.target.checked;
    this.setState({list:this.state.list});
    Store.dispatch({type:'CHANGE_SELECT',data:{id:this.state.list[index].id,select:this.state.list[index].select}})
  }
  checkboxSelectAll(e){

    for(let i=0;i<this.state.list.length;i++){
      this.state.list[i].select=e.target.checked;
    }
    this.setState({list:this.state.list,selectAll:e.target.checked});
    Store.dispatch({type:'CHANGE_SELECT_ALL',data:{select:e.target.checked}})
  }
  deleteSomeoneGoods(index){
      Store.dispatch({type:'DELETE',data:{id:this.state.list[index].id}});
      this.setState({list:Store.getState()});
      this.computePrice();
  }
  deleteSelectGoods(){
    Store.dispatch({type:'DELETE_SELECT'});
    this.setState({list:Store.getState()});
    this.computePrice();
  }
  changeGoodsNumber(index,e){
    this.state.list[index].num=Number(e.target.value);
    if(e.target.value>100){this.state.list[index].num=100}
    if(!Number(e.target.value)){this.state.list[index].num=''}
    this.setState({list:this.state.list});
    Store.dispatch({type:'CHANGE_NUM',data:{num:this.state.list[index].num,id:this.state.list[index].id}})
    this.computePrice();
  }
  addOrReduceNumber(data){
    if(data.type==='add'){
      this.state.list[data.index].num=this.state.list[data.index].num+1;
      if(this.state.list[data.index].num>100){this.state.list[data.index].num=100}
      this.setState({list:this.state.list});
      Store.dispatch({type:'CHANGE_NUM',data:{num:this.state.list[data.index].num,id:this.state.list[data.index].id}})

    }else if(data.type==='reduce'){
      this.state.list[data.index].num=this.state.list[data.index].num-1;
      if(this.state.list[data.index].num<1){this.state.list[data.index].num=1};
      this.setState({list:this.state.list});
      Store.dispatch({type:'CHANGE_NUM',data:{num:this.state.list[data.index].num,id:this.state.list[data.index].id}})
    }
    this.computePrice();
  }
  dealWithOnblur(index,e){
    if(!Number(e.target.value)){
      this.state.list[index].num=1;
      this.setState({list:this.state.list})
    }
    this.computePrice();
  }
  computePrice(){
    let totalPrice=0;
    for(let i=0;i<this.state.list.length;i++){
      let count=this.state.list[i].num;
      let price=this.state.list[i].price;
      totalPrice+=count*price;
    }
    this.setState({totalPrice:totalPrice})
  }
}
export default withRouter(Statement);
