import API from 'src/api';

export const getUserAction = (id) => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'MY_PAGE_GET_DATA_REQUEST' });
      const response = await API.user.getUserById(id);
      dispatch({ type: 'MY_PAGE_GET_DATA_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'MY_PAGE_GET_DATA_FAIL' });
    }
  }
};

export const isShowModalAction = (isShowModal)=>({
  type: 'MY_PAGE_IS_SHOW_MODAL',
  payload:  isShowModal 
});

export const changeFieldAction = ({ fieldId, value }) => ({
  type: 'MY_PAGE_CHANGE_DATA_FORM',
  payload: { fieldId, value } 
});

export const changePasswordAction = (passwordForm) => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'MY_PAGE_CHANGE_USER_DATA_REQUEST' });
      const response = await API.user.changeUserPassword(passwordForm);

      if(!response.data.error){ //ошибка несовпадающего пароля
        dispatch({ type: 'MY_PAGE_CHANGE_USER_DATA_SUCCESS', payload: response.data });
      } else{
         dispatch({ type: 'MY_PAGE_CHANGE_USER_DATA_FAIL',payload: response.data  });
      }
     
    } catch (error) { //ошибки минимальной длины и нулевой строки
      if (error.response){
        dispatch({type:  'MY_PAGE_CHANGE_USER_DATA_FAIL', payload: error.response.data});
      }
    }
  }
};