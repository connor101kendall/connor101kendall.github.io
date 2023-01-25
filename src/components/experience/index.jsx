import React from 'react'
import { 
  InfoContainer, 
  InfoWrapper, 
  InfoRow, 
  Column1, 
  Column2, 
  TextWrapper, 
  Heading, 
  Subtitle, 
  ImgWrap,
   Img 
  } from './InfoElements'

const Experience = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, alt, img, primary, dark, dark2 }) => {
  return (
    <>
      <InfoContainer lightBg={true} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={true}>
            <Column1>
              <TextWrapper>
                <Heading lightText={false}>Who am I?</Heading>
                <Subtitle darkText={true}>I'm a Developer, Designer, and Student currently studying
                Biomedical Engineering at the University of Waterloo. <br /><br />I am familar with Modern Web 
                development using React.js and incorporating human factors in the UI/UX experience.<br /><br /> 
                I am super passionate about using design to improve the BioTech and Healthcare fields.
                Every chance I get I try to be the change I'd like to see in the world.</Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt}/>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default Experience
