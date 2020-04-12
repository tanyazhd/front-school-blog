import { createStore, combineReducers, applyMiddleware } from 'redux';
import {createLogger} from 'redux-logger';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import applicationReducer from 'src/app/reducer';
import signInReducer from 'src/pages/sign-in/reducer';
import signUpReducer from 'src/pages/sign-up/reducer';
import newPostReducer from 'src/pages/new-post/reducer';
import mainReducer from 'src/pages/main/reducer';
import postReducer from 'src/pages/post/reducer';
import myPageReducer from 'src/pages/my-page/reducer';

import {history} from 'src/history';

const logger=createLogger({
    collapsed: true
});

// const middlewares =[
//     logger, 
//     routerMiddleware(history),
// ]

//резульат работы этой функции возвращает middleware

const routerMiddle = routerMiddleware(history);


const createRootReducer =(history)=> combineReducers({
    router: connectRouter(history),
    applicationReducer: applicationReducer,
    signIn: signInReducer,
    signUp: signUpReducer,
    newPost: newPostReducer,
    main: mainReducer,
    post: postReducer,
    myPage: myPageReducer 
});

// вместо этого используем thunk

// function myMiddleware(store){
//     return function(next){//next - передать action следующему middleware
//         return function(action){
//            if(typeof action === 'function'){
//                action(store.dispatch, store.getState);
//            } else{
//             next(action); //последний middleware пережает в стор
//            }
//         }
//     }
// };

const store=createStore(
    createRootReducer(history), 
    applyMiddleware(routerMiddle, logger, thunk)); //сюда мы можем передать только одну функцию, для этого combineReducers

//store.dispatch(); //передаем объекты, единственный способ дать стору понять что что-то произошло
//любой объект - это action

export default store;