import React from 'react';
import './ModaBan.scss';
import { Modal, Radio, Input, Select } from 'antd';

const RadioGroup = Radio.Group;
const Option = Select.Option;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible3: false,
      value: 1
    }
  }
  componentDidMount() {
    console.log(this.props)
    this.props.onChild(this)
  }
  addSee =() => {
    this.setState({
      modalVisible3: true
    })
  }
  modaOk = () => {
    this.setState({
      modalVisible3: false
    })
  }
  modaCancel = () => {
    this.setState({
      modalVisible3: false
    })
  }
  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };
  addTime = (value) => {
    console.log(value)
  }
  render() {
    let { value } = this.state;
    const selectAfter = (
      <Select className="mg_l10" defaultValue="lucy" style={{ width: 80 }} onChange={this.addTime}>
        <Option value="jack">小时</Option>
        <Option value="lucy">天</Option>
        <Option value="Yiminghe">年</Option>
      </Select>
    ) 
    return (
      <div>
        <Modal
          width="450px"
          title="禁言管理"
          centered
          cancelText="取消"
          okText="确定"
          onCancel={() => { this.modaCancel() }}
          onOk={() => { this.modaOk() }}
          visible={this.state.modalVisible3}
        >
          <RadioGroup onChange={this.onChange} value={value}>

            <Radio className="ban_radio" value={1}>
              禁言时长
              {value === 1 && (
                <div className="in_b mg_l20">
                  <Input className="ban_inp" addonAfter={selectAfter}></Input>
                </div>
              )}
            </Radio>
            <Radio className="ban_radio ban_radio1 " value={2}>
              解除禁言
            </Radio>
          </RadioGroup>



        </Modal>
      </div>
    )
  }

}