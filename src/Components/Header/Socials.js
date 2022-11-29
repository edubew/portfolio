import React from 'react';
import styled from 'styled-components';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';

const Socials = () => (
    <Div className="header__socials">
      <a
        href="https://www.linkedin.com/in/winfred-edube-9820a422a/"
        target="_blank" rel="noreferrer"
      ><BsLinkedin /></a>
      <a href="https://github.com/edubew" target="_blank" rel="noreferrer"><BsGithub /></a>
      <a href="https://twitter.com/edube_winne" target="_blank" rel="noreferrer"><BsTwitter /></a>
    </Div>
  );

  const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    gap: 1.2rem;
    font-size: 1.5rem;
  `;

export default Socials;
