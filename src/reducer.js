function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
        return init(action.payload);
    default:
      throw new Error();
  }
}


function init(initialState) {
    return initialState;
}

export default reducer;
