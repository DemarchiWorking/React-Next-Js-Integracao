import styled from 'styled-components';
import React from "react";
import { connect } from 'react-redux';

const Footer = ({ activeModule, activeLesson }) => (
    <div>
      <strong> Module {activeModule.title} </strong>
      <span> Aula {activeLesson.title } </span>
    </div>
);
export default connect( state => ({
  activeModule: state.course.activeModule,
  activeLesson: state.course.activeLesson,
}))(Footer);

/*
export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      TEST
    </FooterWrapper>
  );
}
*/