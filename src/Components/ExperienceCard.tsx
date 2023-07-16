// @ts-nocheck
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  height:100%;
  border: 5px solid #007267;
  border-radius: 8px;
  overflow:hidden;
  background: rgb(123,205,144);
  background: linear-gradient(90deg, rgba(123,205,144,1) 6%, rgba(66,215,189,1) 100%); 
  color:#20252b;
//   margin-bottom: 16px;
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
  // color:white;
  margin:0;
  font-size: 30px;
  margin-bottom: 8px;
  border-bottom: 2px solid #007267; 
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
  background: rgb(141,231,164);
  background: linear-gradient(45deg, rgba(141,231,164,0.35) 6%, rgba(61,228,199,0.35) 100%); 
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
  background: rgb(141,231,164);
  background: linear-gradient(45deg, rgba(141,231,164,0.35) 6%, rgba(61,228,199,0.35) 100%); 
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
//   overflow: hidden;
background-color:red;
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
const ExperienceCard = ({color1, color2, heading, jobName, dateLine, descriptionList, skillList}) => {
  return (
    <CardContainer>
      <ContentContainer>
        <Heading>{heading}</Heading>
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
