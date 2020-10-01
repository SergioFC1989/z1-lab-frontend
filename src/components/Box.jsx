import styled, { css } from 'styled-components'

const Box = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  flex-basis: ${props => props.basis};
  flex-wrap: ${props => props.wrap && 'wrap'};
  justify-content: ${props => props.justify};
  align-content: ${props => props.align};
  background: ${props => props.background};
  margin: ${props => props.margin};
  padding: ${props => props.padding};

  ${props => props.fill && css`
    width: 100vw;
    height: 100vh;
    justify-content: center;
  `};

  ${props => props.layout && css`
    background: white;
    width: 80%;
    height: auto;
  `};

  ${props => props.column && css`
    width: 100%;
    margin-top: 119px;
    margin-bottom: 19px;
    justify-content: space-between;
  `};
  
  ${props => props.card && css`
    background: #F2F2F2;
    width: 50%;
    border-radius: 15px;    
  `};
`
export default Box;