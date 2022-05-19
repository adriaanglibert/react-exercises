import { Link, useParams } from "react-router-dom";

import { API_POST_URL } from "../api";
import FetchingContainer from "../components/FetchingContainer";
import ROUTES from "../routes";
import React from "react";
import useFetch from '../hooks/useFetch';

const PostPage = () => {
  const { id: postId } = useParams();
  const [post, postError, postLoading] = useFetch(`${API_POST_URL}/${postId}`);

  return (
    <div>
      <Link to={ROUTES.BASE}>Ga terug naar home</Link>

      {postLoading && <p>Loading...</p>}
      {postError && <p>Something went wrong...</p>}
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </>
      )}
    </div>
  );
};

export default PostPage;
