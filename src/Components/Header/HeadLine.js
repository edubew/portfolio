import React from "react";
import Cta from "./Cta";
import Socials from "./Socials";
import winnie from "../../assets/winnie.png";
import styled from "styled-components";
import { CgScrollH } from "react-icons/cg";

const HeadLine = () => {
  return (
    <Header className="background">
      <div className="container header__container">
        <div className="profile__image">
          <img src={winnie} alt="profile" />
        </div>
        <div className="name__container">
          <h5>Hello, I'm</h5>
          <h1>Winfred Edube</h1>
          <h5 className="text-light">Fullstack Developer</h5>

          <Cta />
          <Socials />

          <a href="#contact" className="scroll__down">
            <CgScrollH />
            Scroll Down
          </a>
        </div>
      </div>
    </Header>
  );
};

const Header = styled.header`
  height: 100vh;
  padding-top: 7rem;
  overflow: hidden;

  @media screen and (max-width: 1000px) {
    height: 68vh;
  }

  @media screen and (max-width: 600px) {
    height: 100vh;
    padding-top: 3rem;
  }

  .header__container {
    display: flex;
    gap: 2.5rem;
    justify-content: center;
    text-align: center;
    height: 100%;
    position: relative;

    @media screen and (max-width: 600px) {
      flex-direction: column-reverse;
    }
  }

  .name__container {
    padding-top: 4rem;
  }

  .profile__image {
    background: linear-gradient(-1deg, var(--color-primary), transparent);
    width: 22rem;
    height: fit-content;
    overflow: hidden;
    border-radius: 0.4rem;
    left: calc(25% - 11rem);
  }

  .scroll__down {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    right: -4rem;
    top: 15rem;
    transform: rotate(90deg);
    font-weight: 400;
    font-size: 1rem;

    @media screen and (max-width: 600px) {
      display: none;
    }

    @media screen and (max-width: 1000px) {
      display: none;
    }
  }
`;

export default HeadLine;
