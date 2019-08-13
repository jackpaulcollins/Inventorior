import React from 'react'
import PropTypes from 'prop-types';
import firebase from 'firebase';


class UpdateItemModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: this.props.title,
      itemQuantity: this.props.quantity,
      itemLocation: this.props.itemLocation
    }
  }

  updateInput = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }


  updateItem = e => {
    e.preventDefault();
    const id = this.props.id
    const db = firebase.firestore();
    const itemToUpdate = db.collection("cities").doc(id)
    itemToUpdate.collection('items').update({
      itemName: this.state.itemName,
      itemQuantity: this.state.itemQuantity,
      itemLocation: this.state.itemLocation
    });
  };


  render () {
    return (
      <div>
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
        <button type="submit">Update Item</button>
      </form>
      </div>
    )
  }
};

UpdateItemModal.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  quantity: PropTypes.string,
  location: PropTypes.string
};

export default UpdateItemModal;