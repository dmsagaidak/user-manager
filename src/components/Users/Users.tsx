import React from 'react';
import UserItem from "./UserItem";
import type {User} from '../../types';

interface Props {
  users: User[];
}

const Users: React.FC<Props>  = ({users}) => {
  return (
    <>
      <h5>Users:</h5>
      {users.map((user) =>(
        <UserItem key={user.id} user={user}/>
      ))}
    </>
  );
};

export default Users;