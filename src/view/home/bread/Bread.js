import React from 'react';
import { Breadcrumb } from 'antd';

export default class Bread extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        menuPath: ["用户管理","用户管理"],
    }
  }
  componentDidMount() {
    // this.props.addMeun(this)
    //   console.log(this.props.history.location.pathname)
    console.log(this.props)
    this.props.addBread(this);

  }
  componentWillMount() {

    this.setState({
      menuPath: this.props.meunArr
    })
  }
  addBread = (arr) => {
    this.setState({
      menuPath: arr
    })
  }
  breadItem = (arr) => {
    console.log(arr)
    this.setState({
      menuPath: arr
    })
    
  }
  render() {
    let { menuPath } = this.state
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>{menuPath[1]}</Breadcrumb.Item>
          <Breadcrumb.Item>{menuPath[0]}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    )
  }
}