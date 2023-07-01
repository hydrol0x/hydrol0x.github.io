// @ts-nocheck
import './App.scss'
// @ts-ignore
import Navbar from './Components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <section className='section1' id="home">
        <div className='greeting'>
          <div>
              <h1 className='greeting_1'>Hey, I'm</h1>
              <h1 className='greeting_2'>JACOB RYABINKY</h1>
          </div>
          <p className='about_paragraph'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
          </p> 
        </div>
      </section>
      <section className='section2' id="about"></section>
      <section className='section3' id='experience'></section>
      <section className='section4' id='projects'></section>
      <section className='section5' id='contact'></section>
    </>
  )
}

export default App
