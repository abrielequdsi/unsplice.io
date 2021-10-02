import subPageReducer from '../redux/reducers/subPage.reducer';
import userReducer from '../redux/reducers/user.reducer';
import {
  OVERVIEW,
  CLASS,
  MODULE,
  CONTENT,
  LOGIN,
  LOGOUT,
} from '../redux/actions/actionTypes';

describe('sub-page reducer', () => {
  it('should return the initial sub-page state', () => {
    expect(subPageReducer(undefined, {})).toEqual({
      current: OVERVIEW,
      id: null,
    });
  });

  it('should handle the OVERVIEW sub-page', () => {
    expect(
      subPageReducer(
        { current: OVERVIEW, id: null },
        {
          type: 'OVERVIEW',
        },
      ),
    ).toEqual({ current: OVERVIEW, id: null });
  });

  it('should handle the CLASS sub-page', () => {
    expect(
      subPageReducer(
        { current: OVERVIEW, id: null },
        {
          type: 'CLASS',
        },
      ),
    ).toEqual({ current: CLASS, id: null });
  });

  it('should handle the MODULE sub-page', () => {
    expect(
      subPageReducer(
        { current: OVERVIEW, id: null },
        {
          type: 'MODULE',
          payload: 'MOD123',
        },
      ),
    ).toEqual({
      current: MODULE,
      id: 'MOD123',
    });
  });

  it('should handle the CONTENT sub-page', () => {
    expect(
      subPageReducer(
        { current: OVERVIEW, id: null },
        {
          type: 'CONTENT',
          payload: 'content',
        },
      ),
    ).toEqual({ current: CONTENT, id: 'content' });
  });
});

describe('user reducer', () => {
  it('should return the initial user state', () => {
    expect(userReducer(undefined, {})).toEqual({
      userInfo: null,
      userPrograms: [],
    });
  });

  it('should handle LOGIN', () => {
    expect(
      userReducer(
        { userInfo: null, userPrograms: [] },
        {
          type: LOGIN,
          payload: {
            userInfo: { test: 'user' },
            userPrograms: ['TEST123'],
          },
        },
      ),
    ).toEqual({ userInfo: { test: 'user' }, userPrograms: ['TEST123'] });
  });

  it('Should handle LOGOUT', () => {
    expect(
      userReducer(
        { userInfo: null, userPrograms: [] },
        {
          type: LOGOUT,
        },
      ),
    ).toEqual({ user: null, userPrograms: [] });
  });
});
