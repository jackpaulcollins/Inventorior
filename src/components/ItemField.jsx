import React from 'react'
import Item from './Item'

class ItemField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemBoxes: 0
    }
    this.createItem = this.createItem.bind(this);
  }

  createItem() {
    this.setState({
      itemBoxes: this.state.itemBoxes + 1
    })
  }

  getBoxesToRender(){
    let numberOfItemBoxesToRender = [];
    for (let i = 0; i < this.state.itemBoxes; i++) {
      numberOfItemBoxesToRender.push(<Item key= {i} id={i} />)
    }
    return numberOfItemBoxesToRender;
  }

  render () {
    return (
      <div>
        <button onClick={this.createItem}>Add Item to Inventory</button>
        <div className='item-field'>
        {this.getBoxesToRender()}
        </div>
      </div>
    )
  }
};

export default ItemField;