import React from 'react';
import './Menu.scss';
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';

const SubMenu = Menu.SubMenu;

export default class MenuList extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
      menuPath: ["用户管理","用户管理"],
      menuList: [
        { title: '用户管理', children: [{ content: '用户管理',url:'/home' },{ content: '商户管理', url:'/home/pos'},{ content: '新建商户',url:'/home/pos' }]},
        { title: '广告管理', children: [{ content: '广告主管理',url:'/home/pos'},{ content: '新建广告主管理',url:'/home/pos' },{ content: '广告位管理',url:'/home/pos' },{ content: '广告收费模板', url:'/home/pos'},{ content: '广告订单管理', url:'/home/pos'}]}
      ]
    };
  }

  componentDidMount() {
   
    
  }
  componentWillMount() {
    this.props.collapsed(this);

    this.setState({
      menuPath: this.props.meunArr
    })
  }

  isCollapsed = () => {
   
    this.setState({
      collapsed: !this.state.collapsed
    })
    
    
  }
  addItem = ( {keyPath} ) => {
    let { menuPath } = this.state
    console.log(this.props)
    console.log(keyPath)
    this.setState({
      menuPath: keyPath,
    })
    this.props.collapsed(this,keyPath)
   
  }

  render() {

    let { menuList,menuPath } = this.state;
   
    
    return (
      <div>
        <div className="menu_title fcc">星旅指南</div>
        <Menu
          defaultOpenKeys={[menuPath[1]]}          
          defaultSelectedKeys={[menuPath[0]]}
          mode="inline"
          theme="dark"
          inlineIndent="24"
          inlineCollapsed={this.state.collapsed}
          onClick={this.addItem}
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
                        <Menu.Item key={item1.content}><NavLink to={item1.url}>{item1.content}</NavLink></Menu.Item>
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