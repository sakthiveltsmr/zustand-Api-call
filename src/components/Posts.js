import React from "react";
import useFriendsPostsReactor from "../store/reactors/userFriendsPostsReactor";
import useStore from "../store/useStore";

const Posts = () => {
  const fetchPosts = useStore((state) => state.fetchPosts);
  const posts = useFriendsPostsReactor();
  console.log("post:", posts);

  React.useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div>
      <h3>Posts</h3>

      {posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};

export default Posts;
