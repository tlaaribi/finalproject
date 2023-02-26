import React from 'react'
import {useSelector} from "react-redux"
import { Spinner } from 'reactstrap';
import PrincipalCard from '../../PrincipalCard';
import AddProduct from './AddProduct';
import AppNavBar from '../AppNavBar';

function AdminDashboard() {

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
      <h1 className="mb-3 ml-4">
        welcome to your space 
      </h1>
      <h5 className="mb-3 ml-4">{user.name}</h5>
      <h5 className="mb-3 ml-4">{user.email}</h5>

      <AddProduct />
      <PrincipalCard/>
  </div>
  )
}

export default AdminDashboard