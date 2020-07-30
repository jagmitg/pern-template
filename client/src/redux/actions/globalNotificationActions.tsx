import { globalNotification } from '../actionTypes';

export const showSnackbarAction = (message: string, severity: string) => (
  dispatch: any
) => {
  dispatch({
    type: globalNotification.SHOW_SNACKBAR,
    payload: {
      message,
      severity,
    },
  });
};

export const hideSnackbarAction = () => (dispatch: any) => {
  dispatch({
    type: globalNotification.HIDE_SNACKBAR,
  });
};
