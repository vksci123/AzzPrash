import React, { Component } from 'react';

import CreateStock from './CreateStock';
import ViewStock from './ViewStock';

class Stock extends Component {
  render() {
    const styles = require('./Stock.scss');
    return (
      <div className={ styles.body_container }>
        <div className={ styles.body_header }>
          <div className={ styles.body_header_content }>
            Stock Inventory
          </div>
        </div>
        <div className={ styles.body_buttons_wrapper }>
          <div className={ styles.body_buttons }>
            <input className={ styles.btn + " " + styles.yellow_btn } type="button" value="Add Stock" />
            <input className={ styles.btn + " " + styles.grey_btn } type="button" value="View Stock" />
            {/*
            <input className={ styles.btn + " " + styles.yellow_btn } type="button" value="Upload" />
            <input className={ styles.btn + " " + styles.grey_btn } type="button" value="Price List" />
            */}
          </div>
        </div>
        <CreateStock />
        <ViewStock />
      </div>
    );
  }
}

export default Stock;
