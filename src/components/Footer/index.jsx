import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import { 
  FooterContainer, 
  FooterWrap,  
  SocialIconLink, 
  SocialIcons, 
 } from './FooterElements'


const Footer = () => {
  

  return (
    <FooterContainer>
      <FooterWrap>
            <SocialIcons>
              <SocialIconLink href='//www.instagram.com/connor_kendall101/' target='_blank' arial-label='Instagram'>
                <FaInstagram/>
              </SocialIconLink>
              <SocialIconLink href='https://github.com/connor101kendall' target='_blank' arial-label='GitHub'>
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink href='https://www.linkedin.com/in/connor-m-kendall/' target='_blank' arial-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
