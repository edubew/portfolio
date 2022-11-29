import React from 'react';
import styled from 'styled-components';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBookHeart } from 'react-icons/bi';
import { AiOutlineExperiment } from 'react-icons/ai';
import { BiMessageRoundedDetail } from 'react-icons/bi';

const Navbar = () => (
  <Nav>
    <a href="#home">
      <AiOutlineHome />
    </a>
    <a href="#about">
      <AiOutlineUser />
    </a>
    <a href="#skills">
      <BiBookHeart />
    </a>
    <a href="#projects">
      <AiOutlineExperiment />
    </a>
    <a href="#contact">
      <BiMessageRoundedDetail />
    </a>
  </Nav>
);

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
    background: rgba(0, 0, 0, 0.5);
  }
  &:active {
    background: var(--color-bg);
    color: var(--color-white);
  }
}
`;

export default Navbar;
