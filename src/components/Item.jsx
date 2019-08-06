import React from 'react'
import PropTypes from 'prop-types';
import ItemDetailPage from './ItemDetailPage';
import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <div className='item-box'>
         <Link to={ `/item/${this.props.id}` } component={ ItemDetailPage }>
           <p>Item Details</p>
         </Link>
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
  id: PropTypes.number,
  itemName: PropTypes.string,
  itemQuantity: PropTypes.string,
  itemLocation: PropTypes.string
};

export default Item;