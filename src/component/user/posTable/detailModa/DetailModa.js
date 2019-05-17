import React from 'react';
import './DetailModa.scss';
import { Modal,Button } from 'antd';
import  ce  from '@/assets/img/ce.png';
export default class DetailModa extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }
 
  onOk = () => {
    this.setState({
      visible: false,
    })
  }
  render() {

    return (
      <div>
         <Modal
          title="商户信息"
          width="600px"
          centered
          visible={this.state.visible}
          footer={<div><Button onClick={this.onOk} type="primary">朕知道了</Button></div>}
          onCancel={() => {this.setState({visible: false})}}
        >
          <div className="fsc f_13">
            <img className="de_img" src={ce}/>
            <div className="mg_l20">
              <div className="mg_b10">
                <span >类别：</span>
                <span className="c_blue">张三</span>
              </div>
              <div className="mg_b10">
                <span>服务热线：</span>
                <span className="c_blue">张三</span>
              </div>
              <div>
                <span>营业时间：</span>
                <span className="c_blue">张三</span>
              </div>
            </div>
            <div className="mg_l20">
              <div className="mg_b10">
                <span >注册时间：</span>
                <span className="c_blue">张三</span>
              </div>
              <div className="mg_b10">
                <span>联系电话：</span>
                <span className="c_blue">张三</span>
              </div>
              <div>
                <span>对应站点：</span>
                <span className="c_blue">张三</span>
              </div>
            </div>
          </div>
          <div className="fsc mg_t20 f_13">
            <div>
              <span>商户名：</span>
              <span className="c_blue">商户名</span>
            </div>
            <div>
              <span>合同编号：</span>
              <span className="c_blue">商户名</span>
            </div>
            <div>
              <span>合同到期时间：</span>
              <span className="c_blue">2019-1-7</span>
            </div>
          </div>
          <div className="fsc mg_t10 f_13">
            <div>
              <span>商户地址：</span>
              <span className="c_blue">广东省深圳市88号</span>
            </div>
            <div>
              <span>最早可提前预定：</span>
              <span className="c_blue">3天</span>
            </div>
          </div>
          <div className="f_13 fbc mg_t20">
            <div className="fcc column">
              <span>总收入</span>
              <span className="c_blue">12万</span>
            </div>
            <div className="fcc column">
              <span>已分账</span>
              <span className="c_blue">12万</span>
            </div>
            <div className="fcc column">
              <span>分账记录</span>
              <span className="c_red">19笔查看</span>
            </div>
            <div className="fcc column">
              <span>游客评分</span>
              <span className="c_blue">4.3</span>
            </div>
            <div className="fcc column">
              <span>分账比例</span>
              <span className="c_blue">80%</span>
            </div>
            <div className="fcc column">
              <span>商铺二维码</span>
              <span className="c_red">19个查看</span>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}