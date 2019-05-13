import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import RouteList from './route/Route'
import './Home.scss';
import { Layout, Icon } from 'antd';
import MenuList from './menu/Menu';

const { Header, Sider, Content } = Layout;


export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,

    };
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
    this.menuChildren.isCollapsed();
  };
  addMeun = (ref) => {
    this.menuChildren = ref
  }

  render() {

    return (
      <div className="home">
        <Router>
          <Layout style={{ height: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
              <MenuList collapsed={this.addMeun}></MenuList>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggleCollapsed}
                />
              </Header>
              <Content
                style={{
                  margin: '24px 16px',
                  padding: 24,
                  background: '#fff',
                  minHeight: 280,
                }}
              >
                <RouteList></RouteList>
          </Content>
            </Layout>
          </Layout>

        </Router>


      </div>
    )
  }
} 