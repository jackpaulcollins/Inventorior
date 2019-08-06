import React from 'react'
import firebase from 'firebase';
import { v4 } from 'uuid';


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
    const db = firebase.firestore();
    db.collection('items').add({
      id: v4(),
      itemName: this.state.itemName,
      itemQuantity: this.state.itemQuantity,
      itemLocation: this.state.itemLocation
    });
    this.setState({
      itemName: '',
      itemQuantity: 0,
      itemLocation: ''
    });
  };

  render () {
    return (
      <form onSubmit={this.addItem}>
        <input
          type="text"
          id="itemName"
          placeholder="Item Name"
          onChange={this.updateInput}
          value={this.state.itemName}
        />
         <input
          type="text"
          id="itemQuantity"
          placeholder="Item Quantity"
          onChange={this.updateInput}
          value={this.state.itemQuantity}
        />
         <input
          type="text"
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

export default NewItem;