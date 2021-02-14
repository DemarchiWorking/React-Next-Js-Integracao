import React from 'react';
import { useRouter } from 'next/router'; // adicionar rota
import Input from '../src/componentes/Input'; //
import Button from '../src/componentes/Button'; //
import db from '../db.json';
import WidgetContainer from '../src/componentes/WidgetContainer'
import { func } from 'prop-types';
import Widget from '../src/componentes/Widget';
import FormularioTexto from '../src/componentes/FormularioTexto'

const banco_dados = db.questoes.register;

// tipar as variaveis






function FormularioWidget({
    questoes,
    formularioIndex,
    totalFormularios,
    onSubmit,
    addResultado,
  }) {
    const [selecioneInfoPerfil, setSelecioneInfoPerfil] = React.useState(undefined);
    const [eUmaPerguntaEnviada, setEUmaPerguntaEnviada] = React.useState(false);
    const questoesId = `questoes__${formularioIndex}`;
    const isCorrect = selecioneInfoPerfil === questoes;
   //const hasAlternativeSelected = selectedAlternative !== undefined;
  
    return (
      <Widget>
        <Widget.Header>
          <h3>
            {`Pergunta ${formularioIndex + 1} de ${totalFormularios}`}
          </h3>
        </Widget.Header>
  
            
        <Widget.Content>
          <h2>
            {questoes.nome}
          </h2>
          <p>
            {questoes.sobrenome}
          </p>
  
          <FormularioTexto
            onSubmit={(infosDoEvento) => {
              infosDoEvento.preventDefault();
              setEUmaPerguntaEnviada(true);
              setTimeout(() => {
                  console.log('CARELHO A RESPOSTA !!!!!!!!!!!!<<<<<<<<>')
                //addResultado(isCorrect);
                onSubmit();
                setEUmaPerguntaEnviada(false);
                setSelecioneInfoPerfil(undefined);
              }, 3 * 1000);
            }}
          >
            {
            // aqui
       
            
            
            questoes.nome.map((dadosRegistro, dadosRegistroIndex) => {
              const dadosRegistroId = `dadosRegistro__${dadosRegistroIndex}`;
              const dadosRegistroStatus = isCorrect ? 'SUCCESS' : 'ERROR';
              return (
                <Widget.Topic
                  as="label"
                  key={dadosRegistroId}
                  htmlFor={dadosRegistroId}
                  data-status={setEUmaPerguntaEnviada && dadosRegistroStatus}
                >
                  <input
                    style={{ display: 'none' }}
                    id='test1'
                    name= 'test2'//{questoesId}
                    onChange={() => setSelecioneInfoPerfil(dadosRegistroIndex)}
                    type="radio"
                  />
                  {dadosRegistro}
                </Widget.Topic>
              );
            })}
  
            {/* <pre>
              {JSON.stringify(question, null, 4)}
            </pre> */}
            <Button type="submit">
              Confirmar
            </Button>
            {setEUmaPerguntaEnviada && isCorrect && <p>Você acertou!</p>}
            {setEUmaPerguntaEnviada && !isCorrect && <p>Você errou!</p>}
          </FormularioTexto>
        </Widget.Content>
      </Widget>
    );
  }


function LoadingWidget() {
    return (
        <Widget>
            <Widget.Header>
                Carregando...
            </Widget.Header>
            <Widget.Content style={{ display: 'flex', justifyContent: 'center' }}>
               
            
                {/*
                 <Lottie
                    width="200px"
                    height="200px"
                    className="lottie-container basic"
                    config={{ animationData: loadingAnimation, loop: true, autoplay: true }}
                />
                
                */}

            </Widget.Content>
        </Widget>
            )
    }


