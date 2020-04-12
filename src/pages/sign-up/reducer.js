import cloneDeep from 'lodash/cloneDeep';

const initState = {
  dataForm: {
    login: '',
    firstName:'',
    lastName: '',
    password: '',
    email: ''
  }, 
  errors: {
    login: '',
    firstName:'',
    lastName: '',
    password: '',
    email: ''
  }
};

function merge(state, someObject) {
  const clonnedState = cloneDeep(state);

  return Object.assign(clonnedState, someObject);
}
function mapErrorFromServer(errorFromServer){
    const errorCode = Object.keys(errorFromServer)[0];
    switch (errorCode){
      case 'isRequired':
        return 'Обязательно для заполнения';
      case 'unique': //такой приходит только на логин
        return 'Логин уже занят';
      default:
        return errorCode;
    }
}

function getFormErrors(payload){
  // login: {isRequired: true}
  // password: .///
  const errorKeys = Object.keys(payload);
  const errors = errorKeys.reduce(function(result, errorKey) {
    const errorFromServer = payload[errorKey];

    result[errorKey]= mapErrorFromServer(errorFromServer);
    return result;
  }, {});

  return errors;
}

export default function signUpReducer(state = initState, action) {
  switch (action.type) {
    case 'SIGN-UP_CHANGE_DATA_FORM':
      return merge(state, {
        dataForm: {
          ...state.dataForm,
          [action.payload.fieldId]: action.payload.value
        }
      });
      case 'SIGN-UP_CHECK_LOGIN_SUCCESS':
      return {
        ...state, 
        errors:{
          ...state.errors,
          login: action.payload.exists ? 'Логин занят' : ''
        }
      }
      case 'SIGN-UP_FAIL':
        return {
          ...state, 
          errors:  getFormErrors(action.payload)}
        
    default:
      return state;
  }
}
