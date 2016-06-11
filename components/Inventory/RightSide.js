import React, { Component } from 'react';

import TopHeader from './TopHeader';
import Body from './Body';

class RightSide extends Component {
  render() {
    const styles = require('./RightSide.scss');
    return (
      <div className={ styles.right_side_wrapper }>
        <TopHeader />
        <Body />
      </div>
    );

  }
}

export default RightSide;
