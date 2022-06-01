import axios from "axios";

const createPostSlice = (set, get) => ({
  posts: [],
  postsFromFriends: [],
  fetchPosts: async () => {
    const res = await axios.get("http://localhost:3000/team");
    set({ posts: res.data });
  },
  filterPostsByFriends: () => {
    const postsFromFriends = get().posts.filter((post) =>
      get().friends.find((friend) => friend.id === post.id)
    );

    set({ postsFromFriends });
  },
});

export default createPostSlice;
