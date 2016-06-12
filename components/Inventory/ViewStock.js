import React, { Component } from 'react';

class ViewStock extends Component {
  render() {
    const styles = require('./Stock.scss');
    const FontAwesome = require('react-fontawesome');
    return (
      <div className={ styles.form_wrapper }>
        <div className={ styles.form_sub_header }>
          Available Items
        </div>
        <div className={ styles.table_body }>
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th> Action </th>
                <th> Code </th>
                <th> Item Name </th>
                <th> Sizes </th>
                <th> Colour </th>
                <th> Price </th>
                <th> Discount </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <FontAwesome name="pencil-square-o" className={ styles.icon_class } />
                  <FontAwesome name="times" className={ styles.icon_class } />
                </td>
                <td>
                  AZ01
                </td>
                <td>
                  Floral one piece
                </td>
                <td>
                  XS/S/M/L/XL
                </td>
                <td>
                  Black/Yellow
                </td>
                <td>
                  Rs. 560
                </td>
                <td>
                </td>
              </tr>
              <tr>
                <td>
                  <FontAwesome name="pencil-square-o" className={ styles.icon_class } />
                  <FontAwesome name="times" className={ styles.icon_class } />
                </td>
                <td>
                  AZ01
                </td>
                <td>
                  Floral one piece
                </td>
                <td>
                  XS/S/M/L/XL
                </td>
                <td>
                  Black/Yellow
                </td>
                <td>
                  Rs. 560
                </td>
                <td>
                </td>
              </tr>
              <tr>
                <td>
                  <FontAwesome name="pencil-square-o" className={ styles.icon_class } />
                  <FontAwesome name="times" className={ styles.icon_class } />
                </td>
                <td>
                  AZ01
                </td>
                <td>
                  Floral one piece
                </td>
                <td>
                  XS/S/M/L/XL
                </td>
                <td>
                  Black/Yellow
                </td>
                <td>
                  Rs. 560
                </td>
                <td>
                </td>
              </tr>
              <tr>
                <td>
                  <FontAwesome name="pencil-square-o" className={ styles.icon_class } />
                  <FontAwesome name="times" className={ styles.icon_class } />
                </td>
                <td>
                  AZ01
                </td>
                <td>
                  Floral one piece
                </td>
                <td>
                  XS/S/M/L/XL
                </td>
                <td>
                  Black/Yellow
                </td>
                <td>
                  Rs. 560
                </td>
                <td>
                </td>
              </tr>
              <tr>
                <td>
                  <FontAwesome name="pencil-square-o" className={ styles.icon_class } />
                  <FontAwesome name="times" className={ styles.icon_class } />
                </td>
                <td>
                  AZ01
                </td>
                <td>
                  Floral one piece
                </td>
                <td>
                  XS/S/M/L/XL
                </td>
                <td>
                  Black/Yellow
                </td>
                <td>
                  Rs. 560
                </td>
                <td>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ViewStock;
