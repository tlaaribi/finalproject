import React from 'react'
import {useSelector} from "react-redux"
import { Spinner } from 'reactstrap';
import AddProduct from './AddProduct';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';


function DashBoard() {

  const user=useSelector((state)=>state.authReducer.user)
  
  if (!user) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Spinner
          style={{ width: '3rem', height: '3rem', color: 'secondary' }}
          type="grow"
        />
      </div>
    );
  }
  return (
    <div>
      {user.isAdmin ? <AdminDashboard/> : <UserDashboard/>}
    </div>
  )
}

export default DashBoard