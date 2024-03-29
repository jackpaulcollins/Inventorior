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
    this.props.closeModal();
    alert("Item Succesfully Updated")
  };


  render () {
    return (
      <div className="update-item-modal">
        <form onSubmit={this.updateItem}>
        <div>
          <input
            type="text"
            id="itemName"
            placeholder="Item Name"
            onChange={this.updateInput}
            value={this.state.itemName}
          />
        </div>
        <div>
          <input
            type="text"
            id="itemQuantity"
            placeholder="Item Quantity"
            onChange={this.updateInput}
            value={this.state.itemQuantity}
          />
        </div>
        <div>
          <input
            type="text"
            id="itemLocation"
            placeholder="Item Location"
            onChange={this.updateInput}
            value={this.state.itemLocation}
          />
        </div>
        <button type="submit">Update Item</button>
        <button onClick={this.props.closeModal}>Cancel</button>
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
  reloadUpdatedItem: PropTypes.func,
  closeModal: PropTypes.func
};

export default UpdateItemModal;