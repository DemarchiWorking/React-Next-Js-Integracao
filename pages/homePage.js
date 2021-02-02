import React from 'react';
//import Foto from '../photos/icon.png'
//import { useRouter } from 'next/router'; // adicionar rota
import WidgetContainer from '../src/componentes/WidgetContainer';
import Widget from '../src/componentes/Widget';
import db from '../db.json';

function LoadingScreen() {
    return (   
        <div>
            <Widget>
                <Widget.Header>
                 { db.questoes.home.carregandoTitulo }
                </Widget.Header>
                <Widget.Content>
                    [Desafio do Loading]
                        <img
                            alt="Descricao"
                            style={{
                                width: '100%',
                                height: '150px',
                                objectFit: 'cover',
                            }}
                            src="https://s2.glbimg.com/VJVCcMAqTPFgb2iIgGQ07l-B80E=/0x0:3000x2704/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2018/t/F/yPSiQtSgAkC8aFiXr2bA/huji.jpg"/>
                </Widget.Content>
            </Widget>
        </div>
            );
}
export default function HomePage(){
    console.log('Perguntas', db.questoes.length)
    return (
        <div>
            <WidgetContainer>
                <Widget>
                <h2>Pagina de Home</h2>
               {/*<img src="../photos/icon.png"></img> */} 
               </Widget><LoadingScreen/>
            </WidgetContainer>    
        </div>
    )}