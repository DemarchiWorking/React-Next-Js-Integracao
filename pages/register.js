import React, { Component } from 'react';

export default class Register extends Component {
  state = {
      modules: [
        {
          id: 1, 
          title: 'iniciando 1', 
          lessons: [
            { id: 1, title: 'aula 11'},
            { id: 1, title: 'aula 22'}
          ],
        },
        {
          id: 2, 
          title: 'mediando 1', 
          lessons: [
            { id: 3, title: 'aula 33'},
            { id: 4, title: 'aula 44'}
          ]
        }
      ]
  };

  render(){
    const { modules } = this.state;

    return (
    <anside>
      { modules.map(module => (
          <div key={ module.id }>
            <strong> { module.title }</strong>
            <ul>
              {module.lessons.map(lesson => (
                <li key={lesson.id}> { lesson.title } </li>
              ))}
            </ul>
          </div>
      ))}
    </anside>
    );
  }


}