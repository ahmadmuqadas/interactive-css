import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import {QuizAndNavbarWrapper, NavbarWrapper, ArrowIcon, ArrowWrapper} from './Styled/StyledQuiz'
import arrowIcon from './Media/right.png'
import whiteArrowIcon from './Media/arrowright.png'

const QuizNavbar = () => {
    const [isNavOpen, setIsnavOpen] = useState(false);

    function handleToggle(){
        setIsnavOpen(prevValue => !prevValue);
    }


  return (
      <QuizAndNavbarWrapper>
         
      <NavbarWrapper isNavOpen={isNavOpen}>
      <ArrowWrapper onClick={handleToggle}>
        <ArrowIcon src={arrowIcon}/>
        </ArrowWrapper>
        <ul>
            <li>Fonts</li>
            <li>Fonts</li>
            <li>Fonts</li>
            <li>Fonts</li>
            <li>Fonts</li>
            <li>Fonts</li>
            <li>Fonts</li>
        </ul>
      </NavbarWrapper>
      <Outlet/>
      </QuizAndNavbarWrapper>

      )
}

export default QuizNavbar