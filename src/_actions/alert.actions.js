import { alertConstants } from '../_constants'

export const alertActions = {
  showAlert,
}

function showAlert(dispatch, message, type) {
  if (type === 'clear') {
    dispatch({
      type: alertConstants.CLEAR_ALERT,
    })
  } else {
    dispatch({
      type: alertConstants.SHOW_ALERT,
      payload: {
        message: message,
        type: type,
      },
    })
  }
}
