import React from 'react'
// import { Link } from 'react-router-dom';
import { Image, Card } from "react-bootstrap"
// import Header from './components/Header'
//main to include most details.

const Main = () => {

    return(

        <>
         <a href='https://linkedin.com/in/samphillips100/' className='btn btn-outline-info mx-1'>Linkedin</a>

            <br />
            <div className='mePhoto'>

            <Image src="https://i.imgur.com/NNVj5I3.jpg" alt="gva"style={{width: "600px" }} />
            <Image src="https://i.imgur.com/H1eWv6Z.jpg" alt="gva"style={{width: "600px" }} />
            <Image src="https://i.imgur.com/CMkVM1o.jpg" alt="gva"style={{width: "600px", height: "800px" }} />
        </div>
        <h1 className="page-heading">Welcome to my Portfolio!</h1>
        <p className='welcomeBio'>
            Hi! Welcome, I am Sam and I am a software engineer! I am new to the world of software and ready to learn everything I can about the industry. I have a lot of experience in project management and building things and I decided I wanted to learn to build things in the digital world.
        </p>
        <p className= 'projectLinks'>
            <a href= "https://wyotrails.fly.dev/">My first application</a> 
            <br />
            <a href= "https://thegoodavocado.netlify.app/">First Group Project</a>
            <br />
            <a href= "https://github.com/sam-phillips21">GitHub</a>

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
       
         

       </div>
        </>
    )
}

export default Main