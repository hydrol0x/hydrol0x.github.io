// @ts-nocheck
import React from 'react';
import styled from 'styled-components';

const smallDisplayWidth = "1400px";
const CardContainer = styled.a`
  @media (max-width:${smallDisplayWidth}) {
    transform:scale(.75);
  }
  display: flex;
  height:100%;
  border: 2px solid #000814;
  border-radius: 8px;
  overflow:hidden;
  background: rgb(123,205,144);
  // background: linear-gradient(90deg, rgba(123,205,144,1) 6%, rgba(66,215,189,1) 100%); 
  background: linear-gradient(90deg, ${(props) => props.color1} 6%, ${(props) => props.color2} 100%);
  color:#20252b;
  transition: box-shadow .25s, transform 0.25s ease-in-out;
  box-shadow: 2px 2px 0px #000814;
  text-decoration:none;

  &:hover {
    transform: scale(1) translate(-.5%, -.5%);
    @media (max-width:${smallDisplayWidth}) {
      transform:scale(.75) translate(-.5%, -.5%);
    }
    box-shadow: 5px 5px 0px #000814;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  position:relative;
  width:350px; 
  padding:10px;
  padding-right:15px;
`;

const Heading = styled.h2`
  background-color:transparent;
  font-family: sans-serif;
  margin:0;
  font-size: 30px;
  margin-bottom: 8px;
  padding-bottom: 3px;
  border-bottom: 2px solid #007267; 

  > a {
    text-decoration:none;
    color:black;
    width: 100%;
    height: 100%;
  }
  
`;

const Subheading = styled.div`
    font-family:sans-serif;
    margin-bottom:5px;
    font-size:6pt;
    > h1 {
        margin:0;
        padding:0;
    } 
`

const ProjectCat = styled.h1`
    // padding:0;
    // color:white;
`

const DateLine = styled.h1`
    // padding:0;
    // margin:0;
    // color:white;
`

// TODO: make this a div
const Description = styled.div`
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, .20)); 
  padding:4px;
  border-radius:8px;
  margin:0;
  font-size:12pt;
  font-family:sans-serif;
  // color:white;
  margin-bottom: 8px;
//   background-color:red;
  width:100%;
`;

const DescriptionList = styled.ul`
    > li {
        margin-top:10px;
    }
    padding-left:10px;
    list-style-type:none;
`

const Footer = styled.div`
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, .20)); 
  border-radius:8px;
  width:100%;
  padding:4px;
`;

const SkillsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const Skill = styled.li`
  // color:white;
  font-size:10pt;
  font-family:sans-serif;
  display: inline-block;
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 5px;
`;

const PictureContainer = styled.div`
  height: 100%;
  width: 200px; /* Adjust the width as per your needs */
  overflow: hidden;
  padding:0;
  position:relative;
`;

const Picture = styled.img`
  height: 100%;
  width: 100%;
  margin:0;
  padding:0;
  object-fit: cover;
  object-position: ${props => props.objectPosition || '50% 50%'};
`;
// June 12 - July 21, 2023
const ProjectCard = ({color1, color2, heading, subHeading, descriptionList, skillList, link, photoSrc, alt, imgPosition}) => {
  return (
    <CardContainer target="_blank" rel="noopener noreferrer" href={link} color1={color1} color2={color2}>
      <ContentContainer>
        <Heading><a href={link}>{heading}</a></Heading>
        <Subheading>
            <ProjectCat>{subHeading}</ProjectCat>
        </Subheading>
        <Description>
            <DescriptionList>
                {/* {descriptionList.forEach((description) => {
                    return <li>{description}</li>
                })} */}
                  {descriptionList.map((description, index) => (
                    <li key={index}>{description}</li>
                    ))}
            </DescriptionList>
        </Description>
        <Footer>
          <SkillsList>
                {skillList.map((skill, index) => (
                <Skill key={index}>{skill}</Skill>
                ))}
            </SkillsList>
        </Footer>
      </ContentContainer>
      <PictureContainer>
        <Picture src={photoSrc} alt={alt} objectPosition={imgPosition}/>
      </PictureContainer>
    </CardContainer>
  );
}

export default ProjectCard;
