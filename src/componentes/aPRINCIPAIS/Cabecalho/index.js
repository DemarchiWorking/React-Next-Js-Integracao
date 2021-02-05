import styled from 'styled-components';
import theme from '../../../../db.json';
import LogoSVG from '../../Logo/index';

// src/components/Footer/index.js
const FooterWrapper = styled.footer`
  background-color: ${ theme.theme.colors.blueGray1 };
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 4px; 
`;

export default function Footer() {
   
    console.log('codigo JS AQUI ! ')
  return (
    //eslint-disable-next-line react/jsx-props-no-spreading
     
    <div><LogoSVG></LogoSVG></div>
    
  );
}


