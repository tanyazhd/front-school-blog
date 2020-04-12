import React, {Component} from 'react';
import style from './style.css';

class Modal extends Component{
   
    render(){
        return(
           <div className={style.wrapper}>
                 
               <div className={style.modal}>
                   <div className={style.header}>
                       {
                           this.props.title
                       }
                     <button onClick={this.props.closeModal}>x</button>
                   </div>
              
                   <div className={style.content}>
                       {
                           this.props.content
                       }
                   </div>
               </div>
           </div>
        )
    }
}

export default Modal;