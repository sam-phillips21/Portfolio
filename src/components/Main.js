import React from 'react'
import { Container, Image, Card } from "react-bootstrap"

const Main = () => {

    return(
    <>
    <h1 className="page-heading">Welcome!</h1>
    
    <Container className='mePhoto' style={{textAlign:'center'}} >
        <Image src="https://i.imgur.com/NNVj5I3.jpg" width="30em" alt="gva" />
        <Image src="https://i.imgur.com/H1eWv6Z.jpg" width="30em" alt="ga"  />
        <Image src="https://i.imgur.com/CMkVM1o.jpg" width="30em" alt="va"  />   
    </Container>

        <p className='welcomeBio'>
            Hi! Welcome, I'm Sam and I am a software engineer! I am new to the world of software and ready to learn everything I can about the industry. I have a lot of experience in project management and building and I decided I wanted to learn to build in the digital world.
        </p>
    
    <div className= "projectLinks">
            <a href= "https://wyotrails.fly.dev/">My First Application</a> 
            <br />
            <a href= "https://thegoodavocado.netlify.app/">First Group Project</a> 
    </div>

    <br />

    <div className="projImages">

            <Image src= "https://i.imgur.com/XhDxiYe.png" alt="ps" />
                
            <Image src="https://i.imgur.com/i2Scm9P.jpg" alt="ga"/>

            <Image src="https://i.imgur.com/FwlaMgZ.png" alt="wyo"/>

    </div>
     </>
       
    )
}

export default Main