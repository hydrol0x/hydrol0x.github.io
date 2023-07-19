// @ts-nocheck
import './App.scss'
// @ts-ignore
import Navbar from './Components/Navbar'
import FooterBar from './Components/FooterBar'
import GradShadowHeading from './Components/GradShadowHeading'
import ExperienceCard from './Components/ExperienceCard'
import ContactButton from './Components/ContactButton'

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
            <h1 className='greeting_subhead'>Hey, I'm</h1>
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
            <GradShadowHeading text={`About`} gradColors={gradColors2} length={800}/>
          </div>
          <div className='about-content'>
            <p className='info_para'>
            As a dedicated student, my relentless pursuit of knowledge in the fields of STEM, particularly programming and computer science, has shaped my academic journey. I am deeply passionate about leveraging technology to drive innovation and solve complex problems. With a keen focus on programming, I have actively engaged in a diverse range of STEM projects that have allowed me to explore fascinating realms. From delving into the intricate world of nuclear physics to unraveling the mysteries of the human brain in neuroscience, my experiences have enriched my understanding and honed my skills. 
            </p> 
            <img src='assets\testpictures.png' className='aboutpics'/>
          </div>
        </div> 
      </section>
      <section className='section3' id='experience'>
        <div className='flexbox-low'>
          <div>
            <GradShadowHeading text={"Experience"} gradColors={gradColors3} length={800}/>
          </div>
          {/* TODO: Add a carousel (will just have placeholder for now) */}
          <div className='experience-card-carousel'>
            <ExperienceCard 
              className={"experience_card"}
              color1={""} 
              color2={""} 
              dateLine={"June 12 - July 21, 2023"}
              descriptionList={
                  ["Worked under the Bidaye Lab, which aims to understand neuronal control of locomotion",
                  "Working alongside a post-doc in the lab, I created a pipeline using python in order to automate the processing of experimental data",
                  "Utilzied libraries such as DeepLabCut and Anipose to create 2D annotated experiment data and then 3D reconstructions of Drosophila locomotion."]} 
              heading={"Max Plank Florida Institute"}      
              jobName={"Scientific Programming Intern"}
              skillList={["Python","Pandas","Numpy","DeepLabCut","Anipose","Machine Learning"]}
            />
          </div>
          
        </div> 
      </section>
      <section className='section4' id='projects'>
        <div className='flexbox-low'>
          <div>
            <GradShadowHeading text={"Projects"} gradColors={gradColors4} length={800}/>
          </div>
          <p className='info_para'>
          <ul>
            <li><a href="https://github.com/hydrol0x/Amazon-to-Ebay">Amazon Web Crawler</a></li>
            <li><a href="https://github.com/hydrol0x/earnings.ly">Earning.ly</a></li>
            <li><a href="https://github.com/hydrol0x/PYXIS-python">PYXIS Simulator Utility</a></li>
          </ul>
          </p> 
        </div> 
      </section>
      <section className='section5' id='contact'>
        <div className='flexbox-low'>
          <div>
            <GradShadowHeading text={"Contact"} gradColors={gradColors5} length={800}/>
          </div>
          <div className='contact_wrapper'>
            <p className='contact_message'>
            I'm always looking for my next opportunity, Whether you have a question or just want to say hello, I’ll try my best to get back to you!
            </p> 
            <ContactButton email={"mrjacobry@gmail.com"}/>
          </div>
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
