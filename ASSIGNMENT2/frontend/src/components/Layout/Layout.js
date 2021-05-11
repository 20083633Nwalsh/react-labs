import React from "react";
import { Container } from 'semantic-ui-react';
import './Layout.css';

import {Route} from 'react-router-dom';
import Nav from '../Nav/Nav';
import SalsSubs from '../../containers/salssubs/salssubs';
import PreviousOrders from '../../containers/PreviousOrders/PreviousOrders';
import PlaceOrder from '../../containers/PlaceOrder/PlaceOrder';
import Success from '../../containers/PlaceOrder/Success/Success';

const Layout = (props) => {
  return (
    <Container>
      <Nav />
      <Route path="/" exact component={SalsSubs} />
    <Route path="/orders" component={PreviousOrders} />
    <Route path="/place-order" component={PlaceOrder} />
    <Route path="/success" component={Success} />
    </Container>
  )
};

export default Layout;
