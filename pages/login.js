import React from 'react';
import { useRouter } from 'next/router'; // adicionar rota
import Input from '../src/componentes/Input'; //
import Button from '../src/componentes/Button'; //



export default function LoginPage(props){
    const router = useRouter(); // <a href rect>>
    const [login, setLogin] = React.useState('');    // estado inicial do input 
    const [senha, setSenha] = React.useState('');    // imput senha 

    // Envia form para API 
    async function ControleDeAcao(){
      const retornoDaAPIInicial = await fetch('http://localhost:3000/usuarios/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'admn11@gmail.com',
          senha: 'admin1234',
        })
      }).then((response) => {
        return response;
      });
    const retornoDaAPI = await retornoDaAPIInicial.json();
    console.log(retornoDaAPI.toString());
    return {
      props: {
        dadoViaStaticProps: 'Index: . dado simples via adereços estáticos (static props)',
        dadosDoGit: retornoDaAPI
        },
    };
     
    }

  //  console.log('retorno do use state', login, setLogin); // chamar a funcao setLogin quando for chamado a mudanca de estado

  console.log('props da pagina', props);
    return (
        <div>
                <h2>Pagina de Login</h2>
            <form onSubmit={ function (infosDoEvento){
                infosDoEvento.preventDefault();
                // adicionar rota
                router.push(`/homePage?login=${login}?senha=${senha}`)
                console.log('Fazendo uma submissao com react');
            }}>
                <Input 
                    login="loginDoUsuario"
                    onChange={ (infosDoEvento) => setLogin(infosDoEvento.target.value)}
                         placeholder="Digite seu Login"
                        value={login}
                        
                        />

                <Input 
                    senha="senhaDoUsuario"
                    onChange={ (infosDoEvento) => setSenha(infosDoEvento.target.value)}
                        placeholder="Digite sua Senha"
                        value={senha}
                        
                        />


                <Button type="submit" onClick={ControleDeAcao}> 
                    Entrar  {login}
                </Button>
            </form>    
        </div>
    )
}



//export function getStaticProps() {}
  
  /* 
  console.log('LOGIN :Rodando no server !');
  
    
    //req.body.senha
    const retornoDaAPIInicial = await fetch('http://localhost:3000/usuarios/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'admn11@gmail.com',
          senha: 'admin12345',
        })
      }).then((response) => {
          return response;
      });
    const retornoDaAPI = await retornoDaAPIInicial.json();
    console.log(retornoDaAPI.toString());
    return {
      props: {
        dadoViaStaticProps: 'Index: . dado simples via adereços estáticos (static props)',
        dadosDoGit: retornoDaAPI
      },
      
    };
  }


 

 const retornoDaAPIInicial = await fetch('http://localhost:3000/usuarios/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: 'admn11@gmail.com',
      password: 'admin1234',
    })
  }).then((response) => {
      return response;
  });
    */
