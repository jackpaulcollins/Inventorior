import React from 'react';
import Item from './Item';
import NewItem from './NewItem';
import firebase from 'firebase';

class ItemField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemBoxes: null,
      data: null
    }
    this.createItem = this.createItem.bind(this);
    this.fetchItemdData = this.fetchItemdData.bind(this);
  }

  createItem() {
    this.setState({
      itemBoxes: this.state.itemBoxes + 1
    }) 
  }

  componentDidMount() {
    this.fetchItemdData();
  }

  componentWillUpdate() {
    this.fetchItemdData();
  }

  fetchItemdData() {
    this.getItemsPromise().then((data) => {
      this.setState({ data: data,
                      itemBoxes: data.length
                     })
    });
  }

  getItemsPromise() {
    return new Promise((resolve, reject) => {
      this.cancelPromise = reject;
      const db = firebase.firestore();
      db.collection("items").get().then(function(querySnapshot) {
        let data = [];
        querySnapshot.forEach(function(doc) {
          data.push(doc.data());
        });
        resolve(data);
      });
    });
  }

  getBoxesToRender(){
    let numberOfItemBoxesToRender = [];
    for (let i = 0; i < this.state.itemBoxes; i++) {
      numberOfItemBoxesToRender.push(
                                      <Item key={i} 
                                            itemName={this.state.data[i].itemName}
                                            itemQuantity={this.state.data[i].itemQuantity} 
                                            itemLocation={this.state.data[i].itemLocation}
                                            />)

    }
    return numberOfItemBoxesToRender;
  }

  render () {
    return (
      <div>
        <button onClick={this.createItem}>Add Item to Inventory</button>
        <NewItem />
        <div className='item-field'>
        {this.getBoxesToRender()}
        </div>
      </div>
    )
  }
};

export default ItemField;