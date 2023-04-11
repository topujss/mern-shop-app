// create a shop reducer
const shopReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case 'INIT':
      return state;

    default:
      return state;
  }
};

// export the reducer
export default shopReducer;
