import React from 'react';
import { useRouter } from 'next/router'; // adicionar rota

export default function Produtos(){
    return (
        <div>
                <h2>Pagina de Produtos</h2>
            <form onSubmit={ function (infosDoEvento){
                infosDoEvento.preventDefault();
                // adicionar rota
                const router = useRouter();
                router.push(`?`)
                console.log('Fazendo uma submissao com react');
            }}>
                <input placeholder="Digite seu Login"/>
                <input placeholder="****"/>
                <button type="submit">
                    Comprar
                </button>
            </form>    
        </div>
    )
}