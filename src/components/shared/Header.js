import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
const linkStyle = {
	color: 'Black',
	textDecoration: 'none'
}
const alwaysOptions = (
	
     <>
		<Nav.Item className='webSites'>
			<p><a href='https://linkedin.com/in/samphillips100/' className='webSites' style={linkStyle}>Linkedin</a> </p>
		</Nav.Item>
		<aside/>
		<Nav.Item className='webSites'>
			<p><a href='https://github.com/sam-phillips21'className='webSites' style={linkStyle}>GitHub</a> </p>
		</Nav.Item>
		<Nav.Item className='webSites'>
			<p><a href='https://docs.google.com/document/d/12FZU5xIgaMBwf-YW1Lx_Z2Qc2q6gkqNta79l-vospkI/edit?usp=sharing'className='webSites' style={linkStyle}>Resume</a> </p>
		</Nav.Item>
    </>
)
const Header = () => (
	<Navbar variant='dark' expand='md'className='m-2' id='header-container'>
		{/* <Navbar.Toggle aria-controls='basic-navbar-nav'id='toggle'/> */}
		{/* <Navbar.Collapse id='basic-navbar-nav'> */}
			<Nav className='ml-auto container-fluid d-flex justify-content-between'> 
					{alwaysOptions}
			</Nav>
		{/* </Navbar.Collapse> */}
	</Navbar>
)

export default Header