import styled from "styled-components";

const QuizAndNavbarWrapper = styled.div`
  display: flex;
  max-width: 1920px;
  margin: auto;
  min-height: 100dvh;
`;

const NavbarWrapper = styled.div`
  width: ${(props) => (props.isNavOpen ? "25%" : "5%")};
  min-width: ${(props) => (props.isNavOpen ? "180px" : "0")};
  position: absolute;
  inset: 0 auto 0 auto;
  transition: all ease-in-out 0.3s;

  @media screen and (min-width: 900px) {
    width: 15%;
    position: static;
  }

  ul {
    height: 100%;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    background-color: #d6d8d9;
    overflow-x: hidden;
    transition: ease-in-out 0.1s;
    /* BCID */
    padding: 0rem;
    opacity: ${(props) => (props.isNavOpen ? "1" : "0")};
    pointer-events: ${(props) => (props.isNavOpen ? "auto" : "none")};
    @media screen and (min-width: 900px) {
      opacity: 1;
    }
  }
  li {
    padding: 1rem;
    margin: 0.1rem 0;
    &:hover {
      background-color: #cccccc;
    }
  }
`;
const ArrowWrapper = styled.div`
  @media screen and (min-width: 900px) {
    display: none;
  }
  position: absolute;
  inset: 0 0 0 auto;
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ArrowIcon = styled.img`
  max-width: 4rem;
  transition: transform ease-in 0.3s;
  /* BCIF */
`;

export { QuizAndNavbarWrapper, NavbarWrapper, ArrowWrapper, ArrowIcon };
