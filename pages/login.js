import React from 'react';
import { useRouter } from 'next/router'; // adicionar rota

export default function LoginPage(){
    const router = useRouter();
    const [login, setLogin] = React.useState(''); // estado inicial do input 
    console.log('retorno do use state', login, setLogin); // chamar a funcao setLogin quando for chamado a mudanca de estado

    return (
        <div>
                <h2>Pagina de Login</h2>
            <form onSubmit={ function (infosDoEvento){
                infosDoEvento.preventDefault();
                // adicionar rota
                router.push(`/homePage?login=${login}`)
                console.log('Fazendo uma submissao com react');
            }}>
                <input 
                    onChange={function (infosDoEvento){     // toda vez que o INPUT for alterado 
                        console.log(infosDoEvento.target.value);  // escreva no console LOG
                        // State(Estado)
                        setLogin(infosDoEvento.target.value);
                        //login = infosDoEvento.target.value;     // adiciona a variavel login o valor do input
                    }}
                placeholder="Digite seu Login"/>
                <input placeholder="****"/>
                <button type="submit" disabled={login.length === 0}> {/* Se o campo login não tiver nenhum caracter no input { buttao = disable } */} 
                    Entrar  {login}
                </button>
            </form>    
        </div>
    )
}