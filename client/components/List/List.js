import React, { Component, PropTypes } from 'react'

class List extends Component {
  render() {
    return (
      <li> { this.props.text } </li>
    )
  }
}

List.propTypes = {
  text: PropTypes.string.isRequired 
}
  
export default List