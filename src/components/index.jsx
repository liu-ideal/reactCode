import React, { Component } from 'react';
import {connect} from 'react-redux';
{/*import style from '../css/index';*/}
import "./freeList.scss"
class Index extends Component {
    render() {
        return (
            <div className="wrap_freeList">
                <p className="tip">输入任意整数n,生成n级菜单目录(为测试方便,n只能小于10)</p>
                <nav>
                <ul>
                <li>
                菜单一
                </li>
                </ul>
                </nav>
                <section>
                    显示redux中数据：{this.props.num}
                </section>
            </div>
        );
    };
};
export default Index
