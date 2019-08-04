import React from 'react'
import firebase from 'firebase';


class NewItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ItemName: ""
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
      itemName: this.state.itemName
    });
    this.setState({
      ItemName: ""
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
          value={this.state.ItemName}
        />
        <button type="submit">Create New Iventory Item</button>
      </form>
    )
  }
};

export default NewItem;