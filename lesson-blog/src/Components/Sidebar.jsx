import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


const Container = styled.div
`
 margin: 10px;

`;

const Wrapper = styled.div`
 display: flex;

`;


const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
      <NavLink to="/props">Props and State</NavLink>
      </Wrapper>
      <Wrapper>
      <NavLink to="/state">Stateless vs statfull</NavLink>
      </Wrapper>
      <Wrapper>
      <NavLink to="/redux">Redux</NavLink>
      </Wrapper>
    </Container>
  )
}

export default Sidebar