import React from 'react';
import AddUser from "./components/AddUser/AddUser";


function App() {
  return (
    <>
      <div className="container-fluid row mt-3">
        <div className="col">
          <AddUser/>
        </div>
        <div className="col">
          Users card
        </div>
      </div>
    </>
  );
}

export default App;
