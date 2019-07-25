import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: 'japan'
    }
    const state = authReducer({}, action);
    expect(state.uid).toEqual(action.uid);
});

test('should logout', () => {
    const action = {
        type: 'LOGOUT',
    }
    const state = authReducer({uid: 'japan'}, action);
    expect(state).toEqual({});
});
