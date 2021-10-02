import * as actions from '../redux/actions/subPage.action';
import userAction from '../redux/actions/user.action';

describe('actions', () => {
  it('should create an action to switch to the overview', () => {
    const expectedAction = {
      type: 'OVERVIEW',
    };
    expect(actions.overviewPage()).toEqual(expectedAction);
  });

  it('should create an action to switch to the class', () => {
    const expectedAction = {
      type: 'CLASS',
    };
    expect(actions.classPage()).toEqual(expectedAction);
  });

  it('should create an action to switch to the module', () => {
    const moduleId = 'MOD123';
    const expectedAction = {
      type: 'MODULE',
      payload: moduleId,
    };
    expect(actions.modulePage(moduleId)).toEqual(expectedAction);
  });
  it('should create an action to switch to the content', () => {
    const contentId = ' CON123';
    const expectedAction = {
      type: 'CONTENT',
      payload: contentId,
    };
    expect(actions.contentPage(contentId)).toEqual(expectedAction);
  });
});
