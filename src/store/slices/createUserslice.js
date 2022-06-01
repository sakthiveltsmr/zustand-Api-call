import axios from "axios";
const createUserSlice = (set, get) => ({
  users: [],
  friends: [],

  fetchUsers: async () => {
    const res = await axios.get("http://localhost:3000/posts");
    set({ users: await res.data });
  },
  addToFriends: (user) => {
    set({
      friends: [...get().friends, user],
    });
  },
  removeUserFromFriends: (userId) => {
    set({
      friends: get().friends.filter((friend) => friend.id !== userId),
    });
  },
  addPost: async () => {
    const res = await axios.post("http://localhost:3000/posts", {
      name: "sakthi",
      email: "vel@gmail.com",
    });

    set({
      users: [...get().users, res.data],
    });
  },
});

export default createUserSlice;
