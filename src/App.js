import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import HomePage from "./page/homepage/homepages-components";

import ShopPage from './page/shop/shop.component';

import Header from './components/header/header.compound'

import SignInAndSignUpPage from './page/sign-in-and-sign-up/sign-in-and-sign-up.component';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import {connect} from 'react-redux';

import { setCurrentUser } from './redux/user/user.action';


class App extends React.Component {


unsubscribeFromAuth = null;

componentDidMount() {
const {setCurrentUser} = this.props;

this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
  if(userAuth) {
    const userRef = await createUserProfileDocument(userAuth);
    userRef.onSnapshot(Snapshot => {
      setCurrentUser({
          id:Snapshot.id,
          ...Snapshot.data()
        
      });
      console.log(this.state);
    });
    
  }
  setCurrentUser(userAuth);

});
}

componentWillUnmount() {
  this.unsubscribeFromAuth();
}


  render() {
    return (
    <div >
    <Header />
    <Switch>
    <Route  exact path="/" component={HomePage}/>
    <Route  path="/shop" component={ShopPage}/>
    <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
    </Switch>
    </div>
  );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser:user => dispatch(setCurrentUser(user))
})

const mapStateToProps = ({user}) => ({
  currentUser:user.currentUser
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
