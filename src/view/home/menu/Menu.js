import React from 'react';
import './Menu.scss';
import { Menu, Icon } from 'antd';
import { NavLike } from 'react-router-dom';

const SubMenu = Menu.SubMenu;

export default class MenuList extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
      menuList: [
        { title: '用户管理', children: [{ content: '用户管理',url:'/home' },{ content: '商户管理', url:'/home/pos'},{ content: '新建商户', }]},
        { title: '广告管理', children: [{ content: '广告主管理', },{ content: '新建广告主管理', },{ content: '广告位管理', },{ content: '广告收费模板', },{ content: '广告订单管理', }]}
      ]
    };
  }

  componentDidMount() {
    this.props.collapsed(this);
  }

  isCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    // console.log(this.state.collapsed);
    // let { collapsed } = this.props;
    let { menuList } = this.state;
   
    
    return (
      <div>
        <div className="menu_title fcc">星旅指南</div>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
        
          {
            menuList.map((item, key) => {
              return (
                <SubMenu
                  key={item.title}
                  title={<span><Icon type="mail" /><span>{item.title}</span></span>}
                >
                  {
                    item.children.map( (item1,key1) => {
                      return (
                        <Menu.Item key={item1.content}>{item1.content}</Menu.Item>
                      )
                    })
                  }
                  
                  
                </SubMenu>
              )
            })
          }
        </Menu>
      </div>
    )
  }
}