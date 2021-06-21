/* eslint-disable import/no-duplicates */
/* eslint-disable no-constant-condition */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
} from 'reactstrap';
import { signOutUser } from '../../helpers/auth';
import { signInUser } from '../../helpers/auth';

const NavBar = ({ admin, user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
    <>
  <NavItem>
    <Link className="nav-link" id="that" to="/add-dog">Add Dog Form</Link>
  </NavItem>
  </>
  );

  const authenticatedUser = () => (
    <>
  <NavItem>
    <Link className="nav-link" id="who" to="/wishlist">Wishlist</Link>
  </NavItem>
  </>
  );

  return (
    <div>
      <Navbar light expand="md">
        <NavbarBrand href="/"><img className="fidoLogo" src="https://firebasestorage.googleapis.com/v0/b/fido-e7f7f.appspot.com/o/fido-logo.png?alt=media&token=12839bc2-3912-4222-aedd-a80a23ec6921" alt="logo"/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
          <NavItem>
    <Link className="nav-link" id="that" to="/dogs">Dogs</Link>
  </NavItem>
  <NavItem>
    <Link className="nav-link" id="that" to="/about-us">About Us</Link>
  </NavItem>
          {admin && authenticated()}
          {user && authenticatedUser()}
          <NavItem>
              {
                admin !== null
                && <NavItem>
                  {
                  admin
                    ? <Button className='nav-link' color='link' onClick={signOutUser}>Logout</Button>
                    : ''
                  }
                  {
                    user
                      ? <Button className='nav-link' color='link' onClick={signOutUser}>Logout</Button>
                      : ''
                  }
                  {
                    user !== admin
                      ? ''
                      : <Button color="link" onClick={signInUser}>Sign In</Button>
                  }
                </NavItem>
              }
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  admin: PropTypes.any,
  user: PropTypes.any
};

export default NavBar;
