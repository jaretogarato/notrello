const items = (state = [], action) => {
  switch(action.type) {
    case 'ITEMS':
      return action.items;
    case 'ADD_ITEM':
      return [...state, action.item] //adds item to the end of array
    case 'UPDATE_ITEM':
      return state.map( item => {
        if( item.id === action.item.id )
          return action.item
        return item
      })
    case 'DELETE_ITEM':
      return state.filter( item => item.id !== action.id )
    default:
      return state;
  }
}

export default items;
