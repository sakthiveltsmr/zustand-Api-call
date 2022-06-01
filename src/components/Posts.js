import React from "react";
import useFriendsPostsReactor from "../store/reactors/userFriendsPostsReactor";
import useStore from "../store/useStore";

const Posts = () => {
  const fetchPosts = useStore((state) => state.fetchPosts);
  const posts = useFriendsPostsReactor();
  const addPost = useStore((state) => state.addPost);
  console.log("posts:", posts);
  React.useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h3>Posts</h3>

      {posts.map((post) => (
        <>
          <p key={post.id}>{post.email}</p>
          <button
            onClick={() => {
              addPost();
              fetchPosts();
            }}
          >
            addpost
          </button>
        </>
      ))}
    </div>
  );
};

export default Posts;
