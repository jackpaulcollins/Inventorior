import React from 'react'
import firebase from 'firebase';

class ItemDetailPage extends React.Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    this._isMounted = true;
    this.fetchItemData();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentWillUpdate() {
    if (this._isMounted) {
      this.fetchItemData();
    }
  }

  fetchItemData() {
    if (this._isMounted) {
      this.getItemPromise().then((data) => {
          this.setState({ data: data })
      });
    }
  }

  getItemPromise() {
    const id = this.props.match.params.id
    return new Promise((resolve, reject) => {
      this.cancelPromise = reject;
      const db = firebase.firestore();
      db.collection("items").get().then(function(querySnapshot) {
        let data = [];
        querySnapshot.forEach(function(doc) {
          if (doc.data().id === id) {
            data.push(doc.data());
          }
        });
        resolve(data);
      });
    });
  }

  render () {
    console.log(this.state.data)
    return (
      <div className='item-detail-box'>
        <div className='item-details'>
          <h1>Item Title: {this.state.data ? this.state.data[0].itemName : ''}</h1>
          <p>Item count: {this.state.data ? this.state.data[0].itemQuantity : ''}</p>
          <p>Item Location: {this.state.data ? this.state.data[0].itemLocation : ''}</p>
        </div>
      </div>
    )
  }
};

export default ItemDetailPage;