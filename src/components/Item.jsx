import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    console.log(this.props)
    return (
      <div className='item-box'>
        <div>
          <Link to={ `/item/${this.props.id}` } params={this.props.id} >
           <p>Item Details</p>
          </Link>
          <h3>Item: {this.props.itemName}</h3>
          <p>Item Quantity: {this.props.itemQuantity}</p>
          <p>Item Location: {this.props.itemLocation}</p>
        </div>
      </div>
    )
  }
};

Item.propTypes = {
  id: PropTypes.string,
  itemName: PropTypes.string,
  itemQuantity: PropTypes.string,
  itemLocation: PropTypes.string
};

export default Item;