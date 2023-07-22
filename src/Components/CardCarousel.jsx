import React from 'react';
import { useSnapCarousel } from 'react-snap-carousel';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

const CarouselContainer = styled.div`
  position: relative;
//   width: 50%;
  width: 50rem;
  height: 100%;
//   overflow: hidden;
`;

const CarouselList = styled.ul`
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  padding: 10px;
  margin: 0;
  list-style: none;
  -webkit-overflow-scrolling: touch; /* Enables smooth scrolling on iOS devices */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, and Opera */
  }
`;

const Button = styled.button`
  position: absolute;
  top: 45%; 
  font-size: 20pt;
  font-family: 'Concert One';
  color: #262729;
  background-color:transparent;
  box-shadow: 1px 1px 0px #000814;
  border:thin solid black;
  border-radius:4px;
  font-weight:bold;
  width:50px;
  height:50px;
  padding-bottom:5px;
  transition: box-shadow .25s ease-in-out, transform 0.3s ease-in-out;
  ${(props) => (props.left ? 'left: 0px;' : 'right: 10px;')}

  &:hover {
    background-color:rgb(240, 248, 255, .2);
    transform: translate(-5%, -5%);
    // box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.3);
    box-shadow: 5px 5px 0px #000814;
  }
`;

const PositionIndicator = styled.div`
  font-family: 'Abril Fatface';
  font-size:14pt;
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
`;

const CardCarousel = ({ cardData }) => {
  const { scrollRef, pages, activePageIndex, next, prev, goTo } = useSnapCarousel();

  return (
    <CarouselContainer>
      <CarouselList ref={scrollRef}>
        {cardData.map((card, i) => (
          <li
            style={{
              minWidth: '100%',
              flexShrink: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            key={i}
          >
            <ProjectCard {...card} />
          </li>
        ))}
      </CarouselList>
      <Button left onClick={() => prev()}>{'<'}</Button>
      <Button onClick={() => next()}>{'>'}</Button>
      <PositionIndicator>
        {activePageIndex + 1} / {pages.length}
      </PositionIndicator>
    </CarouselContainer>
  );
};

export default CardCarousel;