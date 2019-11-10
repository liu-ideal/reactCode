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
function RouterConfig(){
    return (
       <Router>
              <div className="wrap">
             <Link to="/" className="freeList">任意级菜单</Link>
             <Link to="/gouwu" className="shoppingCar">购物车</Link>
            <Route  path="/gouwu" component={Shopping}/>
            <Route exact path='/' component={Index}/>
            </div>
    </Router>
  )
};

export default RouterConfig;
