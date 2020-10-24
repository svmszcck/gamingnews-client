import { UPDATE_POST } from '../constants'

const initialState = { title: '', category: '', compensation: '', type: 'full-time', regionalRestrictions: '', link: '', description: '' };

const postReducer = (state = initialState, {type, payload}) => {
  
    switch (type) {
      
      case UPDATE_POST:
        return { ...state, ...payload };
      default:
        return state;
        
    }
}

export default postReducer;
