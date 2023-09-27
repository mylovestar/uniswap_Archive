import React from 'react'
import styled from 'styled-components'
// import Settings from '../Settings'
import { RowBetween } from '../Row'
import { TYPE } from '../../theme'

const StyledSwapHeader = styled.div`
  padding: 12px 1.5rem 0px 1.5rem;
  margin-bottom: -4px;
  width: 100%;
  // max-width: 420px;
  color: ${({ theme }) => theme.text2};
`

export default function SwapHeader() {
  return (
    <StyledSwapHeader>
      <RowBetween>
        <TYPE.swapHeader>
          <TYPE.white fontWeight={500} fontSize={'24px'} padding={'10px 0'} fontFamily="Chinese Rocks Rg">SWAP TOKENS</TYPE.white>
          <TYPE.gray fontWeight={400} fontFamily={'Poppins'}>Trade tokens in an instant</TYPE.gray>
        </TYPE.swapHeader>
        {/* <Settings /> */}
        <img src="/images/logo.svg" width="53.439" height="51.637" alt="" />
      </RowBetween>
    </StyledSwapHeader>
  )
}
