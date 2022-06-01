import axios from "axios";
const createUserSlice = (set, get) => ({
  users: [],
  friends: [],
  fetchUsers: async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log("response:", res);

    set({ users: await res.data });
  },
  addToFriends: (user) => {
    set({
      friends: [...new Set([...get().friends, user])],
    });
  },
  removeUserFromFriends: (userId) => {
    set({
      friends: get().friends.filter((friend) => friend.id !== userId),
    });
  },
});

export default createUserSlice;
