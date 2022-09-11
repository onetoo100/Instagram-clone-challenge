import React, { useContext, useEffect } from "react";
// Contexts
import publicationContext from "../../contexts/publicationContext";
// Components
import PostCard from "./PostCard";
import SwiperCard from "../SwiperCard/SwiperCard";
import SuggestionsCard from "../Suggestions/SuggestionsCard";

const Main = () => {
  const { posts, getPosts } = useContext(publicationContext);

  const getPublicacion = async () => {
    await getPosts();
  };

  useEffect(() => {
    getPublicacion();
  }, []);

  return (
    <section className="posts container">
      <div className="posts_card">
        <SwiperCard />
        {posts.length === 0 && <p>Loading....</p>}
        {posts.map((e, index) => (
          <PostCard key={index} publis={e} />
        ))}
      </div>
      <SuggestionsCard />
    </section>
  );
};

export default Main;
