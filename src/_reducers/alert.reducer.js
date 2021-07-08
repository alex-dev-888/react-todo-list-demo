import { alertConstants } from '../_constants'

export function alertReducer(state = {}, action) {
  switch (action.type) {
    case alertConstants.CLEAR_ALERT:
      return {
        ...state,
        alert: {
          ...state.alert,
          message: '',
          type: '',
        },
      }

    case alertConstants.SHOW_ALERT:
      let msgType = ''
      if (action.payload.type === 'success') {
        msgType = 'alert-success'
      } else if (action.payload.type === 'error') {
        msgType = 'alert-danger'
      }

      return {
        ...state,
        alert: {
          ...state.alert,
          message: action.payload.message,
          type: msgType,
        },
      }
    default:
      return state
  }
}
