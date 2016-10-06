//import React from 'react'
//
//const About = () => (
//  <div>
//    <h2>this is about page</h2>
//  </div>
//)
//
//export default About

import React, { Component } from 'react'

class About extends Component {
  constructor() {
    super()
    this.moveTo.bind(this)
  }
  moveTo (index) {
  }
  render() {
    return (
      <section className="test">
        <h2>VegoTV about</h2>
      </section>
    );
  }
}

export default About


