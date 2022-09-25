import React, { useReducer, useState } from "react";

const BlogContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "create":
      return [...state, { title: `Post #${state.length + 1}` }];

    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const initialState = [{ title: "Post #1" }, { title: "Post #2" }];
  const [state, dispatch] = useReducer(reducer, initialState);

  const addBlogPost = () => {
    dispatch({ type: "create" });
  };

  return (
    <BlogContext.Provider value={{ data: state, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};
export default BlogContext;
