
const INITIAL_STATE =  {
    activeLesson: {},
    activeModule: {},
    modules: [
        {
          id: 1, 
          title: 'iniciando 1', 
          lessons: [
            { id: 1, title: 'Registrando 1'},
            { id: 2, title: 'Registrando 2'},
            { id: 3, title: 'Registrando 3'}
          ],
        },
        {
          id: 2, 
          title: 'login', 
          lessons: [
            { id: 3, title: 'login'},
            { id: 4, title: 'senha'}
          ]
        }
      ]
};
            // estado anterior // action como segundo parametro
export default function course(state = INITIAL_STATE, action ){    // preencher esse estado com o estado inicial da aplicação 
    console.log(action);

    if(action.type == 'TOGGLE_LESSON'){
        // pega o estado que já existe! e sobrepõe o parametro pelo valor 
        return { ...state, 
                 activeLesson: action.lesson, 
                 activeModule: action.module 
                };

    }
    return state;
}
