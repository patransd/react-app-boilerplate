import { 
    login, 
    logout, 
} from '../../actions/auth';

test('should setup login action object', () => {
    const action = login('japan');
    expect(action).toEqual({
        type: 'LOGIN',
        uid: 'japan'
    });
});

test('should setup logout action object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT',
    });
});