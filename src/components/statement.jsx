{/*购物车结算组件*/}
import React, { Component } from 'react';
import "./statement.scss"
import { withRouter } from 'react-router-dom';
import Store from "../redux"
class Statement extends Component {
  constructor(props) {
    super(props)
    this.state={
      list:[]
    }
    this.state.list=Store.getState()
  }
  render(){
    let mylist=this.state.list.map((x,index)=>
     (
      <li key={x.id}>
     <div className='goods_list_left'><input type="checkbox"/><img src={x.imgSrc}/><p>{x.title}</p></div>
     <div className='goods_list_right'><p>￥{x.price}</p><div className="change_num"><i>-</i><input type="text" value={this.state.list[index].num} onChange={()=>{}}/><i>+</i></div><span className="go_delete">删除</span></div>
     </li>)
   );
    return(
      <div className="wrap_statement">
     <h3>商品列表</h3>
     <div className="item_title">

     <div className="item_title_left">
     <label><input type="checkbox" value={true} /> 全选</label>
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
    <label><input type="checkbox" value={true} /> 全选</label>
    <p className="delete_select_goods">删除选中商品</p>
     </div>

    <div className="delete_and_total_price_right">
    <p>总价:</p> <div className="price_item"><span className="price">￥1123</span><button className="settle_accounts">结算</button></div>
    </div>

     </div>
    <button className="continue_shop" onClick={()=>{this.props.history.push('/gouwu')}}>暂不结算,继续购物</button>
      </div>
    )
  }
}
export default withRouter(Statement);
