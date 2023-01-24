import React from 'react'
import { HeroContainer, HeroContent, HeroH1, HeroP, HeroBtnWrapper, EmailLink } from './HeroElements'

function Hero (){
  return (
    <HeroContainer id='home'>
      <HeroContent>
        <HeroH1> Hey, I'm Connor Kendall</HeroH1>
        <HeroP>This site is my online portfolio created to showcase my skills. 
          Have a look around and don't hesitate to send me an email to discuss any 
          opportunities!</HeroP>
        <HeroBtnWrapper>
          <EmailLink href="images/Connor_Kendall_Resume.pdf" download="Connor_Kendall_Resume.pdf">
            Download My Resume
          </EmailLink>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
