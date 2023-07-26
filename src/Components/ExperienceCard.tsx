// @ts-nocheck
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  @media (max-width: 1280px) {
    transform: scale(.8);
  }
  display: flex;
  height:100%;
  border: 2px solid #000814;
  border-radius: 8px;
  overflow:hidden;
  background: linear-gradient(90deg, ${(props) => props.color1} 6%, ${(props) => props.color2} 100%);
  color:#20252b;
  transition: box-shadow .25s, transform 0.2s ease-in-out;
  box-shadow: 5px 5px 0px #000814;

  // &:hover {
  //   transform: translate(-1%, -1%);
  // }
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
  // padding-bottom: 3px;
  // border-bottom: 2px solid #007267; 

  > a {
    // text-decoration:none;
    text-decoration-thickness:1px;
    color:black;
    width: 100%;
    height: 100%;
    transition: color .2s, transform 0.2s ease-in-out;
  }

  > a:hover {
    color: #007267;
    text-underline-offset: .15em;
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

const JobName = styled.h1`
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
  width: 200px; 
  overflow: hidden;
  padding:0;
`;

const Picture = styled.img`
  height: 100%;
  width: 100%;
  margin:0;
  padding:0;
  object-fit: cover;
`;
// June 12 - July 21, 2023
const ExperienceCard = ({color1, color2, heading, jobName, dateLine, descriptionList, skillList, link}) => {
  return (
    <CardContainer color1={color1} color2={color2}>
      <ContentContainer>
        <Heading><a href={link} target="_blank" rel="noopener noreferrer">{heading}</a></Heading>
        <Subheading>
            <JobName>{jobName}</JobName>
            <DateLine>{dateLine}</DateLine>
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
        <Picture src="https://www.mpfi.org/wp-content/uploads/Test/MaxPlanckFlorida_header_2400-2200x1431.jpg" alt="Job Picture" />
      </PictureContainer>
    </CardContainer>
  );
}

export default ExperienceCard;
