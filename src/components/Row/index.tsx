import styled from 'styled-components'
import { Box } from 'rebass/styled-components'

const Row = styled(Box)<{
  width?: string
  align?: string
  justify?: string
  padding?: string
  border?: string
  borderRadius?: string
}>`
  width: ${({ width }) => width ?? '100%'};
  display: flex;
  padding: 0;
  align-items: ${({ align }) => align ?? 'center'};
  justify-content: ${({ justify }) => justify ?? 'flex-start'};
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
`

export const RowBetween_SwapDetailInfo = styled(Row)`
  border-top: 1px solid rgba(255, 255, 255, 0.12);
`
export const RowBetween = styled(Row)`
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
`

export const RowBetween1 = styled(Row)`
  justify-content: space-between;
  padding-bottom: 5px;
`

export const RowFlat = styled.div`
  display: flex;
  align-items: flex-end;
`

export const Contacts = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 1140px) {
    flex-direction: column;
  }
`

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 490px) {
    justify-content: center;
  }
`

export const Contact = styled.div`
  padding: 40px;
  :hover {
    color: white;
  }
  @media (max-width: 1140px) {
    padding: 5px;
  }
`

export const Socials = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const Socials1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 1440px) {
    display: none;
  }
`

export const Social = styled.div`
  border: 1px solid #FE201F;
  border-radius: 35px; 
  padding: 15px; 
  background-color: rgba(254, 32, 31, 0.23);
  height: 48px;
  margin-right: 15px;
  :hover {
    background-color: rgba(254, 32, 31, 0.3);
  }
`

export const AutoRow = styled(Row)<{ gap?: string; justify?: string }>`
  flex-wrap: wrap;
  margin: ${({ gap }) => gap && `-${gap}`};
  justify-content: ${({ justify }) => justify && justify};

  & > * {
    margin: ${({ gap }) => gap} !important;
  }
`

export const RowFixed = styled(Row)<{ gap?: string; justify?: string }>`
  width: fit-content;
  margin: ${({ gap }) => gap && `-${gap}`};
`

export default Row
