import React, {useState} from 'react';
import type {User} from '../../types';
import type {UserMutation} from "../../types";

interface Props {
  onSubmit: (user: User) => void;
}

const UserForm: React.FC<Props> = ({onSubmit}) => {
  const [user, setUser] = useState<UserMutation>({
    name: '',
    email: '',
    isActive: false,
    role: '',
  });

  const onUserChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>{
    const {name, value} = e.target;

    setUser(prev =>({...prev, [name]: value}));
  };

  const onFormSubmit = (e: React.FormEvent) =>{
    e.preventDefault();
    console.log(user);
    onSubmit({
      id: Math.random().toString(),
      ...user,
    })
  }

  return (
    <form onSubmit={onFormSubmit}>
      <h5>Add user</h5>
      <div className="form-group mt-3">
        <label htmlFor="name">Name</label>
        <input
        id="name"
        required
        type="text"
        name="name"
        className="form-control mt-1"
        value={user.name}
        onChange={onUserChange}
        />
      </div>
      <div className="form-group mt-3">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          className="form-control mt-1"
          value={user.email}
          onChange={onUserChange}
        />
      </div>
      <div className="form-group mt-3">
        <label htmlFor="active">Active</label>
        <input
        id="active"
        type="checkbox"
        name="isActive"
        className="form-check-input ms-3"
        checked={user.isActive}
        onChange={(e) =>{
          setUser(prev =>({...prev, isActive: e.target.checked}))
        }}
        />
      </div>
      <div className="form-group mt-3">
        <label htmlFor="role">Role</label>
        <select
        id="role"
        name="role"
        className="form-select mt-1"
        value={user.role}
        onChange={onUserChange}
        >
          <option disabled value=''>Select a role</option>
          <option value="User">User</option>
          <option value="Editor">Editor</option>
          <option value="Admin">Admin</option>
        </select>
      </div>
      <button type="submit" className="btn btn-success mt-5">Add user</button>
    </form>
  );
};

export default UserForm;