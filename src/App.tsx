// @ts-nocheck
import './App.scss'
// @ts-ignore
import Navbar from './Components/Navbar'
import FooterBar from './Components/FooterBar'
import GradShadowHeading from './Components/GradShadowHeading'

function App() {
  const horse = `
      ,
      _,,)\.~,,._
      (()\`  \`\`)\))),,_
      |     \ ''((\)))),,_          ____
      |6\`   |   ''((\())) "-.____.-"    \`-.-,
      |    .'\    ''))))'                  \)))
      |   |   \`.     ''                     ((((
      \, _)     \/                          |))))
        \`'        |                          (((((
                  \                  |       ))))))
                  \`|    |           ,\     /((((((
                    |   / \`-.______.&lt;  \   |  )))))
                    |   |  /         \`. \  \  ((((
                    |  / \ |           \`.\  | (((
                    \  | | |             )| |  ))
                    | | | |             || |  ' 
                    | | | |             || |  
                    | | | |             || |  
                    | | | |             || |  
                    | | | |             || |  
                    | | | |             || |  
                    | | | |             || |  
                    | | | |             || |  
                    | | | |             || |  
                    | | | |             || |  
                    | | | |             || |  
                    | | | |             || |  
                    | | | |             || |  
                    | | | |             || |  
                    | | | |             || |  
                    | | | |             || |  
                    | | | |             || |  
                    | | | |             || |    
                  | | | | |   | /       || |   | _
            . .. |_ / | / |  ._|||_| .. / | | _||__|_..  . not so infinite horse.
                    
  `
  const gradColors1 = ['#FBB028', '#F69C28', '#EB7426', '#E14C21', '#D72523'];
  const gradColors2 = ['#FFE8A3', '#FFD581', '#FFC25F', '#FFAF3C', '#FF9C1A']
  const gradColors3 = ['#FDF1CB', '#C4C2A0', '#8A9481', '#4F6561','#143642']
  const gradColors4 = ['#FDF1CB', '#D4D5AE', '#ABB991', '#819D74','#588157']
  const gradColors5 = ['#D4EAC8', '#9FB29B', '#6A796E', '#354141','#000814']
  return (
    <>
      <Navbar />
      <section className='section1' id="home">
        <div className='flexbox-high'>
          <div>
              <h1 className='greeting_1'>Hey, I'm</h1>
              {/* <h1 className='greeting_2'>JACOB RYABINKY</h1> */}
            <GradShadowHeading text={"JACOB RYABINKY"} gradColors={gradColors1} length={800}/>
          </div>
          <p className='about_paragraph'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
          </p> 
        </div>
      </section>
      <section className='section2' id="about">
        <div className='flexbox-low'>
          <div>
              {/* <h1 className='greeting_2'>JACOB RYABINKY</h1> */}
            <GradShadowHeading text={"About me"} gradColors={gradColors2} length={800}/>
          </div>
          <p className='about_paragraph'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
          </p> 
        </div> 
      </section>
      <section className='section3' id='experience'>
        <div className='flexbox-low'>
          <div>
              {/* <h1 className='greeting_2'>JACOB RYABINKY</h1> */}
            <GradShadowHeading text={"Experience"} gradColors={gradColors3} length={800}/>
          </div>
          <p className='about_paragraph'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
          </p> 
        </div> 
      </section>
      <section className='section4' id='projects'>
        <div className='flexbox-low'>
          <div>
              {/* <h1 className='greeting_2'>JACOB RYABINKY</h1> */}
            <GradShadowHeading text={"Projects"} gradColors={gradColors4} length={800}/>
          </div>
          <p className='about_paragraph'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
          </p> 
        </div> 
      </section>
      <section className='section5' id='contact'>
        <div className='flexbox-low'>
          <div>
              {/* <h1 className='greeting_2'>JACOB RYABINKY</h1> */}
            <GradShadowHeading text={"Contact"} gradColors={gradColors5} length={800}/>
          </div>
          <p className='about_paragraph'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
          </p> 
        </div>  
      </section>
      <section className='section6' id='end'>
        <div className='end-flexbox'>
          <pre className='horse'>
            {horse}
          </pre>
          <div className='copyright'>
            <p>© Jacob Ryabinky 2023</p>
          </div>
          <FooterBar /> 
        </div>
      </section>
    </>
  )
}

export default App
