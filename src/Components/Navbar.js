import React from 'react';
import styled from 'styled-components';
import { IoHomeOutline } from 'react-icons/io';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBookHeart } from 'react-icons/bi';
import { AiOutlineExperiment } from 'react-icons/ai';
import { BiMessageRoundedDetail } from 'react-icons/bi';

const Navbar = () => (
  <Nav>
    <a href="#home"><IoHomeOutline /></a>
    <a href="#about"><AiOutlineUser /></a>
    <a href="#skills"><BiBookHeart /></a>
    <a href="#projects"><AiOutlineExperiment /></a>
    <a href="#contact"><BiMessageRoundedDetail /></a>
  </Nav>
);

const Nav = styled.nav``;

export default Navbar;
