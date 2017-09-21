import axios from 'axios';
// methods that help us dispatch actions:

// get all items - index action of our items controller
// this.props.dispatch(getItems())
export const getItems = (callback) => {
  // this is what we call a thunk:
  return(dispatch) => {
    axios.get('/api/items')
      .then( res => dispatch({ type: 'ITEMS', items: res.data }))
      .then( callback() )
  }
}

// add an item - create action of our items controller
// res.data ~- ( id: 1, name: 'Angry Birds', featured: true ... )
export const addItem = (item) => {
  return(dispatch) => {
    axios.post('/api/items', { item })
      .then( res => dispatch({ type: 'ADD_ITEM', item: res.data }))
  }
}

// update an item - update action of our items controller
export const updateItem = (item) => {
  return (dispatch) => {
    axios.put(`/api/items/${item.id}`, { item } )
      .then( res => dispatch({ type: 'UPDATE_ITEM', item: res.data }) )
  }
}

// delete an item - destroy action
export const deleteItem = (id) => {
  return(dispatch) => {
    axios.delete(`/api/items/${id}`)
      .then( res => dispatch({ type: 'DELETE_ITEM', id }))
  }
}
