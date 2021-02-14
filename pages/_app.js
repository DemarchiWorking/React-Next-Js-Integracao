
import React, { Component } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import db from '../db.json';
import { Provider } from 'react-redux'; 
import store from '../store_estado';

import Cabecalho from '../src/componentes/aPRINCIPAIS/Cabecalho';
import Footer from '../src/componentes/aPRINCIPAIS/Foot';


const { theme } = db;
const GlobalStyle = createGlobalStyle`
  * {box-sizing: border-box; }
  body {
    margin: 0;
    padding: 0;/* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;// Deixa branco no começo
    }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;}`;


class App extends Component {
    render(){
      return (
        <div className="App">
        <Provider store={store}>
          <Cabecalho/>  
          <Footer/>
        </Provider>
        </div>
      )
    }
}
export default App;



//this.state = {
 // storeState: store.getState()
//}


/*
export default function App({ Component, pageProps }) {
  return (
    <>
        <Provider >
        <ThemeProvider theme={theme}><Cabecalho></Cabecalho>
        
        <Component {...pageProps} />
        </ThemeProvider><Cabecalho></Cabecalho>
        </Provider>
    
    </>
  );
}
*/