import React from 'react';
import DetailModa from './detailModa/DetailModa';
import { Table, Button } from 'antd';

class PosTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: '用户编号', dataIndex: 'name', key: '1', align: 'center', width: '120', },
        { title: '商户名', dataIndex: 'age', key: '2', align: 'center', width: '120', },
        { title: '商户管理后台账号', dataIndex: 'addrsess', key: '3', align: 'center', width: '120', },
        { title: '密码', dataIndex: 'adsdress', key: '4', align: 'center', width: '120' },
        { title: '信息', dataIndex: 'addresds', key: '6', align: 'center', width: '120', render: (text, record) => (<span className="f_14 c_blue">查看</span>) },
        { title: '平均消费', dataIndex: 'addreds', key: '5', align: 'center', width: '120', },
        { title: '商户分类', dataIndex: 'addreds', key: '7', align: 'center', width: '120' },
        { title: '站点', dataIndex: 'addffgreds', key: '8', align: 'center', width: '120' },
        { title: '总收入', dataIndex: 'addreds', key: '9', align: 'center', width: '120' },
        { title: '已分账', dataIndex: 'addreeeds', key: '10', align: 'center', width: '120' },
        { title: '订单总数', dataIndex: 'addsreds', key: '11', align: 'center', width: '120' },
        { title: '押金金额', dataIndex: 'addreds', key: '12', align: 'center', width: '120' },
        { title: '押金状态', dataIndex: 'addreeeds', key: '13', align: 'center', width: '120' },
        { title: '商户状态', dataIndex: 'addffreds', key: '14', align: 'center', width: '120' },
        { title: '更新时间', dataIndex: 'adeedreds', key: '16', align: 'center', width: '120' },
        { title: '管理', dataIndex: 'addreds', key: '17', align: 'center', width: '120', render: (text, record) => (<span className="f_14 c_blue"></span>) },
      ],
      data: [],

    };
  }

  render() {
    let { columns, data } = this.state;
    for (let i = 0; i < 156; i++) {
      data.push({
        key: i,
        name: `Edward King ${i}`,
        age: "32",
        address: `London, Park Lane no. ${i}`,
      });
    }
    return (
      <div>
        <DetailModa></DetailModa>
        <Table scroll={{ x: '130%', }} columns={columns} dataSource={data} />
      </div>
    )
  }
}
export default PosTable