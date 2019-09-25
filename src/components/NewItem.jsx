import React from 'react'
import firebase from 'firebase';
import PropTypes from 'prop-types';

class NewItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        itemName: '',
        itemQuantity: 0,
        itemLocation: ''
      }
  }

  updateInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  
  addItem = e => {
    e.preventDefault();
    if (this.isFormEmpty()){
      return false 
    }
    const db = firebase.firestore();
    db.collection('items').add({
      itemName: this.state.itemName,
      itemQuantity: this.state.itemQuantity,
      itemLocation: this.state.itemLocation
    });
    this.setState({
      itemName: '',
      itemQuantity: 0,
      itemLocation: ''
    });
    this.props.updateItems();
  };

  isFormEmpty = () => {
    const name = this.state.itemName
    const quantity = this.state.itemQuantity
    const location = this.state.itemLocation
    if ((name === '') || (quantity === '') || (location === '')) {
      alert('please complete the form')
      return true
    } 
  }

  render () {
    return (
      <form onSubmit={this.addItem}>
        <input
          type="text"
          className="new-form"
          id="itemName"
          placeholder="Item Name"
          onChange={this.updateInput}
          value={this.state.itemName}
        />
         <input
          type="text"
          className="new-form"
          id="itemQuantity"
          placeholder="Item Quantity"
          onChange={this.updateInput}
          value={this.state.itemQuantity}
        />
         <input
          type="text"
          className="new-form"
          id="itemLocation"
          placeholder="Item Location"
          onChange={this.updateInput}
          value={this.state.itemLocation}
        />
        <button type="submit">Create New Iventory Item</button>
      </form>
    )
  }
};

NewItem.propTypes = {
  updateItems: PropTypes.func
}

export default NewItem;