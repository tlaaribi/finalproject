import './App.css';
import {useSelector} from "react-redux"
import AppNavBar from './Components/AppNavBar';
import{Routes,Route} from "react-router-dom"
import DashBoard from './Components/pages/DashBoard';
import Home from './Components/pages/Home';
import {useDispatch} from "react-redux"
import { getAuthUser } from './redux/actions/userAction';
import { useEffect } from 'react';
import FoodList from './Components/pages/FoodList';

function App() {
const dispatch=useDispatch()
const user = useSelector((state)=>state.authReducer.user)
useEffect(()=>dispatch(getAuthUser()),[])

return (
    <div className="App">

    <AppNavBar/>
    <Routes>
      <Route path="/"  element={<Home />}/>
      <Route  path="/dashboard" element={<DashBoard />}/>
      <Route path="/foodList" element={<FoodList/>} />
    </Routes>  
     
    </div>
  );
}

export default App;
