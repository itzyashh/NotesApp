import React, { useReducer, useState } from "react";

const BlogContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "create":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 999),
          title: action.payload.title,
          description: action.payload.description,
        },
      ];

    case "edit":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });

    case "delete":
      return state.filter((blogPost) => blogPost.id !== action.payload);

    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const initialState = [
    {
      id: 1,
      title: "Post #1",
      description:
        "lorem ipsum dolor sit amet lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores facere ab quo molestiae, voluptate vitae doloribus, ullam provident vel, facilis suscipit non deserunt quibusdam consequuntur quis nobis perferendis magni officiis? ",
    },
    {
      id: 2,
      title: "Post #2",
      description:
        "Post #2 lorem ipsum dolor sit amet lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores facere ab quo molestiae, voluptate vitae doloribus, ullam provident vel, facilis suscipit non deserunt quibusdam consequuntur quis nobis perferendis magni officiis?",
    },
  ];
  const [state, dispatch] = useReducer(reducer, initialState);

  const addBlogPost = (title, description, callback) => {
    dispatch({ type: "create", payload: { title, description } });
    callback();
  };
  const editBlogPost = (id, title, description, goBack) => {
    dispatch({ type: "edit", payload: { title, description, id } });
    goBack();
  };
  const deleteBlogPost = (id) => {
    dispatch({ type: "delete", payload: id });
  };

  return (
    <BlogContext.Provider
      value={{ data: state, addBlogPost, editBlogPost, deleteBlogPost }}
    >
      {children}
    </BlogContext.Provider>
  );
};
export default BlogContext;
