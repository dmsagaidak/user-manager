import React from 'react';
import type {User} from '../../types';

interface Props {
  user: User;
}

const UserItem: React.FC<Props> = ({user}) => {
  return (
    <div className="card mb-2">
      <p className="card-text"><b>Username: </b>{user.name}</p>
      <p className="card-text"><b>Email: </b>{user.email}</p>
      <p className="card-text">Active</p>
      <p className="card-text"><b>Role: </b>{user.role}</p>
    </div>
  );
};

export default UserItem;