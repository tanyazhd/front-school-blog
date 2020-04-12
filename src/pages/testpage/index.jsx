import React, {Component} from 'react';
import Modal from 'src/components/modal';


 class TestPage extends Component{
    state = { // это должно быть в сторе
        isShowModal: false
      };
    onClick = () => {
        this.setState({
          isShowModal: !this.state.isShowModal
        })
      };
    render(){
        const {isShowModal } = this.state;
        return(
            <div>Test
                <button onClick={this.onClick}>Open</button>
                {
                    isShowModal && <Modal closeModal={this.onClick}/>
                }
            </div>
            
        )
    }
}
export default TestPage;
 
