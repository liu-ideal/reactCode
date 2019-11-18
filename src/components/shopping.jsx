import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import "./shopping.scss";
import Store from "../redux"
class Shopping extends Component {
  constructor(props) {
    super(props)
    this.state={
        proList:'',
        tipAddSuccess:false
    }
    this.state.proList= JSON.parse(getJsonData());
    this.timer=null;
  }
  render(){
    return(
      <div className="wrap_shopping">
      <ul className="ul_flex">
      {
        this.state.proList.map((x)=>
          <li key={x.id}>
          <img src={x.imgSrc}/>
          <h4 title={x.title}>{x.title}</h4>
          <p>{x.price}</p>
          <span onClick={this.toBuy.bind(this,{
              id:x.id,
              title:x.title,
              imgSrc:x.imgSrc,
              price:x.price,
              num:1,
              select:false
          })}>购买</span>
          </li>
        )
      }
      </ul>
      <button onClick={()=>{this.props.history.push('/shoppingcar')}}>去购物车结算</button>
      {this.state.tipAddSuccess&&<div className="tip_add_success" ref="tipDom">添加至购物车成功</div>}
      </div>
    )
  }
  toBuy(data){
    Store.dispatch({type:'BUY',data:data});
    this.tipAddSuccessNeedShow.bind(this)()
  }
  tipAddSuccessNeedShow(){
    this.setState({tipAddSuccess:false},()=>{this.setState({tipAddSuccess:true})});
    clearTimeout(this.timer);
    this.timer=setTimeout(()=>{this.refs.tipDom&&this.setState({tipAddSuccess:false})},1000)
  }
}
export default withRouter(Shopping)
function getJsonData(){
  return `[{
    "id":"1",
    "title": "华为 HUAWEI Mate 30 Pro 5G 麒麟990 OLED环幕屏双4000万徕卡电影四摄8GB+256GB亮黑色5G全网通版",
    "imgSrc": "http://img14.360buyimg.com/n7/jfs/t1/59987/13/14817/360682/5dc409bdE8af66cf3/02adb3c575145460.jpg",
    "price": "6899.00"
  }, {
    "id":"2",
    "title": "华为 HUAWEI Mate 30 5G 麒麟990 4000万超感光徕卡影像双超级快充8GB+128GB亮黑色5G全网通版",
    "imgSrc": "http://img14.360buyimg.com/n7/jfs/t1/70716/31/14923/376672/5dc409e2E8d8b3e86/e1a71ca177d523e9.jpg",
    "price": "4999.00"
  }, {
    "id":"3",
    "title": "荣耀20 李现同款 4800万超广角AI四摄 3200W美颜自拍 麒麟Kirin980全网通版8GB+128GB 蓝水翡翠",
    "imgSrc": "http://img13.360buyimg.com/n7/jfs/t1/100562/24/1769/271621/5dc57dc5E0945d9f5/0ab5550b84b19ee7.jpg",
    "price": "2199.00"
  }, {
    "id":"4",
    "title": "华为 HUAWEI 畅享 10S 炫彩OLED屏幕指纹4800万超广角AI三摄4000mAh大电池6GB+64GB天空之境全网通双4G手机",
    "imgSrc": "http://img12.360buyimg.com/n7/jfs/t1/60343/31/13616/44609/5db2b2e5E0c461d12/dcb35360f4cd8287.jpg",
    "price": "1599.00"
  }, {
    "id":"5",
    "title": "荣耀V20 游戏手机 麒麟980芯片 魅眼全视屏 4800万深感相机 6GB+128GB 幻夜黑 移动联通电信4G",
    "imgSrc": "http://img13.360buyimg.com/n7/jfs/t1/62540/23/14846/269022/5dc57f88Eb511a178/e1727cb6b69dc42e.jpg",
    "price": "1799.00"
  }, {
    "id":"6",
    "title": "华为 HUAWEI nova 5z 麒麟810芯片 4800万AI四摄 3200万人像超级夜景  6GB+64GB 幻夜黑 全网通双卡双待",
    "imgSrc": "http://img13.360buyimg.com/n7/jfs/t1/58850/35/15043/275380/5dc574fdE4279bc98/cae8f1a03023f4c4.jpg",
    "price": "1399.00"
  }, {
    "id":"7",
    "title": "华为 HUAWEI Mate 30 Pro 麒麟990旗舰芯片OLED环幕屏双4000万徕卡电影四摄8GB+128GB星河银4G全网通手机",
    "imgSrc": "http://img12.360buyimg.com/n7/jfs/t1/46479/34/11029/188390/5d80c24dE313369c5/74e27d771ff37afe.jpg",
    "price": "5799.00"
  }, {
    "id":"8",
    "title": "荣耀9X 麒麟810 4000mAh超强续航 4800万超清夜拍 6.59英寸升降全面屏 全网通6GB+64GB 魅海蓝",
    "imgSrc": "http://img12.360buyimg.com/n7/jfs/t1/56281/34/15311/319739/5dc584c3Ea26cbbb7/69bd49ffc9693bc7.jpg",
    "price": "1399.00"
  }, {
    "id":"9",
    "title": "【超级爆款】华为 HUAWEI Mate 30 麒麟990旗舰芯片4000万超感光徕卡影像双超级快充屏内指纹8G+128GB亮黑色4G全网通版",
    "imgSrc": "http://img11.360buyimg.com/n7/jfs/t1/79596/30/11549/676613/5d901c88Ec7a97d29/d189e56d89d975b6.jpg",
    "price": "4299.00"
  }, {
    "id":"10",
    "title": "【超级爆品】荣耀20i 3200万AI自拍 超广角三摄 全网通版6GB+64GB 渐变蓝 移动联通电信4G全面屏手机",
    "imgSrc": "http://img12.360buyimg.com/n7/jfs/t1/47365/6/15460/240765/5dc58ae7Ef0966cab/8d7b993a7b72476b.jpg",
    "price": "1199.00"
  }, {
    "id":"11",
    "title": "华为 HUAWEI nova 5 Pro 前置3200万人像超级夜景4800万AI四摄麒麟980芯片8GB+128GB亮黑色全网通双4G手机",
    "imgSrc": "http://img14.360buyimg.com/n7/jfs/t1/51336/1/8104/201268/5d5b5213Ec0ea1a1d/ca1e456c486d6ed7.jpg",
    "price": "2699.00"
  }, {
    "id":"12",
    "title": "【超级新品】荣耀20S 李现同款 3200万人像超级夜景 4800万超广角AI三摄 麒麟810 全网通版6GB+128GB 蝶羽白",
    "imgSrc": "http://img10.360buyimg.com/n7/jfs/t1/77817/35/14934/238726/5dc57ee6E61e75728/a46effd3ef3d8132.jpg",
    "price": "1599.00"
  }]`
}
