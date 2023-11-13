import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

function NewsNavbar({ setSelectedSection }) {
  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">News App</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarSupportedContent" />
      <Navbar.Collapse id="navbarSupportedContent">
        <Nav className="mr-auto">
          <Nav.Link onClick={() => handleSectionChange('all')}>All</Nav.Link>
          <Nav.Link onClick={() => handleSectionChange('top')}>Top</Nav.Link>
          <Nav.Link onClick={() => handleSectionChange('trending')}>Trending</Nav.Link>
          <Nav.Link onClick={() => handleSectionChange('science')}>Science</Nav.Link>
          <Nav.Link onClick={() => handleSectionChange('entertainment')}>Entertainment</Nav.Link>
          <Nav.Link onClick={() => handleSectionChange('sports')}>Sports</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NewsNavbar;
