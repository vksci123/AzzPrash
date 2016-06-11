import React, { Component } from 'react';

class TopHeader extends Component {
  render() {
    const styles = require('./TopHeader.scss');
    return (
      <div className={ styles.top_header }>
        Top Header 
      </div>
    );
  }
}

export default TopHeader;
