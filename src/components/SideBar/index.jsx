import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements'

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggle}>About Me</SidebarLink>
          <SidebarLink to='experience' onClick={toggle}>Experience</SidebarLink>
          <SidebarLink to='projects' onClick={toggle}>Projects</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
        <SidebarRoute href='mailto:connor101kendall@gmail.com?subject=Website Contact'>Email Me</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
