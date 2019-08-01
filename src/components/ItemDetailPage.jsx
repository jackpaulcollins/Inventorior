import React from 'react'

class ItemDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: null
    }
  }

  render () {
    return (
      <div className='item-detail-box'>
        <div className='item-details'>
          <h1>Item Title</h1>
          <img></img>
          <p>Item count: 0</p>
          <p>Item Location: A5</p>
          <p>Last Used: 7/4/2019</p>
        </div>
      </div>
    )
  }
};

export default ItemDetailPage;