const initState = {
    counter: 0, 
    user: null
  };
  
  export default function appReducer(state = initState, action) {
    switch (action.type) { //пытаемся прочитать type и вернуть новый объект
        case 'SIGN-IN_SUCESS':
        case 'APPLICATION-AUTH':
          return {
            ...state,
            user: action.payload
          };
        case 'APPLICATION-SIGN-OUT':
          return {
            ...state,
            user: null
          };
          
      default:
        return state;
    }
  }