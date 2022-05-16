import React from 'react'
import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink } from './sidebar.jsx'

const SideBar = ({ toggle, isOpen }) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
          <Icon onClick={toggle}>
            <CloseIcon />
          </Icon>
            <SideBarWrapper>
              <SideBarMenu>
                <SideBarLink to='' onClick={toggle}>
                  Home
                </SideBarLink>
                <SideBarLink to='about' onClick={toggle}>
                  About
                </SideBarLink>
                <SideBarLink to='allprojects' onClick={toggle}>
                  All projects
                </SideBarLink>
                <SideBarLink to='resume' onClick={toggle}>
                  Resume
                </SideBarLink>
                <SideBarLink to='contact' onClick={toggle}>
                  Contact
                </SideBarLink>
              </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar;
