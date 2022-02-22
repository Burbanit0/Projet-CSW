import React from 'react';
import { Nav } from 'react-bootstrap';


function Header() {

  return(
  <header>
    <h1>Photo Gallery App</h1>
    <Nav className="justify-content-center">
      <Nav.Item>
         <Nav.Link href="/" className="link">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/gallery" className="link">
          Gallery
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/search" className="link">
          Search
        </Nav.Link>
      </Nav.Item>
    </Nav>
    
  </header>
  )
};

export default Header
