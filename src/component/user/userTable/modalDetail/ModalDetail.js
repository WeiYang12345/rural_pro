import React from 'react';
import { Modal, Button } from 'antd';
import Login from '@/assets/img/ce.png';


export default class ModalDetail extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      modalVisible1: false,
    }
  }
  addSee = (text, record) => {
    console.log(text, record);
    this.setState({
      modalVisible1: true,
    })
  }
  setModalVisible1(modalVisible1) {
    this.setState({ modalVisible1 });
  }
  componentDidMount() {
    console.log(222)
    console.log(this.props)
    this.props.onChild(this)
  }
  render() {
    
    return (

      <div>
        <Modal
          width="600px"
          title="用户个人信息"
          content={<span>ssss</span>}
          centered
          footer={<Button type="primary" onClick={() => this.setModalVisible1(false)}>关闭</Button>}
          onCancel={() => { this.setModalVisible1(false) }}
          visible={this.state.modalVisible1}
        >
          <div className="user_header fsc">
            <div className="fcc column">
              <img className="user_head" src={Login} alt="做客" />
              <span className="mg_t10">张三李四</span>
            </div>
            <div className="f_14 mg_l20 fgrow3">
              <div className="mg_b5"><span className="user_item">会员:</span><span className="c_blue">1456587441</span></div>
              <div className="mg_b5"><span className="user_item">摄影达人:</span><span className="c_blue">达人</span></div>
              <div className="mg_b5"><span className="user_item">地址:</span><span className="c_blue">广东深圳</span></div>
              <div className="mg_b5"><span className="user_item">注册时间:</span><span className="c_blue">2018-1-2</span></div>
              <div><span className="user_item">出生日期:</span><span className="c_blue">2018-1-8</span></div>

            </div>
            <div className="user_son mg_l20 f_12">个人签名</div>
          </div>
          <div className="f_14 fbc mg_t20">
            <div><span>姓名：</span><span className="c_blue">李晓明</span></div>
            <div><span>身份证号：</span><span className="c_blue">34122211196555</span></div>
            <div><span>微信openId：</span><span className="c_blue">ssssssssssssssss</span></div>
          </div>
          <div className="f_14 fbc mg_t20">
            <div className="fcc column"><span>文章</span><span className="c_blue">12</span></div>
            <div className="fcc column"><span>关注</span><span className="c_blue">12</span></div>
            <div className="fcc column"><span>粉丝</span><span className="c_blue">12</span></div>
            <div className="fcc column"><span>旅说</span><span className="c_blue">12</span></div>
            <div className="fcc column"><span>收藏</span><span className="c_blue">12</span></div>
            <div className="fcc column"><span>留言</span><span className="c_blue">12</span></div>
            <div className="fcc column"><span>评分</span><span className="c_blue">12</span></div>
            <div className="fcc column"><span>想去看看</span><span className="c_blue">12</span></div>
            <div className="fcc column"><span>我的足迹</span><span className="c_blue">12</span></div>
            <div className="fcc column"><span>被举报</span><span className="c_blue">12</span></div>
          </div>
        </Modal>
      </div>



    )
  }
}