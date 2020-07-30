import { profile } from '../actionTypes';
import axios from '../../config/axiosConfig';
import { returnErrors } from './errorActions';

export const getProfileAction = (error: Function) => (dispatch: any) => {
  axios
    .get('/profile/get')
    .then((res) => {
      dispatch({
        type: profile.GET_PROFILE_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: profile.GET_PROFILE_FAIL,
        payload: err,
      });
      dispatch(returnErrors(err));
      error();
    });
};
