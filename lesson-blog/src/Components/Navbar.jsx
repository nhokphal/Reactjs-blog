import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';


const Container = styled.div
`
display: flex;
justify-content: center;
gap: 20px;  
`;

const Navbar = () => {
  return (
    <Container>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">about</NavLink>
    </Container>
  )
}

export default Navbar
