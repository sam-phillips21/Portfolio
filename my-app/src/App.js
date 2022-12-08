import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Main from './components/Main';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Fragment } from 'react';
import { Route, Routes, Link } from 'react-router-dom'


const App = () => {
  return (
    <>
    <Fragment>
      <nav>
        <Link to='/'/>
        <Link to='/aboutme'/>
        <Link to='/projects'/>
        <Link to='/contact'/>
      </nav>
      <Header/>
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
        	<Route
					path='/aboutme'
					element={<AboutMe />}
				/>
        </Routes>

    </Fragment>
    </>
  )
}

export default App
