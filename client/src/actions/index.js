import axios from 'axios';
import types from './types';

export const getData = () => async dispatch => dispatch({
    type: types.GET_DATA,
    payload: (await axios.get('/api/current_user')).data
});