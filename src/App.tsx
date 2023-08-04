// @ts-nocheck

// CSS
import './App.scss'

// Library imports
import React from 'react';
import { useSnapCarousel } from 'react-snap-carousel';

// Components
import Navbar from './Components/Navbar'
import FooterBar from './Components/FooterBar'
import GradShadowHeading from './Components/GradShadowHeading'
import ExperienceCard from './Components/ExperienceCard'
import ContactButton from './Components/ContactButton'
import ProjectCard from './Components/ProjectCard'
import CardCarousel from './Components/CardCarousel'

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

  const projectCardData = {
    className: "experience_card",
    color1: "#61d48b",
    color2: "#1dbbcf",
    descriptionList: [
      "",
      "Creating an innovative Natural Language Processing (NLP) system tailored for financial data analysis, powered by Google's PaLM 2 AI technology.",
      "Leveraging data from the U.S. Securities and Exchange Commission (SEC) through their EDGAR system to extract crucial financial details from company filings (10-K, 10-Q, and 8-K)."
    ],
    heading: "Earning.ly",
    subHeading: "Financial AI Assistant",
    skillList: [
      "Python",
      "PaLM",
      "Google Cloud Vertex",
      "SEC Edgar API",
      "Anipose",
      "Machine Learning"
    ],
    link: "https://lablab.ai/event/google-vertex-ai-hackathon/peppermint/earningly",
    photoSrc: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Philippine-stock-market-board.jpg",
    alt: "Stock Market Photo, Katrina.Tuliao CC BY 2.0 via Wikimedia Commons",
    imgPosition: "20% 50%"
  };
  
  const projectsData = [
    {
      className: "experience_card",
      color1: "#5de8dc",
      color2: "#52cbd1",
      descriptionList: [
        "Retriever allows users with visual impairment or blindness to use certain aspects of their computer just with their voice.",
        "Uses a large language model to perform natural language processing on the users command and determine the intent.",
        "Performs actions very quickly without human interaction with the OS GUI.",
      ],
      heading: "Retriever AI",
      subHeading: "Accesibility tool for the visually impaired",
      skillList: ["OpenAI Whisper", "PaLM2", "C#", "WinUI 3.0", "ElevenLabs Voice Generation",],
      link: "https://retriever.fyi/",
      photoSrc: "https://github.com/hydrol0x/retriever/assets/34951139/21c7998b-83a8-4438-a3bd-3822ccee0dd3",
      alt: "Amazon Logo",
      imgPosition: "42% 50%",
    },
    {
      className: "experience_card",
      color1: "#61d48b",
      color2: "#1dbbcf",
      descriptionList: [
        "Creating an innovative Natural Language Processing (NLP) system tailored for financial data analysis, powered by Google's PaLM 2 AI technology.",
        "Leverages data from the U.S. Securities and Exchange Commission (SEC) through their EDGAR system to extract crucial financial details from company filings (10-K, 10-Q, and 8-K).",
        "Empowering investors, analysts, and financial institutions with up-to-date and relevant financial information for informed decision-making."
      ],
      heading: "Earning.ly",
      subHeading: "Financial AI Assistant",
      skillList: [
        "Python",
        "PaLM2",
        "Google Cloud Vertex",
        "SEC Edgar API",
      ],
      link: "https://lablab.ai/event/google-vertex-ai-hackathon/peppermint/earningly",
      photoSrc: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Philippine-stock-market-board.jpg",
      alt: "Stock Market Photo, Katrina.Tuliao CC BY 2.0 via Wikimedia Commons",
      imgPosition: "20% 50%"
    },
    {
      className: "experience_card",
      color1: "#f5ca3d",
      color2: "#e09626",
      descriptionList: [
        "Detects and handles multiple types of Amazon listing page types",
        "Utilizes the Beautiful Soup python library to parse HTML output",
        "Returns key information about a product, allowing you to programatically get product information from product page links, without needing an expensive API.",
      ],
      heading: "Amazon Web Crawler",
      subHeading: "Amazon Product Page Crawler",
      skillList: ["HTTP requests", "Beautiful Soup", "HTML",],
      link: "https://github.com/hydrol0x/Amazon-to-Ebay/blob/master/amzn_product_scraper.py",
      photoSrc: "https://github.com/hydrol0x/hydrol0x.github.io/assets/34951139/9576a973-a393-4a8d-a600-bfbc7f0a756f",
      alt: "Amazon Logo",
      imgPosition: "55% 50%",
    },
    {
      className: "experience_card",
      color1: "#d8f0e7",
      color2: "#ceebed",
      descriptionList: [
        "I'm always working on more projects and expanding my skillset...",
        "If you're interested in working together, feel free to contact me!",
        "Or, visit my github to see some smaller work.",
      ],
      heading: "More Projects...",
      subHeading: "An amazing project",
      skillList: ["Time", "Effort", "Skill"],
      link: "#contact",
      photoSrc: "https://via.placeholder.com/100",
      alt: "Placeholder Image",
      imgPosition: "-40% 20%",
    },
  ]

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
        <div className='flexbox-high'>
          <div className="about-text-wrapper">
            <GradShadowHeading text={`About`} gradColors={gradColors2} length={800}/>
            <p className='info_para'>
            Computer science is my passion, but I think that great things come from intersections of knowledge. That's why I work to apply my knowledge of programming to whatever I can think of— whether it's in scientific data analysis, diabetes care, or even just to help me learn sheet music on the guitar. 

            I also love to teach and share my skills. Whether it's sharing  among my friends, tutoring in the school programming club, or developing comprehensive lessons, I think that teaching is the best path towards connection and collaboration.

            I'm always on the look out for the next big technology or my next <a href="#contact" style={{"color": "#003566"}}>collaboration</a>!
            </p> 
          </div>
          <div className='aboutpics'>
            <img src='src\assets\testpictures.png' />
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
              color1={"#7BCD90"} 
              color2={"#58D3AC"} 
              dateLine={"June 12 - July 21, 2023"}
              descriptionList={
                  ["Worked under the Bidaye Lab, which aims to understand neuronal control of locomotion",
                  "Working alongside a post-doc in the lab, I created a pipeline using python in order to automate the processing of experimental data",
                  "Utilized libraries such as DeepLabCut and Anipose to create 2D annotated experiment data and then 3D reconstructions of Drosophila locomotion."]} 
              heading={"Max Plank Florida Institute"}      
              jobName={"Scientific Programming Intern"}
              skillList={["Python","Pandas","Numpy","DeepLabCut","Anipose","Machine Learning"]}
              link={'https://www.mpfi.org/science/our-labs/bidaye-lab/'}
            />
          </div>
          
        </div> 
      </section>
      <section className='section4' id='projects'>
        <div className='flexbox-low'>
          <div>
            <GradShadowHeading text={"Projects"} gradColors={gradColors4} length={800}/>
          </div>
          {/* <ul>
            <li><a href="https://github.com/hydrol0x/Amazon-to-Ebay">Amazon Web Crawler</a></li>
            <li><a href="https://github.com/hydrol0x/earnings.ly">Earning.ly</a></li>
            <li><a href="https://github.com/hydrol0x/PYXIS-python">PYXIS Simulator Utility</a></li>
          </ul> */}

            {/* <ProjectCard 
              // className={"experience_card"}
              // color1={"#61d48b"} 
              // color2={"#1dbbcf"} 
              // descriptionList={
              //     ["Worked under the Bidaye Lab, which aims to understand neuronal control of locomotion",
              //     "Working alongside a post-doc in the lab, I created a pipeline using python in order to automate the processing of experimental data",
              //     "Utilized libraries such as DeepLabCut and Anipose to create 2D annotated experiment data and then 3D reconstructions of Drosophila locomotion."]} 
              // heading={"Earning.ly"}      
              // subHeading={"Financial AI Assistant"}
              // skillList={["Python","PaLM","Google Cloud Vertex","SEC Edgar API","Anipose","Machine Learning"]}
              // link={'https://lablab.ai/event/google-vertex-ai-hackathon/peppermint/earningly'}
              // photoSrc={"https://upload.wikimedia.org/wikipedia/commons/d/d7/Philippine-stock-market-board.jpg"}
              // alt={"Stock Market Photo, Katrina.Tuliao CC BY 2.0 via Wikimedia Commons"}
              // imgPosition={'20% 50%'}
              {...projectCardData}
            /> */}
            <CardCarousel cardData={projectsData}/>
        </div> 
      </section>
      <section className='section5' id='contact'>
        <div className='flexbox-low'>
          <div>
            <GradShadowHeading text={"Contact"} gradColors={gradColors5} length={800}/>
          </div>
          <div className='contact_wrapper'>
            <p className='contact_message'>
            Whether you've got an inquiry, an idea to share, or simply want to drop a friendly hello<b>—</b> I'm all ears, and I'll try my best to get back to you! 
            </p> 
            <ContactButton email={"mrjacobry@gmail.com"}/>
          </div>
        </div>  
      </section>
      <footer className='section6' id='end'>
        <div className='end-flexbox'>
          <pre className='horse'>
            {horse}
          </pre>
          <div className='copyright'>
            <p>© Jacob Ryabinky 2023</p>
          </div>
          <FooterBar /> 
        </div>
      </footer>
    </>
  )
}

export default App
