import React from 'react';
import type {User} from '../../types';

interface Props {
  user: User;
}

const UserItem: React.FC<Props> = ({user}) => {
  let currentStatus;
  if(user.isActive) {
    currentStatus = 'Active';
  }else{
    currentStatus = 'Inactive';
  }

  return (
    <div className="card mb-2 p-3" style={{width: '300px'}}>
      <p className="card-text"><b>Username: </b>{user.name}</p>
      <p className="card-text"><b>Email: </b>{user.email}</p>
      <p className="card-text"><b>Current status:</b> {currentStatus}</p>
      <p className="card-text"><b>Role: </b>{user.role}</p>
    </div>
  );
};

export default UserItem;