import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import List from './List'

class StaticData extends Component {
  render() {
    const { lists } = this.props
    return (
      <div>
        <ul>
          { lists.map((e, index) => 
            <List text={e.text} key={index}></List>
          )}
        </ul>
      </div>
    )
  }
}

StaticData.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

const getList = state => {
  return {
    lists: state.update.lists
  }
}

// 利用connect将组件与Redux绑定起来
export default connect(getList)(StaticData)


