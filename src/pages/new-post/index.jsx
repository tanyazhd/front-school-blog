import React, {Component} from 'react';
import { connect } from 'react-redux';
import Input from 'src/components/input/index';
import TextArea from 'src/components/textarea';
import Button from 'src/components/button';
import PropTypes from 'prop-types';
import * as Actions from './actions';
import style from './style.css';
class NewPost extends Component {
    static propTypes = {
        dataForm: PropTypes.object.isRequired,
        changeFieldAction: PropTypes.func.isRequired,
      };
      onSubmit=()=>{ 
        const { dataForm } = this.props; 
        this.props.createNewPostAction(dataForm);
      }; 

      
    render(){
        
        return(
            <div className={style.formPostWrapper}>
               
            
            <div className={style.row}>
            <div>
                Заголовок
            </div>
                <Input 
                    id='title'
                    value={this.props.dataForm.title}
                    onChange={this.props.changeFieldAction}
                    
                />
            </div>
            
            <div className={style.row}>
            <div >
                Контент
            </div>
                <TextArea 
                    id='content'
                    value={this.props.dataForm.content}
                    onChange={this.props.changeFieldAction}
                />
             </div>
            <div className={style.row}>
                {/* <button onClick={this.onSubmit}>Отправить</button> */}
                <Button
                id='submit'
                onClick={this.onSubmit}>Создать</Button>
            </div>
           
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    dataForm: state.newPost.dataForm
});

export default connect(mapStateToProps, Actions)(NewPost);
