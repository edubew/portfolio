import React from 'react';
import styled from 'styled-components';
import Resume from '../../assets/Resume.docx';

const Cta = () => (
  <Div>
    <div className="cta">
      <a href={Resume} download className="btn">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  </Div>
);

const Div = styled.div`
 .cta {
  margin-top: 2rem;
  display: flex;
  gap: 1.2rem;
  justify-content: center;
 }
`;

export default Cta;
