import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


const Container = styled.div
`
 margin: 10px;
`;

const Sidebar = () => {
  return (
    <Container>
        <NavLink to="/props">Props and State</NavLink>

    </Container>
  )
}

export default Sidebar