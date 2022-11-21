import React from 'react'
import styled from 'styled-components'
import { Routes, route, link, Route } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { Home } from './Home'
import About from './About'
import Sidebar from '../Components/Sidebar'
import Person from './Person'
import Props from './Props'


const Container = styled.div`
display: flex;
`;

const Wrapper = styled.div
`
    flex: 4;
    justify-content: center;
  `;
const SideBar = styled.div`
    flex: 1;
`;

const Pages = () => {
  return (
    <Container>
          <SideBar>
            <Sidebar/>
        </SideBar>
        <Wrapper>
        <Routes>
            <Route path='/'/>
            <Route index element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/props' element={<Props/>}/>
        </Routes>
        </Wrapper>

    </Container>
  )
}

export default Pages
