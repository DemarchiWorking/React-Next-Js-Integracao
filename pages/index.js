import styled, { createGlobalStyle } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';
import { useRouter } from 'next/router';

// CONFIGURACAO INICIAL COMPONENT INDEX
const GlobalStyle = createGlobalStyle`
    body{
      font-family: sans-serif;
    }
    `;

// const Title = styled.h1` // Menos otimizado
//  font-size: 50px;
//  color: ${({ theme }) => theme.colors.secondary};
// `;

const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
  opacity: 1;
`;
export const BodyContainer = styled.div`
   width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;
  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  color: white;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  
  * {
    margin: 0;
  }
`;

Widget.Content = styled.header` 
  padding: 24px 32px 32px 32px;
  & > *:first-child {
      margin-top: 0;
  } 
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 20px;
  }
  ul{
    list-style: none;
    padding: 0;
  }
`;
export default function Home(props) {
  console.log('props da pagina', props);
  return (
    <div>
      <script src="js/reactjs/main.js" type="text/babel" />
      <script type="text/jsx" />

      <Head />

      <Widget>
        <BodyContainer>
          <Widget.Header>
            <h1> Código Livre</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{props.dadosDoGit.pedidos[0].id_pedidos}</p>
            
            <br/>
           
          </Widget.Content>
        </BodyContainer>
      </Widget>
    </div>
  );
}

export async function getStaticProps() {
  console.log('Rodando no server !');

  const retornoDaAPIInicial = await fetch('http://localhost:3000/pedidos');
  const retornoDaAPI = await retornoDaAPIInicial.json();

  return {
    props: {
      dadoViaStaticProps: 'dado simples via static props',
      dadosDoGit: retornoDaAPI,
    },
  };
}
