import React, { Component } from 'react'

class IndexComponent extends Component {
  constructor() {
    super()
    this.moveTo.bind(this)
  }
  moveTo (index) {
  }
  render() {
    return (
      <section className="test">
        <h2>VegoTV indexpage</h2>
      </section>
    );
  }
}

IndexComponent.defaultProps = {
  items: ['go to homepage', 'go to indexpage', '404page']
};

export default IndexComponent
