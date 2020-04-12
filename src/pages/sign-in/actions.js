import API from 'src/api';
import { push } from 'connected-react-router';
export const changeFieldAction = ({ fieldId, value }) => ({
    type: 'SIGN-IN_CHANGE_DATA_FORM',
    payload: { fieldId, value } //можно просто заменить на payload. Какие поля приходят, такие и уходят
  });

  //запросы на сервер выполняются в action и называются асинхронными action
export const signInAction = (dataForm)=>{ //на верхнем уровне всегда функция
    return async function (dispatch){ //сюда ссылка на dispatch
      //обработка ошибок
      try{
        dispatch({  type: 'SIGN-IN_REQUEST'}); //

        const response = await API.user.signIn(dataForm);
        dispatch({  type: 'SIGN-IN_SUCESS', payload: response.data });//сделали вход
        dispatch(push('./'));
      } catch (error){
        dispatch({  type: 'SIGN-IN_FAIL'});
      }
      

      // API.user.signIn(dataForm).then( (response)=> { //запрос на сервер
      //     dispatch({  type: 'SIGN_IN_SUCESS', payload: response.data });
      //   },(error)=>{
      //     console.log(error);
      //   });
    }
};
//вызываем action creator
//он возвращает функцию, которая застрянет в middleware, он ее вызовет и передаст сюда ссылку
// на dispatch, далее код выполняется и в dispatch получаем нужный action


// signInAction - acton creator
  // export const signInAction = (dataForm)=>{ //на верхнем уровне всегда функция
  //   API.user.signIn(dataForm).then( (response)=> { //запрос на сервер

  //     dispatch({  type: 'SIGN_IN_SUCESS', payload: response.data });
  //     },(error)=>{
  //         console.log(error);
  //     });//then выполнится когда будет ответ с сервера, action уже задиспатчился в этот момент


  //   return{ //это попадет в dispatch
  //     type: 'SIGN_IN_SUCESS',
  //     payload: ''//так принято именовать данные
  //     //здесь еще нет данных
  //   }
  // };


  
    

