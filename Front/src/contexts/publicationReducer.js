import {
  GET_POSTS,
  GET_NEWPOST,
  CREATE_POST,
  UPDATE_POST,
  POST_ERROR,
} from "../types";

const publicationReducer = (state, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: action.payload };
    case GET_NEWPOST:
      return { ...state, currentPost: action.payload };
    case CREATE_POST:
      return { ...state, posts: [action.payload, ...state.posts] };
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case POST_ERROR:
      return { ...state, error: action.payload };
    default:
      break;
  }
};
export default publicationReducer;
