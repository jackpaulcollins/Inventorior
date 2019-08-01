import React from 'react'

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: null
    }
  }

  render () {
    return (
      <div className='item-box'>
      </div>
    )
  }
};

export default Item;