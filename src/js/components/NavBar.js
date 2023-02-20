import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon,
  MDBNavbarToggler,
} from 'mdb-react-ui-kit';

const Navbar = () => {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>
          <img
            src='https://fzsports.com/content/uploads/fz-logo-1.svg'
            height='40'
            alt='Fz sports'
            loading='lazy'
          />
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem style={{
              display: 'flex',
              alignItems: 'center',
              padding: '2em'
            }}>
              <NavLink style={{ textDecoration: 'none', color: 'black' }} to={'/contenidos'}>Contenidos</NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem style={{
              display: 'flex',
              alignItems: 'center'
            }}>
              <NavLink style={{ textDecoration: 'none', color: 'black' }} to={'/contadores'}>Contadores</NavLink>
            </MDBNavbarItem>

          </MDBNavbarNav>

        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Navbar;