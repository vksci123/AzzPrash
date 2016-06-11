import React, { Component } from 'react';

class Body extends Component {
  render() {
    const styles = require('./Body.scss');
    return (
      <div className={ styles.body_container }>
        <div className={ styles.body_header }>
          <div className={ styles.body_header_content }>
            Stock Inventory
          </div>
        </div>
        Here comes the body Container
      </div>
    );
  }
}

export default Body;
