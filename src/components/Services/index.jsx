import React from 'react'
import {
  ServicesContainer, 
  ServicesH1, 
  ServicesWrapper, 
  ServicesCard, 
  ServicesIcon, 
  ServicesH2, 
  ServicesP
} from './ServiceElements'

const Services = () => {
  return (
    <ServicesContainer id='projects'>
      <ServicesH1>My Projects!</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src="/images/Portrait3.jpg"/>
          <ServicesH2>Eb Labs</ServicesH2>
          <ServicesP>ebLabs is a a web-based application 
            that allows users to create and interact with resources</ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src="/images/Portrait3.jpg"/>
          <ServicesH2>Cobalt Hardware</ServicesH2>
          <ServicesP>Cobalt Hardware is a mock hardware store website to 
            showcase React elements and Rest API</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src="/images/Portrait3.jpg"/>
          <ServicesH2>ICS4U Website</ServicesH2>
          <ServicesP>ICS4U site is a web-based application to showcase coursework</ServicesP>
        </ServicesCard>
        {/* <ServicesCard>
          <ServicesIcon src="/images/Portrait3.jpg"/>
          <ServicesH2>Robobug</ServicesH2>
          <ServicesP>Robobug is a Platformer game designed using PHP and Javascript</ServicesP>
        </ServicesCard> */}
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
