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
    this.onLoad();
  }

  onLoad = (e) => {
    const db = firebase.firestore();
    const items = db.collection('items');
    items.get().then((doc) => {
        if (doc.exists) {
            let data = doc.data();
            this.setState({ data: data });
            console.log("Document data:", data);
        } else {
            // doc.data() will be undefined in this case
            this.setState({ data: null });
            console.log("No such document!");
        }
    }).catch(function (error) {
        this.setState({ data: null });
        console.log("Error getting document:", error);
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