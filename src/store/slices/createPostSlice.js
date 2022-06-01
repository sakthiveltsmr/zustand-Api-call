import axios from "axios";
const createPostSlice = (set, get) => ({
  posts: [],
  postsFromFriends: [],
  fetchPosts: async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

    set({ posts: await res.data });
  },
  filterPostsByFriends: () => {
    const postsFromFriends = get().posts.filter((post) =>
      get().friends.find((friend) => friend.id === post.userId)
    );

    set({ postsFromFriends });
  },
});

export default createPostSlice;
