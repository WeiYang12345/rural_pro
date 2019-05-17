import React from 'react';
import { Modal, Button,Input } from 'antd';
const { TextArea } = Input;
export default class ModeSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1,
      modalVisible2: false,
    }
  }

  componentDidMount() {
    console.log(this.props)
    this.props.onChild(this)

  }
  addSee() {
    this.setState({
      modalVisible2: true
    })
  }
  modaOk() {
    this.setState({
      modalVisible2: false
    })
  }
  modaCancel() {
    this.setState({
      modalVisible2: false
    })
  }
  render() {
    let { index } = this.state;

    return (
      <div>
        <Modal
          width="400px"
          title="设置达人"
          centered
          cancelText="取消"
          okText="确定"
          onCancel={() => { this.modaCancel() }}
          onOk={() => { this.modaOk() }}
          visible={this.state.modalVisible2}
        >
          <div className="fbc pd_20">
            <Button onClick={() => { this.setState({ index: 1 }) }} type={index === 1 ? 'primary' : ''}>设置达人</Button>
            <Button onClick={() => { this.setState({ index: 2 }) }} type={index === 2 ? 'primary' : ''}>取消达人</Button>
          </div>
          {
            index===1&&(
              <div className="mg_t20 pd_20">
                <TextArea 
                  className="f_14"
                  placeholder="输入达人备注"
                  autosize={{ minRows: 2, maxRows: 6 }}
                />
              </div>
            )
          }
          
          
        </Modal>

      </div>
    )
  }
} 