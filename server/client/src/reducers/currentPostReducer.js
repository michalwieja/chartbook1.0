const currentPostReducer = (state = null, action) => {
  switch (action.type) {
    case "setCurrentPost":
      return action.payload;
    case "removeCurrentPost":
      return (state = null);
    default:
      return state;
  }
};

export default currentPostReducer;
