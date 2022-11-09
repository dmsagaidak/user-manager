import React, {useState} from 'react';
import UserForm from "./components/AddUser/UserForm";
import Users from "./components/Users/Users";
import type {User} from "./types";


function App() {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (newUser: User) =>{
    setUsers(prev =>[...prev, newUser]);
  };

  return (
    <>
      <div className="container-fluid row mt-3">
        <div className="col">
          <UserForm onSubmit={addUser}/>
        </div>
        <div className="col">
          <Users users={users}/>
        </div>
      </div>
    </>
  );
}

export default App;
