import React, {Component} from 'react';
import style from './style.css';
import {connect} from 'react-redux';
import * as Actions from './actions';
import Button from 'src/components/button';
import Modal from 'src/components/modal';
import Input from 'src/components/input';


class MyPage extends Component{
    componentDidMount(){
        const { match } = this.props;
        this.props.getUserAction(match.params.id);
    }

    isShowModal = ()=>{
        const { isShowModal } = this.props;
        this.props.isShowModalAction(isShowModal);
    }
    changePassword = ()=>{
        let passwords = this.props.passwordForm;
        this.props.changePasswordAction(passwords);
        
        
    }
    
    render(){
        const { data, isShowModal, passwordForm, isChangedPassword, errors}=this.props;
        const url = 'http://school-blog.ru/images/';
       
        return(
            <div>
            {data
            ? <div className={style.myPageWrapper}>
                <div><img src={url+data.avatar} alt=""/></div>
                
                <div>
                    <div className={style.name}> {data.firstName}&nbsp;{data.lastName} </div>
                        <div>
                        <strong>Имя: </strong>
                    {data.firstName}
                    </div>
                    <div>
                        <strong>Фамилия: </strong>
                        {data.lastName}
                    </div>
                    <div>
                        <strong>Отчество: </strong>
                        {data.patronymic}
                    </div>
                    <div>
                        <strong>Дата регистрации: </strong>
                        {data.registrationDate.substring(0, 10)}
                    </div>
                    <div>
                        <strong>E-mail: </strong>
                        {data.email}
                    </div>
                    <div>
                        <strong>Количество постов: </strong>
                        {data.postsCount}
                    </div>
                    <div>
                        <strong>Количество поставленных лайков: </strong>
                        {data.likesCount}
                    </div>
                    <div>
                        <strong>Количество поставленных дизлайков: </strong>
                        {data.dislikesCount}
                    </div>
                    <Button onClick={this.isShowModal}>Сменить пароль</Button>
                    {
                        isShowModal && 
                        <Modal closeModal={this.isShowModal}
                        title={
                            <div>Сменить пароль для пользователя {data.login}</div>
                        }
                        content={
                            <div>
                               <div>
                                    {
                                        isChangedPassword ? 'Пароль успешно изменен':''
                                    }
                                </div>
                              
                                <Input
                                    placeholder='Current Password'
                                    id="currentPassword"
                                    value={this.props.passwordForm.currentPassword}
                                    onChange={this.props.changeFieldAction}
                                   
                                    error={errors.currentPassword}
                                /> 
                                <Input
                                    placeholder='New Password'
                                    id="newPassword"
                                    value={this.props.passwordForm.newPassword}
                                    onChange={this.props.changeFieldAction}
                                    
                                    error={errors.newPassword}
                                   
                                /> 
                                <Button onClick={this.changePassword}>Сменить пароль</Button>
                                
                            </div>
                       
                        }
                        />
                    }
                    
           
                </div>
            </div>
            : <div>loading</div>}
            </div>
            
        )
    }
}

function mapStateToProps(state){
    return{
        data: state.myPage.data,
        isShowModal: state.myPage.isShowModal,
        passwordForm: state.myPage.passwordForm,
        isChangedPassword: state.myPage.isChangedPassword,
        errors: state.myPage.errors,
    }
}
export default connect(mapStateToProps, Actions)(MyPage);