import React from 'react'
// import { Container, Image, Card } from "react-bootstrap"
import '../App.css'
import Images from './shared/Images'
import { Carousel }  from 'react-bootstrap';

function CarouselFadeExample() {
    return(   
        <>
        <h1 className="page-heading">Welcome!</h1> 

           <br />
      
              <div className='welcomeBio'>
                  Hi!, I'm Sam and I am software engineer! I am new to the world of software and ready to learn everything I can about the industry. I have a lot of experience in project management and building and I decided I wanted to learn to build in the digital world.
              </div> 
          
         
      
          <br /> 
      

    
    <Carousel fade>
    <Carousel.Item>
        <img
          className="d-block w-100"
          src={Images.pawSitters}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    <Carousel.Item>
        <img
          className="d-block w-100"
          src={Images.goodAvo}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    <Carousel.Item>
        <img
          className="d-block w-100"
          src={Images.wyoTrails}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Images.sp2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Images.sp}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Images.sp3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  
    
  
    </>
       
    );
    
}
console.log(CarouselFadeExample)
export default CarouselFadeExample