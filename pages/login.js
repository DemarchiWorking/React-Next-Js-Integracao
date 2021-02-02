import React from 'react';
import { useRouter } from 'next/router'; // adicionar rota
import Input from '../src/componentes/Input'; //
import Button from '../src/componentes/Button'; //

export default function LoginPage(){
    const router = useRouter();
    const [login, setLogin] = React.useState('');    // estado inicial do input 
    const [senha, setSenha] = React.useState('');    // imput senha 

    console.log('retorno do use state', login, setLogin); // chamar a funcao setLogin quando for chamado a mudanca de estado

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
                        //login = infosDoEvento.target.value;     // adiciona a variavel login o valor do input
                        placeholder="Digite seu Login"
                        value={login}
                        
                        />

                <Input 
                    senha="senhaDoUsuario"
                    onChange={ (infosDoEvento) => setSenha(infosDoEvento.target.value)}
                        //login = infosDoEvento.target.value;     // adiciona a variavel login o valor do input
                        placeholder="Digite sua Senha"
                        value={senha}
                        
                        />


                <Button type="submit" disabled={login.length === 0}> 
                {/* Se o campo login não tiver nenhum caracter no input { buttao = disable } */} 

                    Entrar  {login}
                </Button>
            </form>    
        </div>
    )
}