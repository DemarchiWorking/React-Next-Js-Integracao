import React from 'react';
//import Button from '../src/componentes/Button'; //
//import { func } from 'prop-types';
//import Widget from '../src/componentes/Widget';
import FormularioTexto from '../src/componentes/FormularioTexto'
import WidgetContainer from '../src/componentes/WidgetContainer';
import db from '../db.json';
import Carregamento from '../src/componentes/Pequenos/Carregamento';
import {useState} from 'react';
import Input from '../src/componentes/Input';
import Button from '../src/componentes/Button';

import { useRouter } from 'next/router'; // adicionar rota

const banco_dados_register = db.questoes.register;
const estadoTelas = {
  QUIZ: 'QUIZ',
  REGISTERPERFIL: 'REGISTERPERFIL',
  REGISTERPERFIL2: 'REGISTERPERFIL2',
  REGISTERPERFIL3: 'REGISTERPERFIL3',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};  

       

export default function RegistroCredenciais(){
 // const router = useRouter(); // usando a rota register
  const db_registro = banco_dados_register; // Dados vindos da variavel de configuracao
  
  const [estadoTela, setEstadoTela] = React.useState(estadoTelas.REGISTERPERFIL2);
  const [resultados, setResultados] = React.useState([]);     // adicionar aqui o resultado
  const [registroIndex, setIndexRegistroIndex] = React.useState(0);     
  
   const formularioIndex = registroIndex;//qual parte do FORM-Register o usuario está!
   const txtInputs = db_registro[formularioIndex];// quais dados estao nessa parte do FORM
   const totalFormularios = db_registro.length;// informacoes para verificacao de TELA

   const [nome, setNome] = React.useState('Digite seu Nome');
   const [sobrenome, setSobrenome] = React.useState('Digite seu Sobrenome');
   const [telefone, setTelefone] = React.useState('Digite seu Telefone ou use uma rede social');

   const [pais, setPais] = React.useState('');    // estado inicial do input 
   const [cidade, setCidade] = React.useState('');    // imput senha 
   const [cep, setCep] = React.useState('');    // estado inicial do input 
     
   const [email, setEmail] = React.useState('');    // estado inicial do input 
   const [senha, setSenha] = React.useState('');    // imput senha 
   const [reSenha, setReSenha] = React.useState('');    // imput Confirmacao de senha

   

      
      function enviaQuestionario() {
        console.log(' APERTEI O BOTAO ');
        alert(nome+sobrenome);
        setEstadoTela(estadoTelas.REGISTERPERFIL2); 
      }
      function addResultado() { // RODA QUANDO APERTA O BOTAO
        console.log(' APERTEI BOTAO E ACIONEI FUNCAO ADD RESULTADO ! addResultado')
          
      }

      // Componente Formulario 2 
      function RegistroEndereco(){

        return(
          <div>
          <h2>ENDERECO </h2>
          <form onSubmit={ function (infosDoEvento){
              infosDoEvento.preventDefault();
              setEstadoTela(estadoTelas.REGISTERPERFIL3);
              // adicionar rota
            console.log('Fazendo uma submissao com react');
          }}>
  
              <Input 
                  pais="paisDoUsuario"
                  onChange={ (infosDoEvento) => setPais(infosDoEvento.target.value)}
                      //login = infosDoEvento.target.value;     // adiciona a variavel login o valor do input
                      placeholder= {pais}
                      value={pais}     
                      />
              <Input 
                  cidade="CidadeDoUsuario"
                  onChange={ (infosDoEvento) => setCidade(infosDoEvento.target.value)}
                      //login = infosDoEvento.target.value;     // adiciona a variavel login o valor do input
                      placeholder= {cidade}
                      value={cidade}
                      
                      />
  
              <Input 
                  cep="cepDoUsuario"
                  onChange={ (infosDoEvento) => setCep(infosDoEvento.target.value)}
                      //login = infosDoEvento.target.value;     // adiciona a variavel login o valor do input
                      placeholder= {cep}
                      value={cep}
                      
                      />  
                         
              <Button type="submit" disabled={pais.length === 0}> 
              {/* Se o campo login não tiver nenhum caracter no input { buttao = disable } */} 
  
              Próxima  
              </Button>
          </form>    
        </div>
      )
  }

  function RegistroDados(){
    const router = useRouter();


    return(
      <div>
      <h2> DADOS </h2>
      <form onSubmit={ function (infosDoEvento){
          infosDoEvento.preventDefault();
          // adicionar rota
          //              RESPOSTAS
                router.push(`/homePage`)
               
          console.log('Fazendo uma submissao com react');
      }}>


          <Input 
              email="emailDoUsuario"
              onChange={ (infosDoEvento) => setEmail(infosDoEvento.target.value)}
                  //login = infosDoEvento.target.value;     // adiciona a variavel login o valor do input
                  placeholder= 'aa'
                  value={email}
                  
                  />

          <Input 
              senha="senhaDoUsuario"
              onChange={ (infosDoEvento) => setSenha(infosDoEvento.target.value)}
                  //login = infosDoEvento.target.value;     // adiciona a variavel login o valor do input
                  placeholder= 'aa'
                  value={senha}
                  
                  />  

          <Input 
              reSenha="reSenhaDoUsuario"
              onChange={ (infosDoEvento) => setReSenha(infosDoEvento.target.value)}
                  //login = infosDoEvento.target.value;     // adiciona a variavel login o valor do input
                  placeholder= {'aa'}
                  value={reSenha}
                  
                  />  

          <Button type="submit"> 
          {/* Se o campo login não tiver nenhum caracter no input { buttao = disable } */} 

              Cadastrar  
          </Button>
      </form>    
      </div>
  )
}

  console.log('retorno é : ')  // AQUI DA UM CONSOLE LOG NO ESTADO DA TELA AO INICIAR
      
      return (
        <div>
            <h4>Pagina de Credenciais - 11</h4>
              <WidgetContainer>
                {estadoTela === estadoTelas.REGISTERPERFIL && (   // AQUI EU DEFINO QUE MEU COMPONENTE NO ESTADO REGISTERPERFIL, VAI TER ESSE CODIGO REACT ! )
                  <div>
                              <form onSubmit={function (infosDoEvento) {      // quando o form for chamado joque pra pagina um GET 
                              infosDoEvento.preventDefault();
                              enviaQuestionario();
                              console.log('11')
                              setEstadoTela(estadoTelas.REGISTERPERFIL2);
                              }}
                              >
                      <Input 
                        nome="nomeDoUsuario"
                        onChange={ (infosDoEvento) => setNome(infosDoEvento.target.value)}
                        placeholder= {db_registro[0].titulo} // pega do db.conf
                         
                      />

                      <Input 
                        sobrenome="sobrenomeDoUsuario"
                        onChange={ (infosDoEvento) => setSobrenome(infosDoEvento.target.value)}
                        placeholder= { sobrenome } // pega do 
                         
                      />
                      <Input 
                        telefone="telefoneDoUsuario"
                        onChange={ (infosDoEvento) => setTelefone(infosDoEvento.target.value)}
                        placeholder= { telefone } // pega do 
                         
                      />
                      <Button type="submit" onClick={RegistroEndereco}> 
                      Próxima  
                      </Button>
                    
                
                  </form>
                  </div>
                   
                )    
                }

            {estadoTela === estadoTelas.LOADING && <Carregamento></Carregamento>}
            {estadoTela === estadoTelas.REGISTERPERFIL2 && <RegistroEndereco/>}
            {estadoTela === estadoTelas.REGISTERPERFIL3 && <RegistroDados/>}


            
           </WidgetContainer>
          </div>
            )// ALTERAR COMANDO A CIMA PARA DIFERENTES ESTADOS ! 
    
}
   
    



//function FormularioId({
//    questoes,
//   q
//})
