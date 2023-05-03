import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
// import { Container } from 'react-bootstrap'
const linkStyle = {
	color: 'Black',
	textDecoration: 'none',
}
// const alwaysOptions = (
	
//      <>
// 		<Nav.Item className='m-2'>
// 			<Link to='https://linkedin.com/in/samphillips100/'  style={linkStyle}>Linkedin</Link> 
// 		</Nav.Item>
// 		<Nav.Item className='m-2'>
// 			<Link to='https://github.com/sam-phillips21' style={linkStyle}>GitHub</Link> 
// 		</Nav.Item>
// 		<Nav.Item className='m-2'>
// 			<Link to='https://docs.google.com/document/d/12FZU5xIgaMBwf-YW1Lx_Z2Qc2q6gkqNta79l-vospkI/edit?usp=sharing' style={linkStyle}>Resume</Link> 
// 		</Nav.Item>
//     </>
// )
const Header = () => (
	<Navbar bg='primary' variant='dark' expand='md'>
		<Navbar.Brand>
            <Link to='/' style={linkStyle}>
                
            </Link>
        </Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto'>
			
				{/* {alwaysOptions} */}
				
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header