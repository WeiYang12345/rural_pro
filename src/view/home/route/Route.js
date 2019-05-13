import React from 'react';
import { Route } from 'react-router-dom';
import UserTable from '../../../component/user/userTable/userTable';

export default class RouteList extends React.Component {

  render() {
    return (
      <div>
        <Route path="/" component={UserTable}></Route>

      </div>
    )
  }
}