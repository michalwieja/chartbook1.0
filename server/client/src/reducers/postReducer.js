const postReducer = (state = [], action) => {
  switch (action.type) {
    case "getPosts":
      return action.payload;
    case "addPost":
      return [...state, action.payload];
    case "deletePost":
      return state.filter((post) => post._id !== action.payload);
    case "editPost":
      return state.map((post) =>
        post === action.payoad ? action.payload : post
      );

    default:
      return state;
  }
};

export default postReducer;
