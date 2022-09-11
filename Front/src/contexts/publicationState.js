import React, { useReducer } from "react";

import publicationContext from "./publicationContext";
import publicationReducer from "./publicationReducer";
import clienteAxios from "../config/axios";
import names from "random-names-generator";

import {
  GET_POSTS,
  GET_NEWPOST,
  CREATE_POST,
  UPDATE_POST,
  POST_ERROR,
} from "../types";

const PublicacionState = (props) => {
  const initialState = {
    posts: [],
    currentPost: {
      _id: "",
      file: new File([""], ""),
      imagen: "",
      texto: "",
      likes: "",
      isEdit: false,
    },
    error: null,
  };

  const [state, dispatch] = useReducer(publicationReducer, initialState);

  const getPosts = async () => {
    try {
      const result = await clienteAxios.get("/api/publications");
      // create three posts the first time if there is no post yet
      if (result.data.publications.length === 0) {
        await imagesPixaBay(3, "cars");
      }
      dispatch({
        type: GET_POSTS,
        payload: result.data.publications,
      });
    } catch (error) {
      dispatch({
        type: POST_ERROR,
        payload: `Hubo un error`,
      });
    }
  };

  const updateCurrentPost = async (payload) => {
    try {
      dispatch({
        type: GET_NEWPOST,
        payload: payload,
      });
    } catch (error) {
      dispatch({
        type: POST_ERROR,
        payload: `Hubo un error`,
      });
    }
  };

  const createPost = async (payload) => {
    try {
      const result = await clienteAxios.post("/api/publications", payload);

      dispatch({
        type: CREATE_POST,
        payload: result.data.publication,
      });
    } catch (error) {
      dispatch({
        type: POST_ERROR,
        payload: `Hubo un error`,
      });
    }
  };

  const updatePost = async (payload) => {
    try {
      const result = await clienteAxios.put(
        `/api/publications/${payload._id}`,
        payload
      );

      dispatch({
        type: UPDATE_POST,
        payload: result.data.publication,
      });
    } catch (error) {
      dispatch({
        type: POST_ERROR,
        payload: `Hubo un error`,
      });
    }
  };

  const getRandomImages = async (imagesPerPage = 3, category) => {
    const key = "27058216-94b508cfd62f1ec2c58e5069a";
    const url = `https://pixabay.com/api/?key=${key}&q=${category}&per_page=${imagesPerPage}`;
    const result = await clienteAxios.get(url);

    return result.data.hits;
  };

  const imagesPixaBay = async (imagesPerPage = 3) => {
    try {
      const result = await getRandomImages(imagesPerPage);

      result.map(async (e, index) => {
        const type =
          e.webformatURL.split(".")[e.webformatURL.split(".").length - 1];
        const file = await createRandomImageFile(
          e.webformatURL,
          `img${names.random()}.${type}`
        );
        const texto = `Publicacion automatica ${index + 1}`;
        const _newPost = { ...state.newPost, file, texto };
        const formData = new FormData();
        formData.append("file", _newPost.file);
        formData.append("texto", _newPost.texto);
        await createPost(formData);
      });
    } catch (error) {
      dispatch({
        type: POST_ERROR,
        payload: `Hubo un error`,
      });
    }
  };

  const createRandomImageFile = async (url, fileName) => {
    try {
      // Convert an url file to new File
      const result = await fetch(url).then(async (response) => {
        const blob = await response.blob();
        const file = Object.assign(
          new File([blob], fileName, { type: blob.type }),
          {
            path: fileName,
          }
        );
        return file;
      });

      return result;
    } catch (error) {
      dispatch({
        type: POST_ERROR,
        payload: `Hubo un error`,
      });
    }
  };

  return (
    <publicationContext.Provider
      value={{
        posts: state.posts,
        currentPost: state.currentPost,
        swiperCard: state.swiperCard,
        suggestions: state.suggestions,
        error: state.error,
        getPosts,
        updateCurrentPost,
        createPost,
        updatePost,
      }}
    >
      {props.children}
    </publicationContext.Provider>
  );
};

export default PublicacionState;
