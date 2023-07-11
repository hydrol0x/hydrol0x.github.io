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
  const gradColors3 = ['#FDF1CA', '#CAD0B8', '#96AFA7', '#638E95','#2F6D83']
  const gradColors4 = ['#FDF1CB', '#D4D5AE', '#ABB991', '#819D74','#588157']
  const gradColors5 = ['#D4EAC8', '#9FB29B', '#6A796E', '#354141','#000814']
  return (
    <>
      <Navbar />
      <section className='section1' id="home">
        <div className='flexbox-high'>
          <div className='greeting_title'>
              <h1 className='greeting_1'>Hey, I'm</h1>
              {/* <h1 className='greeting_2'>JACOB RYABINKY</h1> */}
            <GradShadowHeading text={"JACOB RYABINKY"} gradColors={gradColors1} length={800}/>
          </div>
          <p className='welcome_paragraph'>
          Student at Suncoast Highschool and Palm Beach State College, currently focusing on scientific programming, machine learning, and data science.
          </p> 
        </div>
      </section>
      <section className='section2' id="about">
        <div className='flexbox-veryhigh'>
          <div>
            <GradShadowHeading text={"About me"} gradColors={gradColors2} length={800}/>
          </div>
          <p className='info_para'>
          As a dedicated student, my relentless pursuit of knowledge in the fields of STEM, particularly programming and computer science, has shaped my academic journey. I am deeply passionate about leveraging technology to drive innovation and solve complex problems. With a keen focus on programming, I have actively engaged in a diverse range of STEM projects that have allowed me to explore fascinating realms. From delving into the intricate world of nuclear physics to unraveling the mysteries of the human brain in neuroscience, my experiences have enriched my understanding and honed my skills. 
          </p> 
        <img src='src\assets\testpictures.png' className='aboutpics'/>
        </div> 
      </section>
      <section className='section3' id='experience'>
        <div className='flexbox-low'>
          <div>
            <GradShadowHeading text={"Experience"} gradColors={gradColors3} length={800}/>
          </div>
          <p className='info_para'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
          </p> 
        </div> 
      </section>
      <section className='section4' id='projects'>
        <div className='flexbox-low'>
          <div>
            <GradShadowHeading text={"Projects"} gradColors={gradColors4} length={800}/>
          </div>
          <p className='info_para'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
          </p> 
        </div> 
      </section>
      <section className='section5' id='contact'>
        <div className='flexbox-low'>
          <div>
            <GradShadowHeading text={"Contact"} gradColors={gradColors5} length={800}/>
          </div>
          <p className='info_para'>
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
