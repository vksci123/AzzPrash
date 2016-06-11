import React, { Component } from 'react';

import LeftNav from './LeftBar';
import RightSide from './RightSide';

class Inventory extends Component {
  render() {
    const styles = require('./Inventory.scss');
    return (
      <div>
        <LeftNav />
        <RightSide />
      </div>
    );
  }
}

export default Inventory;
