import React from 'react';
import './UserTable.scss';
import ModalDetail from './modalDetail/ModalDetail';
import ModaSet from './modaSet/ModeSet';
import ModaBan from './modaBan/ModaBan';
import { Table } from 'antd';
const ThemeContext = React.createContext('light');
export default class userTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      columns: [
        { title: '用户编号', dataIndex: 'name', key: 'name', align: 'center', width: '120px' },
        { title: '用户昵称', dataIndex: 'name', key: 'name1', align: 'center', width: '120px' },
        { title: '信息', dataIndex: 'name', key: 'nsame', align: 'center', width: '120px', render: (text, record) => (<span className="c_blue" onClick={() => { this.modal1(text, record) }}>查看</span>) },
        { title: '推荐人', dataIndex: 'name', key: 'name2', align: 'center', width: '120px', },
        { title: '达人', dataIndex: 'name', key: 'name3', align: 'center', width: '120px', },
        { title: '上次登录', dataIndex: 'name', key: 'name4', align: 'center', width: '120px', },
        { title: '累计时长', dataIndex: 'name', key: 'na5me', align: 'center', width: '120px', },
        { title: '等录次数', dataIndex: 'name', key: 'n6ame', align: 'center', width: '120px', },
        { title: '设置达人', dataIndex: 'name', key: 'na7me', align: 'center', width: '120px', render: (text, record) => (<span className="c_blue" onClick={() => { this.modal2(text, record) }}>设置</span>) },
        { title: '状态', dataIndex: 'name', key: 'namde', align: 'center', width: '120px', },
        { title: '禁言', dataIndex: 'name', key: 'nfame', align: 'center', width: '120px', render: (text, record) => (<span className="c_blue" onClick={() => { this.modal3(text, record) }}>禁言</span>) },
      ],

      modalVisible2: false,
    }
  }
  setUp() {
    this.setState({
      modalVisible2: true,
    })
  }
  onChild1 = (label) => {
    this.modaDetail = label
  }
  onChild2 = (label) => {
    this.modaSet = label
  }
  onchild3 = (label) => {
    this.modaBan = label;
  }
  modal1 = (text, record) => {
    this.modaDetail.addSee(text, record)
  }
  modal2 = (text, record) => {
    this.modaSet.addSee(text, record)
  }
  modal3 = (text, record) => {
    this.modaBan.addSee(text, record)
  }
  render() {
    let { columns, index } = this.state;
    let name = 'ssssss';
    const data = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
    ];
    return (
      <div>
        <ModalDetail onChild={this.onChild1}></ModalDetail>
        <ModaSet onChild={this.onChild2}></ModaSet>
        <ModaBan onChild={this.onchild3}></ModaBan>
        <Table columns={columns} dataSource={data} />
      </div>


    )
  }

}