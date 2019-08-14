import React from 'react';
import Item from './Item';
import NewItem from './NewItem';
import firebase from 'firebase';

class ItemField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemBoxes: null,
      items: null
    }
    this.fetchItemData = this.fetchItemData.bind(this);
  }

  componentDidMount() {
    this.fetchItemData();
  }

  fetchItemData() {
      this.getItemsPromise().then((data) => {
        this.setState({ items: data,
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
          data.push({ 
                      id: doc.id,
                      data: doc.data()
                    });
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
                                            id={this.state.items[i].id}
                                            itemName={this.state.items[i].data.itemName}
                                            itemQuantity={this.state.items[i].data.itemQuantity} 
                                            itemLocation={this.state.items[i].data.itemLocation}
                                            />)

    }
    return numberOfItemBoxesToRender;
  }

  render () {
    return (
      <div>
        <NewItem updateItems={this.fetchItemData}/>
        <div className='item-field'>
        {this.getBoxesToRender()}
        </div>
      </div>
    )
  }
};

export default ItemField;