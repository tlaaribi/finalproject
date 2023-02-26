import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';
import LoginModal from './auth/LoginModal';
import RegisterModal from './auth/RegisterModal'
import{useSelector,useDispatch} from "react-redux";
import HeaderCartButton from './Layout/HeaderCartButton';
import Logout from '../Components/auth/logout';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    main: 'blue',
  },
});

function AppNavBar() {
  const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const user=useSelector((state)=>state.authReducer.user)

    const authLinks = (
        <div>
          <NavItem>
            <Link to="/dashboard">
              <span className="navbar-text mr-3">
                <strong>dashboard</strong>
              </span>
            </Link>
          </NavItem>
          <Logout/>
          <HeaderCartButton />
        </div>
      );
    
      const guestLinks = (
        <>
          <NavItem>
<RegisterModal/>
          </NavItem>
          <NavItem>
 <LoginModal/>
          </NavItem>
        </>
      );
  return (
    <div>
    <Navbar color="dark" dark expand="sm" className="mb-5">
      <Container>
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler  onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>

            {user?authLinks:guestLinks}

          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  </div>
  )
}

export default AppNavBar