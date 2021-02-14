import React from "react";
import { connect } from 'react-redux'; 
import * as CourseActions from '../../../../store_estado/actions/course';
import styled from 'styled-components';

import {bindActionCreators} from 'redux';
// Para refatorar o código e diminuir tirar os comentarios com 2 
   

    const Cabecalho = ({ modules, toggleLesson }) =>(  
      <anside>
        {modules.map(module => (
          <div key={module.id}>
             <strong> {module.title}</strong>
             <ul>
             {module.lessons.map(lesson => (
               <li key={lesson.id}> 
               {lesson.title}
            <button onClick={() => toggleLesson(module, lesson) }> Selecionar </button>
              </li>
              ))}
          </ul>
          </div>
              ))}
      </anside>        
  );

const mapStateToProps = state => ({
    modules: state.course.modules
});

const mapDispatchToProps = dispatch => ({
  //bindActionCreators(CourseActions, dispatch);  // 2 COMENTAR AS 2 LINHAS ABAIXO E DESCOMENTAR ESSA PARA REDUZIR O TAMANHO.
  toggleLesson: (module, lesson) =>   // pega parametros
  dispatch(CourseActions.toggleLesson(module, lesson))
})

//recebe o estado e retorna um objeto e as propriedades
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cabecalho);



/*
JEITO SIMPLES DE FAZER A CLASSE 


    const Cabecalho = ({ modules, dispatch }) =>(  
      <anside>
        {modules.map(module => (
          <div key={module.id}>
             <strong> {module.title}</strong>
             <ul>
             {module.lessons.map(lesson => (
               <li key={lesson.id}> 
               {lesson.title}
            <button onClick={() => dispatch(CourseActions.tog ,gleLesson(module, lesson))}> Selecionar </button>
              </li>
              ))}
          </ul>
          </div>
              ))}
      </anside>        
  );

//recebe o estado e retorna um objeto e as propriedades
export default connect(state => ({ modules : state.course.modules}))(Cabecalho);


*/
