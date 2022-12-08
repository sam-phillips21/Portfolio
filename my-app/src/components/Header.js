import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
// import { Container } from 'react-bootstrap'
const linkStyle = {
	color: 'Black',
	textDecoration: 'none'
}
const navItems = () => {
     <>
        <Nav.Item className='m-2'>
			<Link to='/projects' style={linkStyle}>
				<p>All Projects</p>
			</Link>
		</Nav.Item>
		<Nav.Item className='m-2'>
			<Link to='/aboutme' style={linkStyle}>
				<p>About Me</p>
			</Link>
		</Nav.Item>
		<Nav.Item className='m-2'>
			<Link to='/contact' >
				<p>Contact </p>
			</Link>
		</Nav.Item>

        </>
}
const Header = () => (
	<Navbar variant='dark' expand='md'>
		
			<Navbar.Brand className='m-2'>
				<Link to='/' style={linkStyle}>
					<img
						src="https://i.imgur.com/ut67YmM.png"
						width="125"
						height="auto"
						alt={"The word 'good' with perfectly ripened avocados instead of 'o's"}
					/>
				</Link>
			</Navbar.Brand>
		
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto container-fluid d-flex justify-content-between'> { navItems } 
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header