function RegisterWidgetPerfil({ questoes }){
    const router = useRouter();

    const [nome, setNome] = React.useState('');    // estado inicial do input 
    const [sobrenome, setSobrenome] = React.useState('');    // imput senha 
    const [telefone, setTelefone] = React.useState(''); 

    return(
        <form onSubmit={ function (infosDoEvento){
            infosDoEvento.preventDefault();
        // adicionar rota
        console.log(nome+" "+ sobrenome +" " + telefone + " ");



        setNome('tony');
        //setSobrenome('edrd');
        //setTelefone(123);


        // REDIRECIONAMENTO PRA PAGINA HOME
        //router.push(`/homePage?nome=${nome}?sobrenome=${sobrenome}`)
            console.log('Fazendo uma submissao com react');
        }}>
            <Input 
                nome="NomeDoUsuario"
                onChange={ (infosDoEvento) => setNome(infosDoEvento.target.value)}
                    //login = infosDoEvento.target.value;     // adiciona a variavel login o valor do input
                    placeholder= {questoes[0].nome}
                    value={nome}     
                    />
            <Input 
                sobrenome="SobrenomeDoUsuario"
                onChange={ (infosDoEvento) => setSobrenome(infosDoEvento.target.value)}
                    //login = infosDoEvento.target.value;     // adiciona a variavel login o valor do input
                    placeholder= {questoes[0].sobrenome}
                    value= {sobrenome }
                    
                    />
            
            <Input 
                telefone="TelefoneDoUsuario"
                onChange={ (infosDoEvento) => setTelefone(infosDoEvento.target.value)}
                    //login = infosDoEvento.target.value;     // adiciona a variavel login o valor do input
                    placeholder= {questoes[0].telefone}
                    value= { telefone }
                    
                    />
                    
                    <Button type="submit" disabled={nome.length === 0}> 
            {/* Se o campo login não tiver nenhum caracter no input { buttao = disable } */} 

                Próxima  
            </Button>
        </form>    
    )
}

function RegisterWidgetEndereco({ questoes }){
    const router = useRouter();

    const [pais, setPais] = React.useState('');    // estado inicial do input 
    const [cidade, setCidade] = React.useState('');    // imput senha 
    const [cep, setCep] = React.useState('');    // estado inicial do input 

    return(
        <form onSubmit={ function (infosDoEvento){
            infosDoEvento.preventDefault();
            // adicionar rota
            router.push(`/homePage?pais=${pais}?cidade=${cidade}?cep${cep}`)
            console.log('Fazendo uma submissao com react');
        }}>

            <Input 
                pais="paisDoUsuario"
                onChange={ (infosDoEvento) => setPais(infosDoEvento.target.value)}
                    //login = infosDoEvento.target.value;     // adiciona a variavel login o valor do input
                    placeholder= {questoes[1].pais}
                    value={pais}     
                    />
            <Input 
                cidade="CidadeDoUsuario"
                onChange={ (infosDoEvento) => setCidade(infosDoEvento.target.value)}
                    //login = infosDoEvento.target.value;     // adiciona a variavel login o valor do input
                    placeholder= {questoes[1].cidade}
                    value={cidade}
                    
                    />

            <Input 
                cep="cepDoUsuario"
                onChange={ (infosDoEvento) => setCep(infosDoEvento.target.value)}
                    //login = infosDoEvento.target.value;     // adiciona a variavel login o valor do input
                    placeholder= {questoes[1].cep}
                    value={cep}
                    
                    />  
                       
            <Button type="submit" disabled={pais.length === 0}> 
            {/* Se o campo login não tiver nenhum caracter no input { buttao = disable } */} 

            Próxima  
            </Button>
        </form>    
    )
}




