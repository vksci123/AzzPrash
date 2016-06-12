import React, { Component } from 'react';

import TopHeader from './TopHeader';
import Stock from './Stock';

class RightSide extends Component {
  render() {
    const styles = require('./RightSide.scss');
    return (
      <div className={ styles.right_side_wrapper }>
        <TopHeader />
        <Stock />
      </div>
    );

  }
}

export default RightSide;
