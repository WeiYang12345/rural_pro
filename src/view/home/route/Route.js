import React from 'react';
import { Route } from 'react-router-dom';
import UserTable from '@/component/user/userTable/userTable';
import PosTable from '@/component/user/posTable/PosTable';

export default class RouteList extends React.Component {

  render() {
    return (
      <div>
        <Route path="/home" component={UserTable}></Route>
        <Route path="/home/postable" component={PosTable}></Route>

      </div>
    )
  }
}