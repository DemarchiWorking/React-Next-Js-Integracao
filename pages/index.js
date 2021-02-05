import styled, { createGlobalStyle } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';
import Footer from '../src/componentes/Footer';
import WidgetContainer from '../src/componentes/WidgetContainer';
import Widget from '../src/componentes/Widget';
import { useRouter } from 'next/router'; // adicionar rota
import { func } from 'prop-types';


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

`;
export default function Home(props) {
  
  function redirecionaLogin(){
    console.log('Encaminha Login');
    router.push(`/login`)
  }
  function redirecionaRegistro(){
    console.log('Encaminha Registro');
    router.push(`/register`)
  }
             
  const router = useRouter();
  console.log('props da pagina', props);
  return (
    <div>
      <script src="js/reactjs/main.js" type="text/babel" />
      <script type="text/jsx" />
      
      <Head> 
      // adicionar 
      </Head>
      
      <WidgetContainer>
      <Widget>
                 <button onClick={redirecionaLogin}>Login</button>       <button onClick={redirecionaRegistro}>Registro</button>  
           
          <Widget.Header>
            <h1> Código Livre</h1> 
          </Widget.Header>
          
          <Footer></Footer>
      </Widget>
      
      </WidgetContainer>
      </div>
  );
}

export async function getStaticProps() {
  console.log('Rodando no server !');

  const retornoDaAPIInicial = await fetch('http://localhost:3000/pedidos');
  const retornoDaAPI = await retornoDaAPIInicial.json();

  return {
    props: {
      dadoViaStaticProps: 'Index: . dado simples via adereços estáticos (static props)',
      dadosDoGit: retornoDaAPI,
    },
  };
}
