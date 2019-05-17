import React from 'react';
import { Route } from 'react-router-dom';
import UserTable from '@/component/user/userTable/UserTable';
import PosTable from '@/component/user/posTable/PosTable';
import Item from '../../../component/item/item';

export default class RouteList extends React.Component {

  render() {
    return (

      <div>
        <Route exact path="/home" component={UserTable}></Route>
        <Route path="/home/pos" component={PosTable}></Route>
        <Route path="/home/item" component={Item}></Route>
      </div>


    )
  }
}