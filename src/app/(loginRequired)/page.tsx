import { getAllUsers } from "@/api/users";
import React from "react";

export const test = async () => {
  const users = await getAllUsers();
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h1>{user.username}</h1>
          <p>{user.role}</p>
        </div>
      ))}
    </div>
  );
};
