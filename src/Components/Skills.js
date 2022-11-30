import React from 'react';
import styled from 'styled-components';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3Full } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';
import { FaSass } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { FaPhp } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';
import { DiRuby } from 'react-icons/di';
import { FaBootstrap } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { SiLaravel } from 'react-icons/si';
import { SiRubyonrails } from 'react-icons/si';
import { FiTerminal } from 'react-icons/fi';
import { BiGitMerge } from 'react-icons/bi';
import { DiCodepen } from 'react-icons/di';
import { BsGithub } from 'react-icons/bs';

const Skills = () => (
  <Div>
    <section id="skills">
      <h2>My Skills</h2>
      <div className="container skills__container">
        <div className="general languages__container">
          <h3>Languages</h3>
          <div className="skills__content">
            <article className="skills__details">
              <AiFillHtml5 className="skills__icons" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills__details">
              <DiCss3Full className="skills__icons" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills__details">
              <SiJavascript className="skills__icons" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills__details">
              <FaSass className="skills__icons" />
              <div>
                <h4>Sass</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
              <SiTailwindcss className="skills__icons" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills__details">
              <FaPhp className="skills__icons" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills__details">
              <SiMysql className="skills__icons" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills__details">
              <DiRuby className="skills__icons" />
              <div>
                <h4>Ruby</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* frameworks */}
        <div className="general frameworks__container">
          <h3>Frameworks</h3>
          <div className="skills__content">
            <article className="skills__details">
              <FaBootstrap className="skills__icons" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills__details">
              <FaReact className="skills__icons" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills__details">
              <SiLaravel className="skills__icons" />
              <div>
                <h4>Laravel</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills__details">
              <SiRubyonrails className="skills__icons" />
              <div>
                <h4>Rails</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* skills */}
        <div className="general skillset__container">
          <h3>Skills</h3>
          <div className="skills__content">
            <article className="skills__details">
              <BsGithub className="skills__icons" />
              <h4>Github</h4>
            </article>
            <article className="skills__details">
              <FiTerminal className="skills__icons" />
              <h4>Terminal</h4>
            </article>
            <article className="skills__details">
              <BiGitMerge className="skills__icons" />
              <h4>Git</h4>
            </article>
            <article className="skills__details">
              <DiCodepen className="skills__icons" />
              <h4>Codepen</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  </Div>
);

const Div = styled.div`
  .skills__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

     @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr;
     }

     @media screen and (max-width: 600px) {
      gap: 1rem;
     }

    .general {
      background: #00000b;
      padding: 2.4rem;
      border-radius: 1rem;
      border: 1px inset transparent;
      box-shadow: 0 3px 8px var(--color-primary);
      transition: var(--transition);

      &:hover {
        background: transparent;
        border-color: var(--color-primary-variant);
        cursor: pointer;
      }

       @media screen and (max-width: 1000px) {
        width: 80%;
        padding: 2rem;
        margin: 0 auto;
       }

       @media screen and (max-width: 600px) {
        width: 100%;
        padding: 2rem 1rem;
       }
    }

    h3 {
      text-align: center;
      margin: 1rem;
    }
  }

  .skills__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

     @media screen and (max-width: 1000px) {
      padding: 1rem;
     }
  }

  .skills__details {
    display: flex;
    gap: 0.4rem;
  }

  .skills__icons {
    margin-top: 8px;
    color: var(--color-light);
  }
`;

export default Skills;
