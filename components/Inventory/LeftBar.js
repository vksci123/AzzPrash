import React, { Component } from 'react';

class LeftNav extends Component {
  render() {
    const styles = require('./LeftNav.scss');

    const FontAwesome = require('react-fontawesome');

    return (
      <div className={ styles.left_nav_wrapper }>
        <div className={ styles.azzu_logo }>
          <div className={ styles.azzu_logo_text }>
            AZZUREL
          </div>
        </div>
        <div className={ styles.navigation }>
          <div className={ styles.navigation_text }>
            Navigation
          </div>
          <div className={ styles.navigation_items }>
            <div className={ styles.navigation_item }>
              <FontAwesome name="tachometer" className={ styles.fa } /> 
              <span className={ styles.nav_item }> 
                Dashboard
              </span>
            </div>
            <div className={ styles.navigation_item }>
              <FontAwesome name="envelope" className={ styles.fa } /> 
              <span className={ styles.nav_item }> 
                Billing
              </span>
            </div>
            <div className={ styles.navigation_item }>
              <FontAwesome name="calendar" className={ styles.fa } /> 
              <span className={ styles.nav_item }> 
                Stocks
              </span>
            </div>
            <div className={ styles.navigation_item }>
              <FontAwesome name="file" className={ styles.fa } /> 
              <span className={ styles.nav_item }> 
                Reports
              </span>
            </div>
            <div className={ styles.navigation_item }>
              <FontAwesome name="users" className={ styles.fa } /> 
              <span className={ styles.nav_item }> 
                Customers
              </span>
            </div>
            <div className={ styles.navigation_item }>
              <FontAwesome name="suitcase" className={ styles.fa } /> 
              <span className={ styles.nav_item }> 
                Returns
              </span>
            </div>
          </div>
        </div>
      </div>
    );

  }
}

export default LeftNav;
