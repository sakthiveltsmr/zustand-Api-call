import React from "react";
import useStore from "../store/useStore";

const Users = () => {
  const users = useStore((state) => state.users);
  const addToFriends = useStore((state) => state.addToFriends);
  const fetchUsers = useStore((state) => state.fetchUsers);
  React.useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div>
      {users.map((user) => (
        <div>
          <span key={user.id}>{user.name}</span>
          {""}
          {""}

          <button onClick={() => addToFriends(user)}>addToFriends</button>
        </div>
      ))}
    </div>
  );
};

export default Users;
