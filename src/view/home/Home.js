import React from 'react';
import { HashRouter as Router, } from 'react-router-dom';

import RouteList from './route/Route';
import Bread from './bread/Bread';
import './Home.scss';
import { Layout, Icon } from 'antd';
import MenuList from './menu/Menu';
import store from '../../store1/store';
import { addTodo } from '../../store/action.js';



const { Header, Sider, Content } = Layout;

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      meunArr: [],
    };
  }


  componentDidMount() {

    // console.log(this.props)
    // console.log(store.getState())
    // store.dispatch({ type: 'ADD_TODO' });
    // console.log(store.getState())
    //   this.setState({
    //     a:store.getState().todos.a, 
    //   })
    //  store.dispatch(addTodo('123'))
    //  this.setState({
    //     a:store.getState().todos.a, 
    //   })



  }
  componentWillMount() {
    let path = this.props.history.location.pathname
    let arr;
    if (path === '/home') {
      arr = ['用户管理', '用户管理']
    } else if (path === '/home/pos') {
      arr = ['商户管理', '用户管理']
    }
    this.setState({
      meunArr: arr
    })


  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
    this.menuChildren.isCollapsed();
    console.log(this)
  };
  addMeun = (label, arr) => {
    if (arr) {
      this.breadChildren.addBread(arr)
    }
    this.menuChildren = label
  }

  addBread = (label) => {
    this.breadChildren = label
  }
  render() {
    let { meunArr } = this.state;

    return (
      <div className="home">
        <Router>
          <Layout style={{ height: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
              <MenuList meunArr={meunArr} collapsed={this.addMeun}></MenuList>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggleCollapsed}
                />
              </Header>
              <Content className="home_con">
                <div className="home_bre">
                  <Bread meunArr={meunArr} addBread={this.addBread}></Bread>
                </div>
                <div className="home_rou">
                  <RouteList></RouteList>
                </div>

              </Content>
            </Layout>
          </Layout>

        </Router>
      </div>
    )
  }
} 