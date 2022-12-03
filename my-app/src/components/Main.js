import React from 'react'
import { Link } from 'react-router-dom';
//main to include 
const Main = () => {
    return(
        <>
        <div className="home">

			<h1 className="page-heading">Welcome to my Portfolio!</h1>
            <p>

                I have lots of work to do on mi portfolio! 

                

            </p>

            <p>

           
            </p>
            <p>

            <Link to='https://www.linkedin.com/in/samphillips100/' className='btn btn-outline-info mx-1'></Link>

            </p>
        </div>
        </>
    )
}

export default Main