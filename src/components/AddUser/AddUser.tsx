import React from 'react';

const AddUser = () => {
  return (
    <form>
      <h5>Add user</h5>
      <div className="form-group mt-3">
        <label htmlFor="name">Name</label>
        <input
        id="name"
        type="text"
        name="name"
        className="form-control mt-1"
        />
      </div>
      <div className="form-group mt-3">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          className="form-control mt-1"
        />
      </div>
      <div className="form-group mt-3">
        <label htmlFor="active">Active</label>
        <input
        id="active"
        type="checkbox"
        name="active"
        className="form-check-input ms-3"
        />
      </div>
      <div className="form-group mt-3">
        <label htmlFor="role">Role</label>
        <select
        id="role"
        name="role"
        className="form-select mt-1"
        >
          <option value="user">User</option>
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button type="submit" className="btn btn-success mt-5">Add user</button>
    </form>
  );
};

export default AddUser;