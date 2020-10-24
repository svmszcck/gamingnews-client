import { UPDATE_POST } from '../constants';

export const updatePost = payload => dispatch => {

  dispatch({ type: UPDATE_POST, payload });

}
