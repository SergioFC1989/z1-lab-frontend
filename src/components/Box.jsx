import styled, { css } from 'styled-components'

const Box = styled.div`
  display: flex; 
  flex-direction: ${props => props.direction};
  basis: ${props => props.basis};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  justify-content: ${props => props.justify};
  align-content: ${props => props.align};
  background: ${props => props.background};
  border-radius: ${props => props.radius};
  flex-wrap: ${props => props.wrap && 'wrap'};
  ${props => props.fill && css`
    width: 100vw;
    height: 100vh;
  `};
`
export default Box;