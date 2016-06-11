import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';

import { INPUT_VALUE_CHANGED } from './LoginAction';

class Login extends Component {
  inputValueChanged(e) {
    console.log('input value changed');
    console.log(e.target);
    this.props.dispatch( { type: INPUT_VALUE_CHANGED, data: e.target.value });
  }
  render() {
    const styles = require('./Login.scss');
    return (
        <div className={ styles.container } >
          <div className={styles.header_container }>
            <h1>
              AZZUREL
            </h1>
          </div>
          <form className={ styles.main_form }>
            <div className={ styles.form_element }>
              <input type="text" placeholder="Username" className={ styles.padding_left } onChange={ this.inputValueChanged.bind(this) } />
              <div className={ styles.text_before } > 
                <div className={ styles.text } >
                  USERNAME 
                </div>
                <div className={ styles.border_right }>
                </div>
              </div>
            </div>
            <div className={ styles.form_element }>
              <input type="password" placeholder="Password" className={ styles.padding_left } />
              <div className={ styles.text_before } > 
                <div className={ styles.text } >
                  PASSWORD 
                </div>
                <div className={ styles.border_right }>
                </div>
              </div>
            </div>
            <div className={ styles.form_element }>
              <input type="submit" value="LOGIN" />
            </div>
          </form>
          <div className={ styles.info_message }>
            <p>
              Please go to our homepage or go back to previous page
            </p>
          </div>
          <div className={ styles.info_message }>
            <p>
              <i className="fa fa-copyright" aria-hidden="true"></i>
              <span className={ styles.copyright }>
                2016 AZZUREL
              </span>
            </p>
          </div>
        </div>
      );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return { ...state.login_data };
}

export default connect( mapStateToProps )(Login);
