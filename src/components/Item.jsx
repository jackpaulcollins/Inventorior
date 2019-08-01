import React from 'react'
import PropTypes from 'prop-types';
import ItemDetailPage from './ItemDetailPage';
import { Link } from 'react-router-dom';

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
         <Link to={ `/item/${this.props.id}` } component={ ItemDetailPage }>
           <p>Item Details</p>
         </Link>
      </div>
    )
  }
};

Item.propTypes = {
  id: PropTypes.number
}

export default Item;