import React from 'react'
import styled from 'styled-components'

export const BodyWrapper = styled.div`
  position: relative;
  max-width: 550px;
  width: 100%;
  background: #000000;
  // background: linear-gradient(90deg,rgb(237 233 234) 0%,rgb(223 206 212) 50%,rgb(227 196 208 / 64%) 100%);
  backdrop-filter: blur(4px) saturate(150%);
  // box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
  //   0px 24px 32px rgba(0, 0, 0, 0.01);
  // box-shadow: #ff9f93 0px 0px 10px, rgb(220 81 136) 0px 0px 15px, #ffbbb0 0px 0px 20px, #ffc7b8 0px 0px 25px, #dbbec9 0px 0px 30px, rgb(0 216 251 / 25%) 0px 0px 45px, rgb(220 81 136) 0px 0px 40px;
  border: 1px solid #FE201F23;
  border-radius: 16px;
  padding: 1rem;
`
//previous comment by furkan
// background: ${({ theme }) => theme.bg1};
/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
