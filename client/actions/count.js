import { INCREASE, DECREASE, GETSUCCESS, REFRESHDATA  } from '../constants/constants';

export function increase(n) {
  return {
    type: INCREASE,
    amout: n
  }
}

export function decrease(n) {
  return {
    type: DECREASE,
    amout: n
  }
}

export const refreshData = () => {
    return {
        type: REFRESHDATA
    }
}

export const getSuccess = (json) => {
    return {
        type: GETSUCCESS,
        json
    }
}

function fetchPosts() {
    return dispatch => {
        return fetch('http://mysafeinfo.com/api/data?list=englishmonarchs&format=json')
            .then((res) => { console.log(res.status); return res.json() })
            .then((data) => {
                dispatch(getSuccess(data))
            })
            .catch((e) => { console.log(e.message) })
        }
}

// 这里的方法返回一个函数进行异步操作
export function fetchPostsIfNeeded() {
    // 注意这个函数也接收了 getState() 方法
    // 它让你选择接下来 dispatch 什么
    return (dispatch, getState) => {
        return dispatch(fetchPosts())
    }
}