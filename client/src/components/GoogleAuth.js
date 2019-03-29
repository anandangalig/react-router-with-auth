import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '104564463257-r9kqcd5r6tni7jq5ea0lssdgh1670u22.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (signInStatusFromGoogle) => {
        if (signInStatusFromGoogle){
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }

    signInClick = () => {
        this.auth.signIn();
    }
    signOutClick = () => {
        this.auth.signOut();
    }

    renderLoginButton(){        
        if(this.props.signInStatus){
            return(<button onClick={this.signOutClick} className='ui red google button'>Sign out</button>);
        }

        return(<button onClick={this.signInClick} className='ui red google button'>Sign in</button>);
    }

    render(){
        return(<div>{this.renderLoginButton()}</div>);
    }
}



const mapStateToProps = (state) => {        
    return {signInStatus: state.signInStatus.isSignedIn}
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);