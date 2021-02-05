import styled, { createGlobalStyle } from 'styled-components';
import db from '../db.json';
import Footer from '../src/componentes/Footer';
import WidgetContainer from '../src/componentes/WidgetContainer';
import Widget from '../src/componentes/Widget';


const GlobalStyle = createGlobalStyle`
    body{
      font-family: sans-serif;
    }
    `;
const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
  opacity: 1;
`;
export default function ConfirmarEmail() {
  return (
    <div>
      <WidgetContainer>
      <Widget>
          <Widget.Header>
            
            <h1> Código Livre</h1> <div class='container'></div>
          </Widget.Header>
          <Widget.Content>
           <p>Logado !</p>
          </Widget.Content>
          <Footer></Footer>
      </Widget>
      </WidgetContainer>
      </div>
  );
}
