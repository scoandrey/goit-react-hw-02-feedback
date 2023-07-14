import React from 'react';

const Section = props => (
  <>
    <h3>{props.title}</h3>
    {props.children}
  </>
);

export default Section;
