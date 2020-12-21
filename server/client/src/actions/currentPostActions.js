export const setCurrentPost = (post) => {
  return { type: "setCurrentPost", payload: post };
};

// remove current post
export const removeCurrentPost = () => {
  return { type: "removeCurrentPost" };
};
