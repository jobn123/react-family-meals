import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPostsIfNeeded, refreshData } from '../../actions/count'

class DynamicData extends Component {
  render() {
    const { lists, fetchPostsIfNeeded, refreshData } = this.props
    return (
       <div>
          <div className="btn-group">
            <button type="button" onClick={() => fetchPostsIfNeeded()}>点我加载数据</button>
            <button type="button" onClick={() => refreshData()}>点我清除数据</button>
          </div>
          <p></p>
          {lists.map((e, index) => 
            <div key={index}><a href={e.nm} target="_blank">{e.cty}</a></div>
          )}
      </div>
    )
  }
}

const getList = state => {
    return {
        lists: state.update.data
    }
}

export default connect(
    getList, 
    { fetchPostsIfNeeded, refreshData }
)(DynamicData)