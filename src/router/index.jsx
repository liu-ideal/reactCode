import React from 'react';
import {
    HashRouter as Router,
    Route,
    Link

} from 'react-router-dom';
import "./index.scss"
import App from '../components/app';
import Index from '../components/index';
import Shopping from '../components/shopping';
import ShoppingCar from '../components/statement';
function RouterConfig(){
    return (
       <Router>
              <div className="wrap">
             <Link to="/gouwu" className="freeList">任意级菜单</Link>
             <Link to="/" className="shoppingCar">购物车</Link>
            <Route path="/gouwu" component={Index}/>
            <Route exact path='/' component={Shopping}/>
            <Route exact path='/shoppingcar' component={ShoppingCar}/>
            </div>
    </Router>
  )
};

export default RouterConfig;
