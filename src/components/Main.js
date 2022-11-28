import React from 'react'
import { StyledMain } from './styles/Main.styled'
import Left from './Left'
import Right from './Right'
import Logo from './Logo'

const Main = () => {
  return (
    <StyledMain>
        <Logo/>
        <div className='container'>
          <Left/>
          <Right/>
        </div>
    </StyledMain>
  );
}

export default Main