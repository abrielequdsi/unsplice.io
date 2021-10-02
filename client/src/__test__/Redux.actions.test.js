import * as subPageActions from '../redux/actions/subPage.action';
import * as userActions from '../redux/actions/user.action';

describe('Sub-page actions', () => {
  it('should create an action to switch to the overview', () => {
    const expectedAction = {
      type: 'OVERVIEW',
    };
    expect(subPageActions.overviewPage()).toEqual(expectedAction);
  });

  it('should create an action to switch to the class', () => {
    const expectedAction = {
      type: 'CLASS',
    };
    expect(subPageActions.classPage()).toEqual(expectedAction);
  });

  it('should create an action to switch to the module', () => {
    const moduleId = 'MOD123';
    const expectedAction = {
      type: 'MODULE',
      payload: moduleId,
    };
    expect(subPageActions.modulePage(moduleId)).toEqual(expectedAction);
  });
  it('should create an action to switch to the content', () => {
    const contentId = ' CON123';
    const expectedAction = {
      type: 'CONTENT',
      payload: contentId,
    };
    expect(subPageActions.contentPage(contentId)).toEqual(expectedAction);
  });
});

describe('User actions', () => {
  it('should create an action to login', () => {
    const user = 'USER123';
    const expectedAction = {
      type: 'LOGIN',
      payload: user,
    };
    expect(userActions.login(user)).toEqual(expectedAction);
  });

  it('should create an action to logout', () => {
    const expectedAction = {
      type: 'LOGOUT',
    };
    expect(userActions.logout()).toEqual(expectedAction);
  });
});
