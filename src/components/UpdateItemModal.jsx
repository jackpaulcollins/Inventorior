import React from 'react'
import PropTypes from 'prop-types';
import firebase from 'firebase';


class UpdateItemModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: this.props.title,
      itemQuantity: this.props.quantity,
      itemLocation: this.props.location
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
    db.collection("items").doc(id).update({
      itemName: this.state.itemName,
      itemQuantity: this.state.itemQuantity,
      itemLocation: this.state.itemLocation
    });
    this.props.reloadUpdatedItem();
  };


  render () {
    return (
      <div>
         <form onSubmit={this.updateItem}>
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
  location: PropTypes.string,
  reloadUpdatedItem: PropTypes.func
};

export default UpdateItemModal;