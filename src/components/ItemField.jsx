import React from 'react'
import Item from './Item'

class ItemField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemBoxes: 15
    }
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
      <div className='item-field'>
       {this.getBoxesToRender()}
      </div>
    )
  }
};

export default ItemField;