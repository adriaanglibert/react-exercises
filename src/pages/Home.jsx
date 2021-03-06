import React, { useEffect, useState } from "react";

import { API_POST_URL } from "../api";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import List from "../components/List";
import {ReactComponent as Logo} from '../assets/images/logo.svg';
import ROUTES from "../routes";
import dog from '../assets/images/dog.jpeg';
import logo from '../assets/images/logo.svg'
import useFetch from "../hooks/useFetch";

const Home = () => {
  const [search, setSearch] = useState("");
  const [posts, postError, postLoading] = useFetch(API_POST_URL);

  const filteredPosts = posts?.filter((post) => post.title.includes(search));

  return (
    <>
      <Logo/>
      <img src={logo} />
      <img src={dog} />
      {postLoading && <p>Loading...</p>}
      {postError && <p>Something went wrong...</p>}
      {posts && (
        <>
          <h1>Posts</h1>
          <input
            placeholder="Search a post"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <List
            items={filteredPosts}
            dynamicUrl={ROUTES.POST}
            dynamicKey="id"
          />
        </>
      )}
    </>
  );
};

export default Home;
