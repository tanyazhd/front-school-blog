import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom'; 
import * as Actions from './actions.js';
import Header from '../components/header/index';
import SignIn from '../pages/sign-in/index';
import SignUp from '../pages/sign-up/index';
import About from '../pages/about/index';
import NewPost from '../pages/new-post/index';
import MainPage from '../pages/main';
import TestPage from '../pages/testpage';
import MyPage from '../pages/my-page';

import Post from '../pages/post';
import './style.css';
class App extends Component {
  componentDidMount(){ //приложение только что появилось на странице
    this.props.auth();
  }
  render() {
    return (
   
      // <> - фрагмент
      <>
        <Header user={this.props.user} signOut={this.props.signOut} />
        <Switch>
        <Route path='/test-page' exact={true} component={TestPage} />
          <Route path='/sign-in' exact={true} component={SignIn} />
            
          <Route path='/sign-up' exact={true} component={SignUp} />
          
          {this.props.user &&  <Route path='/new-post' exact={true} component={NewPost}/>}
         
            
          <Route path='/about' exact={true} component={About}/>
            
          <Route path='/' exact={true} component={MainPage} />

          <Route path='/post/:id' exact={true} component={Post} />

          {this.props.user && <Route path='/my-page/:id' exact={true} component={MyPage} />}
        </Switch>
        
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    counter: state.applicationReducer.counter,
    user: state.applicationReducer.user //добавляем user в пропсы
  });
};

export default connect(mapStateToProps, Actions)(App);
