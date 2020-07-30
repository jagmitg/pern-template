import { profile } from '../actionTypes';

const initialState = {
  profileData: {},
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case profile.GET_PROFILE_SUCCESS:
      return {
        ...state,
        profileData: action.payload,
      };
    case profile.GET_PROFILE_FAIL:
      return initialState;
    default:
      return state;
  }
}