function RegisterCredenciais({ questoes }){
    const router = useRouter();
    
    const [email, setEmail] = React.useState('');    // estado inicial do input 
    const [senha, setSenha] = React.useState('');    // imput senha 
    const [reSenha, setReSenha] = React.useState('');    // imput Confirmacao de senha

    function alertando(){
        console.log("1: " + questoes+"\n"+ "2: " + totalFormularios + "\n"+ "3: " +formularioIndex)
    }

    console.log('retorno do use state', email, setEmail); // chamar a funcao setLogin quando for chamado a mudanca de estado
    //console.log("O Banco de dados tem > "+ banco_dados.length + " linhas");
    //
    //questoes,
    //totalFormularios,
    //formularioIndex
    //
    //

    return(
        <form onSubmit={ function (infosDoEvento){
            infosDoEvento.preventDefault();
            // adicionar rota
            //              RESPOSTAS
            router.push(`/homePage?email=${email}?senha=${senha}?reSenha=${reSenha}`)
            console.log('Fazendo uma submissao com react');
        }}>


            <Input 
                email="emailDoUsuario"
                onChange={ (infosDoEvento) => setEmail(infosDoEvento.target.value)}
                    //login = infosDoEvento.target.value;     // adiciona a variavel login o valor do input
                    placeholder= {questoes[2].email}
                    value={email}
                    
                    />

            <Input 
                senha="senhaDoUsuario"
                onChange={ (infosDoEvento) => setSenha(infosDoEvento.target.value)}
                    //login = infosDoEvento.target.value;     // adiciona a variavel login o valor do input
                    placeholder= {questoes[2].senha}
                    value={senha}
                    
                    />  

            <Input 
                reSenha="reSenhaDoUsuario"
                onChange={ (infosDoEvento) => setReSenha(infosDoEvento.target.value)}
                    //login = infosDoEvento.target.value;     // adiciona a variavel login o valor do input
                    placeholder= {questoes[2].reSenha}
                    value={reSenha}
                    
                    />  

            <Button type="submit" disabled={email.length === 0}> 
            {/* Se o campo login não tiver nenhum caracter no input { buttao = disable } */} 

                Cadastrar  
            </Button>
        </form>    
    )
}

const estadoTelas = {
    QUIZ: 'QUIZ',
    LOADING: 'LOADING',
    RESULT: 'RESULT',
  };

export default function RegistroCredenciais(){
    //CADASTRO DE USUARIOS TEXTOS DO INPUT
    const questoesExternas = banco_dados

    // ESTADOS DA TELA 
    const [estadoTela, setEstadoTela] = React.useState(estadoTelas.LOADING);
    const [resultados, setResultados] = React.useState([]);
    const [questaoAtual, setQuestaoAtual] = React.useState(0);
    
    // qual parte do login o usuario se encontra
    const formularioIndex = questaoAtual;
    // qual a questao atual
    const questoes = questoesExternas[formularioIndex];
    // informacoes para verificacao de TELA
    const totalFormularios = questoesExternas.length;
    //const bg = externoBg;  // BG: pegar fundo como parametro do REGISTROCREDENCIAIS()
   
    
   
    function addResultado(resultado) {
        // results.push(result);
        setResultados([
          ...resultados,
          resultado,
        ]);
      }

      React.useEffect(() => {
        // fetch() ...
        setTimeout(() => {
          setEstadoTela(estadoTelas.QUIZ);
        }, 1 * 2000);
      // nasce === didMount
      }, []);

      function enviaQuestionario() {
        const proximaQuestao = formularioIndex + 1;
        if (proximaQuestao < totalFormularios) {
            setQuestaoAtual(proximaQuestao);
        } else {
            setEstadoTela(estadoTelas.RESULT);
        }
      }
    


     return (
        <div>
        <h4>Pagina de Credenciais</h4>
        <WidgetContainer>

        {estadoTela === estadoTelas.QUIZ && (
            <FormularioTexto
            questoes={questoes}
            formularioIndex={formularioIndex}
            totalFormularios={totalFormularios}
            onSubmit={enviaQuestionario}
            addResult={addResultado}
            />
        )}
        
        {estadoTela === estadoTelas.LOADING && <LoadingWidget/>}

        {estadoTela === estadoTelas.RESULT && <ResultWidget resultados={resultados} />}

            <RegisterWidgetPerfil questoes={banco_dados}></RegisterWidgetPerfil>
           {/* <RegisterWidgetEndereco questoes={banco_dados}></RegisterWidgetEndereco> }
           { <RegisterCredenciais questoes={banco_dados}></RegisterCredenciais> */} 
        </WidgetContainer>
        </div>
    )
    
   
   
    

}

//function FormularioId({
//    questoes,
//   q
//})
