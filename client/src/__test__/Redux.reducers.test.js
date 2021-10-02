import subPageReducer from '../redux/reducers/subPage.reducer';
import { OVERVIEW, CLASS, MODULE, CONTENT } from '../redux/actions/actionTypes';

describe('sub-page reducer', () => {
  it('Should return the initial sub-page state', () => {
    expect(subPageReducer(undefined, {})).toEqual({
      current: OVERVIEW,
      id: null,
    });
  });

  it('Should handle the OVERVIEW sub-page', () => {
    expect(
      subPageReducer(
        { current: OVERVIEW, id: null },
        {
          type: 'OVERVIEW',
        },
      ),
    ).toEqual({ current: OVERVIEW, id: null });
  });

  it('Should handle the CLASS sub-page', () => {
    expect(
      subPageReducer(
        { current: OVERVIEW, id: null },
        {
          type: 'CLASS',
        },
      ),
    ).toEqual({ current: CLASS, id: null });
  });

  it('Should handle the MODULE sub-page', () => {
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

  it('Should handle the CONTENT sub-page', () => {
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
