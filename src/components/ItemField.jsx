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
  }

  componentDidMount() {
    this.getItemsPromise().then((data) => {
      this.setState({ data: data })
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
      numberOfItemBoxesToRender.push(<Item key={i} />)
    }
    return numberOfItemBoxesToRender;
  }

  render () {
    return (
      <div>
        <NewItem />
        <div className='item-field'>
        {this.getBoxesToRender()}
        </div>
      </div>
    )
  }
};

export default ItemField;