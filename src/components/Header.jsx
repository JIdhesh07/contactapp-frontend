import React from 'react'
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBBtn,
    MDBNavbarNav,
    MDBIcon,
    MDBInputGroup
  } from 'mdb-react-ui-kit';
  import './Header.css'
  import { useState } from 'react';
function Header() {

    const [openNavNoTogglerThird, setOpenNavNoTogglerThird] = useState(false);

  return (
    <div>

<MDBNavbar className='Navbar' expand='lg' light >
        <MDBContainer fluid>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarTogglerDemo03'
            aria-controls='navbarTogglerDemo03'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setOpenNavNoTogglerThird(!openNavNoTogglerThird)}
          >
            
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <i class="fa-solid fa-user fa-fade  m-2 fs-3"></i>
          <MDBNavbarBrand href='#'>Contact App</MDBNavbarBrand>
          <MDBCollapse navbar open={openNavNoTogglerThird}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Link</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                  Disabled
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
              <input className='form-control' placeholder="Type query" aria-label="Search" type='Search' />
              <MDBBtn style={{color:'black'}} outline>Search</MDBBtn>
            </MDBInputGroup>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
     

    </div>
  )
}

export default Header