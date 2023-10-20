import React, { useState } from 'react';
function AdminDashboard(){
  return(
    <div>
    <h1>Admin Dashboard</h1>
    </div>
  )
}
function UserDashboard(){
  return(
    <div>
    <h1>User Dashboard</h1>
    </div>
  )
}
function Dashboard () {
  const [isAdmin, setAdmin] = useState(false);
  const handleAdminLogIn = ()=>{
    setAdmin (true);
  };
  const handleLogIn = ()=> {
    setAdmin(false);
  };
  return (
    <div>
    {isAdmin ? <AdminDashboard/> : <UserDashboard/>}
    {isAdmin ? (
      <button onClick={handleLogIn}>Logout</button>
    ) : (
      <button onClick={handleAdminLogIn}>LogIn as Admin</button>
    )}
    </div>
  );
}
export default Dashboard;