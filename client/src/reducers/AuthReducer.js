const INITIAL_STATE = {
    isSignedIn: null,
    userID: null
};

export default (state = INITIAL_STATE, action) => {    
    switch(action.type) {
        case 'SIGN_IN':
            return {...INITIAL_STATE, isSignedIn: true, userID: action.payload};
            break;
        case 'SIGN_OUT':
            return {...INITIAL_STATE, isSignedIn: false, userID: null};
            break;
        default: 
            return state;
    }
}