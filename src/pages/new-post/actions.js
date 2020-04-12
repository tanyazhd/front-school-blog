import API from 'src/api';
import {push} from  'connected-react-router';

export const changeFieldAction =({fieldId, value}) =>({
    type: 'NEW-POST_CHANGE_DATA_FORM',
    payload: { fieldId, value }
});

export const createNewPostAction = (data) => {
    console.log("data: ", data);
  return async function(dispatch) {
    try {
      dispatch({ type: 'NEW_POST_CREATE_REQUEST' });
      const response = await API.posts.createNewPost(data);
      dispatch(push('./'));
      dispatch({ type: 'NEW_POST_CREATE_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'NEW_POST_CREATE_FAIL' });
    }
  }
};