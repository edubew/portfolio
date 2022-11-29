import React from "react";
import styled from "styled-components";
import winnie from "../assets/winnie.png";

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

const Div = styled.div``;

export default About;
