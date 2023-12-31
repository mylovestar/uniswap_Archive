import React, { useRef } from 'react'
// import { BookOpen, Code, Info, MessageCircle } from 'react-feather'
import {  MessageCircle,Linkedin ,Facebook} from 'react-feather'
import styled from 'styled-components'
import { ReactComponent as MenuIcon } from '../../assets/images/menu.svg'
// import { useActiveWeb3React } from '../../hooks'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import { ApplicationModal } from '../../state/application/actions'
import { useModalOpen, useToggleModal } from '../../state/application/hooks'

import { ExternalLink } from '../../theme'
// import { ButtonPrimary } from '../Button'

const StyledMenuIcon = styled(MenuIcon)`
  path {
    stroke: ${({ theme }) => theme.text1};
  }
`

const StyledMenuButton = styled.button`
  // width: 100%;
  // height: 100%;
  border: 1px solid #ff9f93;
  box-shadow: rgb(234 190 194) 0px 0px 5px, rgb(234 201 203) 0px 0px 7px;
  background-color: transparent;
  margin: 0;
  padding: 0;
  height: 45px;
  // background-color: ${({ theme }) => theme.bg3};
  // background-color: ${({ theme }) => '#444C59'};

  padding: 0.15rem 0.5rem;
  border-radius: 0.5rem;

  :hover,
  :focus {
    cursor: pointer;
    outline: none;
    border: 1px solid #d83c79;
    box-shadow: rgb(234 190 194) 0px 0px 5px, rgb(234 201 203) 0px 0px 7px;
    // background-color: ${({ theme }) => theme.bg4};
    // background-color: ${({ theme }) => '#444C59'};
  }

  svg {
    margin-top: 2px;
  }
`

const StyledMenu = styled.div`
  margin-left: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
`

const MenuFlyout = styled.span`
  min-width: 9.525rem;
  background-color: transparent;
  border: 1px solid #d83c79;
  box-shadow: rgb(234 190 194) 0px 0px 5px, rgb(234 201 203) 0px 0px 7px;
  border-radius: 8px;
  padding: 0.1rem;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  position: absolute;
  top: 4rem;
  right: 0rem;
  z-index: 100;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    top: -9.25rem;
  `};
`

const MenuItem = styled(ExternalLink)`
  flex: 1;
  padding: 0.5rem 0.5rem;
  color: ${({ theme }) => theme.text2};
  :hover {
    color: ${({ theme }) => theme.text1};
    cursor: pointer;
    text-decoration: none;
  }
  > svg {
    margin-right: 8px;
  }
`

// const CODE_LINK = 'https://github.com/Uniswap/uniswap-interface'

export default function Menu() {
  // const { account } = useActiveWeb3React()

  const node = useRef<HTMLDivElement>()
  const open = useModalOpen(ApplicationModal.MENU)
  const toggle = useToggleModal(ApplicationModal.MENU)
  useOnClickOutside(node, open ? toggle : undefined)
  // const openClaimModal = useToggleModal(ApplicationModal.ADDRESS_CLAIM)

  return (
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30451
    <StyledMenu ref={node as any}>
      <StyledMenuButton onClick={toggle}>
        <StyledMenuIcon />
      </StyledMenuButton>

      {open && (
        <MenuFlyout>
          {/* <MenuItem id="link" href="https://www.autonio.foundation/about">
            <Info size={14} />
            About
          </MenuItem> */}
          {/* <MenuItem id="link" href="https://www.autonio.foundation/#docs">
            <BookOpen size={14} />
            Docs
          </MenuItem> */}
          {/* <MenuItem id="link" href="https://join.skype.com/invite/bcNCS9UXLQp7">
            <Code size={14} />
            Skype
          </MenuItem> */}
          <MenuItem id="link" href="https://t.me/+KIX0mjCIKJthM2Ix">
            <MessageCircle size={14} />
            Telegram
          </MenuItem>
          {/* <MenuItem id="link" href="https://Twitter.com/">
            <Twitter size={14} />
            Twitter
          </MenuItem> */}
          {/* <MenuItem id="link" href="https://discord.com/invite/">
            <BookOpen size={14} />
            Discord
          </MenuItem> */}
          {/* <MenuItem id="link" href="https://github.com/">
            <Code size={14} />
            GitHub
          </MenuItem> */}
          <MenuItem id="link" href="https://www.linkedin.com/company/von-base-enterprises/">
            <Linkedin size={14} />
            LinkedIn
          </MenuItem>
          <MenuItem id="link" href="https://www.facebook.com/n/?groups%2Finvite_link%2F&invite_link_id=1045659566041024&nonce=HJthUKkD&aref=1651614600494921&medium=email&mid=HMTY1MTYxMzM2NTkyNzAzMTpzdXBwb3J0QHZvbmJhc2UuY29tOjE3MTIy&n_m=support%40vonbase.com">
            <Facebook size={14} />
            FaceBook
          </MenuItem>

          
          {/* {account && (
            <ButtonPrimary  onClick={openClaimModal} padding="8px 16px" width="100%" borderRadius="12px" mt="0.5rem">
              Claim SPYRIT
            </ButtonPrimary>
          )} */}
        </MenuFlyout>
      )}
    </StyledMenu>
  )
}
