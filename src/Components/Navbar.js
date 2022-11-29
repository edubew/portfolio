import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBookHeart } from 'react-icons/bi';
import { AiOutlineExperiment } from 'react-icons/ai';
import { BiMessageRoundedDetail } from 'react-icons/bi';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <Nav>
      <a
        href="#home"
        onClick={() => setActiveNav('#home')}
        className={activeNav === '#home' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#skills"
        onClick={() => setActiveNav('#skills')}
        className={activeNav === '#skills' ? 'active' : ''}
      >
        <BiBookHeart />
      </a>
      <a
        href="#projects"
        onClick={() => setActiveNav('#projects')}
        className={activeNav === '#projects' ? 'active' : ''}
      >
        <AiOutlineExperiment />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <BiMessageRoundedDetail />
      </a>
    </Nav>
  );
};

const Nav = styled.nav`
  background: rgba(0, 0, 0, 0.3);
  width: max-content;
  display: block;
  padding: 0.7rem 1.7rem;
  z-index: 2;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2rem;
  display: flex;
  gap: 1rem;
  border-radius: 2rem;
  backdrop-filter: blur(15px);

  a {
    background: transparent;
    padding: 1rem;
    border-radius: 50%;
    display: flex;
    color: var(--color-light);
    font-size: 1.5rem;

    &:hover {
      background: rgba(0, 0, 0, 0.4);
      box-shadow: 0 0 15px 4px var(--color-primary);
    }
  }
`;

export default Navbar;
