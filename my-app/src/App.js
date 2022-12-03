import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Fragment } from 'react';
import { Route, Routes, Link } from 'react-router-dom'


const App = () => {
  return (
    <>
    <Fragment>
      {/* <SideNav className='d-flex' /> */}
			<Routes>
				<Route
          path='/' 
          element={<Main />} 
        />
        <Route
					path='/projects'
					element={<Projects />}
				/>
        	<Route
					path='/contact'
					element={<Contact />}
				/>
        </Routes>

    </Fragment>
    </>
  );
}

export default App
