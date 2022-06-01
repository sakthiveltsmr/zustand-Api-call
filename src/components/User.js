import React from "react";
import useStore from "../store/useStore";

const Users = () => {
  const users = useStore((state) => state.users);
  const removeUsers = useStore((state) => state.removeUsers);
  const fetchUsers = useStore((state) => state.fetchUsers);
  const addPost = useStore((state) => state.addPost);
  React.useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="main">
      <h1>Demo Zustand</h1>
      {users.map((user) => (
        <div className="users">
          <span className="span" key={user.id}>
            {user.name}
          </span>
          <></>
          <button className="add" onClick={() => addPost(user.id)}>
            Add
          </button>
          <></>
          <button
            className="delete"
            onClick={() => {
              removeUsers(user.id);
              fetchUsers();
            }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Users;
