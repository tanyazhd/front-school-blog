import React, {Component} from 'react';
import { connect } from 'react-redux'; //на этот момент компонент уже знает что есть store
import { push } from 'connected-react-router';
import PropTypes from 'prop-types';
import Input from 'src/components/input/index';
import * as Actions from './actions'; //все функции оборачиваем в объект, поэтому можем его передать в connect
import API from 'src/api';
import style from "../sign-up/style.css";

 class SignIn extends Component{
    static propTypes = {
        dataForm: PropTypes.object.isRequired,
        changeFieldAction: PropTypes.func.isRequired,
        signInAction: PropTypes.func.isRequired,
      };

      onSubmit=()=>{ 
        //   this.props.push('/');
        const { dataForm } = this.props; //dataform состоит из логина и пароля
        this.props.signInAction(dataForm);
      };

    //   onClick(){
    //       this.props.dispatch(); //dispatch вернули mapDispatchToProps
    //   }
    render(){
       
        return (
            <div  className={style.signUpWrapper}>
            
              
                <div><Input
                  placeholder='Login'
                    id="login"
                    value={this.props.dataForm.login}
                    onChange={this.props.changeFieldAction}
                /></div>
                
                
                <div><Input
                    placeholder='Password'
                    id="password"
                    value={this.props.dataForm.password}
                    onChange={this.props.changeFieldAction}
                 />
                 </div>
                

                 <button className={style.submit} onClick={this.onSubmit}>
                     Login
                 </button>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({ 
    //state лежит в store, connect знает о store потому что мы передали его в провайдер 
    dataForm: state.signIn.dataForm
});
  
 export default connect(mapStateToProps, {
     push,
     ...Actions}
    )(SignIn);


// const createActionIncrease =(data)=>{
//     //вызвали функцию, передали в нее данные, функция создала новый объект,
//     //и вернула его
//     return ({
//         type: 'INCREASE'
//     })
// };
//     function mapDispatchToProps(dispatch){
//         return({
//             dispatch: dispatch, //dispatch появляется в пропсах. Но лучше делать функцией
//             changeState(){ //функция, которая делает dispatch появится в пропсах
//                 dispatch({type: 'CHANGE_STATE'})
//             },
//             createActionIncrease(){ //выше функция
//                 dispatch (createActionIncrease());
//             } 
//             //таким образом mapDispatchToProps будет занимать много места
//         })
//     }
//     export default connect(mapStateToProps, mapDispatchToProps)(SignIn); 
//     //как только мы вызвали здесь mapStateToProps, connect передает туда state
//     //все, что mapStateToProps вернула, она передает в пропсы


// const actions = {
//     increaseAction(){ //все поля объекта являются функциями
//         //пишем их даже для тех, которые не меняются
//         return ({
//             type: 'hHHH'
//         });
//     },
//     decreaseAction(data){
//         return ({
//             type: 'hHHH'
//         });

//     }
// }

//  export default connect(mapStateToProps, actions)(SignIn);
 //когда мы передаем такой объект actions вместо функции, все action creator будут обернуты
 //в одноименную функцию, внутри которого actioncreator будет вызван и результат его работы будет 
 //отправлен в dispatch
//потом в пропсах мы вызываем функцию, но она не оторвана от стора, connect сам обернет ее в dispatch
