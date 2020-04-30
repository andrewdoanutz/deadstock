import React, { Component } from 'react'
import {Navbar, Nav} from 'react-bootstrap';

export default class NavBar extends Component {
  render() {
    return (
      <>
        <div>
        <Navbar variant="dark" expand="xl" fixed="top" className="navbar">
          <Navbar.Brand href="/aboutUs">
            <Navbar.Text className="navbarTitle">Deadstock</Navbar.Text>
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
                <Nav.Link href="/newsfeed" className="navbarLink">Newsfeed</Nav.Link>
                <Nav.Link href="/marketplace" className="navbarLink">Marketplace</Nav.Link>
                <Nav.Link href="/blog" className="navbarLink">Blog</Nav.Link>
                <Nav.Link href="/releases" className="navbarLink">Releases</Nav.Link>
                <Nav.Link href="/account" className="navbarLink">Account</Nav.Link>
                <Nav.Link href="/aboutUs" className="navbarLink">About Us</Nav.Link>
                <Nav.Link href="/technology" className="navbarLink">Technology</Nav.Link>
                <Nav.Link href="/app" className="navbarLink">App</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      </>
    )
  }
}
