import cloneDeep from 'lodash/cloneDeep';

const initState={
    data: null,
    isShowModal: false,
    passwordForm: {
        currentPassword: '',
        newPassword: ''
    },
    errors: {
        currentPassword: '',
        newPassword: ''
    },
    isChangedPassword: false,
    test: ''
}

function merge(state, someObject) {
    const clonnedState = cloneDeep(state);
  
    return Object.assign(clonnedState, someObject);
  }

  function mapErrorFromServer(errorCode){
     switch (errorCode){
      case 'isRequired':
        return 'Обязательно для заполнения';
      case 'minLength': 
        return 'Минимум 3 символа';
      default:
        return errorCode;
    }
}

function getFormErrors(payload){

    const errorKey = Object.keys(payload)[0];
    return mapErrorFromServer(errorKey);
   
}

function test(){}

export default function myPageReducer(state = initState, action){
    switch(action.type){
        case 'MY_PAGE_GET_DATA_SUCCESS':
            return {
                ...state,
                data: action.payload
            };
        case 'MY_PAGE_IS_SHOW_MODAL':
            return {
                ...state,
                isShowModal: !action.payload
            };
        case 'MY_PAGE_CHANGE_DATA_FORM':
            return merge(state, {
                passwordForm: {
                    ...state.passwordForm,
                    [action.payload.fieldId]: action.payload.value
                },
                errors: {
                    currentPassword: '',
                    newPassword: ''
                },
                isChangedPassword: false
            });
            case 'MY_PAGE_CHANGE_USER_DATA_SUCCESS':
                return {
                    ...state,
                    isChangedPassword: true,
                    passwordForm:{
                        currentPassword: '',
                        newPassword: ''
                    },
                    
                };
            case 'MY_PAGE_CHANGE_USER_DATA_FAIL':
                return action.payload.error ?
                {
                    ...state,
                    errors:{
                        currentPassword: 'Пароль не совпадает'
                    },
                }:
                {
                    ...state,
                    errors:  {
                        currentPassword: action.payload.currentPassword ? getFormErrors(action.payload.currentPassword):'',
                        newPassword: action.payload.newPassword ? getFormErrors(action.payload.newPassword): ''
                    },

                };       
        default:
            return state;
        
    }

}
