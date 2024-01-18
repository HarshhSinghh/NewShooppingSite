import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  

  const addPost = () => {};
  const deletePost = () => {};

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Hellow World",
    body: "This is My First React Program",
    reactions: 2,
    userId: "user-1",
    tags: ["React", "First Program"],
  },

  {
    id: "2",
    title: "World",
    body: "This is My Second React Program",
    reactions: 5,
    userId: "user-1",
    tags: ["React", "First Program"],
  },
];

export default PostListProvider;
