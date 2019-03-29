import React from 'react';

class GoogleAuth extends React.Component {
    state = { isSignedIn: null }

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '104564463257-r9kqcd5r6tni7jq5ea0lssdgh1670u22.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    }

    signIn = () => {
        this.auth.signIn();
    }
    signOut = () => {
        this.auth.signOut();
    }

    renderLoginButton(){
        if(this.state.isSignedIn){
            return(<button onClick={this.signOut} className='ui red google button'>Sign out</button>);
        }

        return(<button onClick={this.signIn} className='ui red google button'>Sign in</button>);
    }

    render(){
        return(<div>{this.renderLoginButton()}</div>);
    }
}

export default GoogleAuth;