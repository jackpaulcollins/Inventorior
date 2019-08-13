import React from 'react'
import firebase from 'firebase';
import UpdateItemModal from './UpdateItemModal'

class ItemDetailPage extends React.Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      itemBeingUpdated: false
    }
  }

  componentDidMount() {
    this._isMounted = true;
    this.fetchItemData();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  fetchItemData() {
    if (this._isMounted) {
      this.getItemPromise().then((data) => {
          this.setState({ data: data })
      });
    }
  }

  deleteItemFromDatabase (id) {
    const db = firebase.firestore();
      db.collection("items").doc(`${id}`).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
    alert('Item Succesfully Deleted')
    this.props.history.push('/')
  }

  updateItem () {
    this.setState ({ itemBeingUpdated: true})
  }

  getItemPromise() {
    const id = this.props.match.params.id
    return new Promise((resolve, reject) => {
      this.cancelPromise = reject;
      const db = firebase.firestore();
      db.collection("items").get().then(function(querySnapshot) {
        let data = {};
        querySnapshot.forEach(function(doc) {
          if (doc.id === id) {
            data = {...doc.data()};
          }
        });
        resolve(data);
      });
    });
  }

  render () {
    const modalContent = this.state.itemBeingUpdated ? <UpdateItemModal id={this.props.match.params.id}
                                                                        tite={this.state.data.itemName}
                                                                        quantity={this.state.data.itemQuantity} 
                                                                        location={this.state.data.itemLocation}/> 
                                                                        : ''
    return (
      <div className='item-detail-box'>
        <div className='item-details'>
          <h1>Item Title: {this.state.data ? this.state.data.itemName : ''}</h1>
          <p>Item count: {this.state.data ? this.state.data.itemQuantity : ''}</p>
          <p>Item Location: {this.state.data ? this.state.data.itemLocation : ''}</p>
          <button onClick={() => { if (window.confirm('Are you sure you want to delete this item?'))this.deleteItemFromDatabase(this.props.match.params.id)}}>Delete Item</button>
          <button onClick={() => this.updateItem()}>Update Item</button>
          {modalContent}
        </div>
      </div>
    )
  }
};

export default ItemDetailPage;