import React, { Component } from 'react';

class CreateStock extends Component {
  render() {
    const styles = require('./Stock.scss');
    return (
      <div className={ styles.form_wrapper }>
        <div className={ styles.form_header }>
          Add Stock
        </div>
        <div className={ styles.form_border_bottom_stock }>
        </div>
        <div className={ styles.form_sub_header }>
          New Item
        </div>
        <div className={ styles.form_border_bottom_item }>
        </div>

        <div className={ styles.form_info }>
          <form id="add_stock_form">
            <div className={ styles.form_element }>
              <span>
                Item Name
              </span>
              <input placeholder="Item's Name" className={ styles.form_elem } type="text" />
            </div>
            <div className={ styles.inner_form }>
              <div className={ styles.form_element + ' ' + styles.width_50 + ' ' + styles.form_float_left }>
                <span>
                  Size 
                </span>
                <select id="size_dropdown" className={ styles.form_elem + ' ' + styles.width_60_input + ' ' + styles.select_multiple } multiple>
                  <option value="XS"> XS </option>
                  <option value="S"> S </option>
                  <option value="M"> M </option>
                  <option value="L"> L </option>
                  <option value="XL"> XL </option>
                  <option value="XXL"> XXL </option>
                </select>
              </div>
              <div className={ styles.form_element + ' ' + styles.width_50 + ' ' + styles.form_float_right }>
                <span>
                  Colour
                </span>

                <input placeholder="Colour Code" className={ styles.form_elem + ' ' + styles.width_60_input } type="text" />
              </div>
            </div>
            <div className={ styles.inner_form }>
              <div className={ styles.form_element + ' ' + styles.width_50 + ' ' + styles.form_float_left }>
                <span>
                  Price
                </span>

                <input placeholder="Price" className={ styles.form_elem + ' ' + styles.width_60_input } type="text" />
              </div>
              <div className={ styles.form_element + ' ' + styles.width_50 + ' ' + styles.form_float_right }>
                <span>
                  Discount
                </span>

                <input placeholder="Discount" className={ styles.form_elem + ' ' + styles.width_60_input } type="text" />
              </div>
            </div>
            <div className={ styles.form_element }>
              <span>
                Nick Name
              </span>
              <select id="title_dropdown" className={ styles.form_elem }>
                <option value="XL"> XL </option>
              </select>
            </div>
            <div className={ styles.form_element }>
              <span>
                Bar Code
              </span>
              <input placeholder="Bar Code Number" className={ styles.form_elem } type="text"/>
            </div>
            <div className={ styles.form_element }>
              <input className={ styles.btn + " " + styles.blue_btn } type="button" value="Save" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateStock;
