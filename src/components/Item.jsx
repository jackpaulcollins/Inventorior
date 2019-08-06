import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: null
    }
  }

  render () {
    return (
      <div className='item-box'>
        <div>
          <h3>Item: {this.props.itemName}</h3>
          <p>Item Quantity: {this.props.itemQuantity}</p>
          <p>Item Location: {this.props.itemLocation}</p>
        </div>
      </div>
    )
  }
};

Item.propTypes = {
  itemName: PropTypes.string,
  itemQuantity: PropTypes.string,
  itemLocation: PropTypes.string
};

export default Item;