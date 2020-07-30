import { authentication } from '../actionTypes';

const initialState = {
  isAuthenticated: false,
  accessToken: localStorage.getItem('accessToken'),
  refreshToken: localStorage.getItem('refreshToken'),
  userData: JSON.parse(localStorage.getItem('userData')!),
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case authentication.LOGIN_SUCCESS:
      const { accessToken, refreshToken, userData } = action.payload;

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('userData', JSON.stringify(userData));

      return {
        ...state,
        isAuthenticated: true,
        accessToken,
        refreshToken,
        userData,
      };
    case authentication.REGISTER_SUCCESS:
      return {
        ...state,
      };
    case authentication.TOKEN_REFRESH_SUCCESS:
      const newAccessToken = action.payload;
      localStorage.setItem('accessToken', newAccessToken);

      return {
        ...state,
        accessToken: newAccessToken,
      };
    case authentication.REGISTER_FAIL:
    case authentication.LOGIN_FAIL:
    case authentication.LOGOUT_SUCCESS:
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('userData');

      return initialState;
    default:
      return state;
  }
}
