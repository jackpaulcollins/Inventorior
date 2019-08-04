import React from 'react'
import Item from './Item'
import NewItem from './NewItem'

class ItemField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemBoxes: 90
    }
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