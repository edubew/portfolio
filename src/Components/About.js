import React from 'react';
import styled from 'styled-components';
import winnie from '../assets/winnie.png';

const About = () => (
  <Div>
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="my__image">
            <img src={winnie} alt="winnie" />
          </div>
        </div>

        <div className="about__content">
          <p>
            I am an Information Technology and Business graduate with hands-on
            experience in web and application development from previous
            projects. Whilest looking for a job, I am using the time to widen my
            knowledge in software development, and I have enrolled at
            Microverse, a remote software development school that uses
            pair-programming and real world projects to teach development. I am
            looking to work for tech companies with a strong focus and
            sustainability.
          </p>
          <a href="#contact" className="btn btn-primary">Lets Talk</a>
        </div>
      </div>
    </section>
  </Div>
);

const Div = styled.div`
  .about__container {
    display: grid;
    grid-template-columns: 35% 50%;
    gap: 15%;

     @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr;
      gap: 0;
     }
  }

  .about__me {
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 2rem;
    background: linear-gradient(
      45deg,
      transparent,
      var(--color-primary),
      transparent
    );
    display: grid;
    place-items: center;

     @media screen and (max-width: 1000px) {
      width: 50%;
      margin: 2rem auto 4rem;
     }

      @media screen and (max-width: 600px) {
        width: 65%;
        margin: 0 auto 3rem;
      }
  }

  .about__content {
     @media screen and (max-width: 600px) {
      text-align: center;
     }
    p {
      margin: 2rem 0 2.6rem;
      color: var(--color-white);

       @media screen and (max-width: 1000px) {
        margin: 1rem 0 1.5rem;
       }
        @media screen and (max-width: 600px) {
          margin: 1.5rem 0;
        }
    }
  }
`;

export default About;
