import React from 'react'
import { Link } from 'react-router-dom';
import { Image, Container, Card } from "react-bootstrap"

//main to include most details.

const Main = () => {

    return(

        <>

        <h1 className="page-heading">Welcome to my Portfolio!</h1>
        <p className='welcomeBio'>
            Hi! Welcome, I am Sam and I am a software engineer! I am new to the world of software and ready to learn everything I can about the industry. I have a lot of experience in project management and building things. I decided I wanted to learn to build things in the digital world.
        </p>
        <p className= 'projectLinks'>
            <a href= "https://wyotrails.fly.dev/" target='_blank'>My first application</a> 
            <br />
            <a href= "https://thegoodavocado.netlify.app/">First Group Project</a>
            <a href= "https://github.com/sam-phillips21"></a>

        </p>
        <div className='mx-4'>
            <Card.Body>

                <div className="projImages">

                    <Image src= "https://i.imgur.com/XhDxiYe.png" alt="ps" style={{width: "600px" }} />
                
                    <Image src="https://i.imgur.com/i2Scm9P.jpg" alt="gva"style={{width: "600px" }}/>

                    <Image src="https://i.imgur.com/FwlaMgZ.png" alt="wyo"style={{width: "600px" }}/>

                </div>

            </Card.Body>


                <Card.Body>
            
                    <img
                        style={{ width: 600 }}
                        // src={home}
                        alt={""}
                    />
                 </Card.Body>
       
                <Link to='./linkedin.com/in/samphillips100/' className='btn btn-outline-info mx-1'></Link>

       </div>
        </>
    )
}

export default Main