import { globalConstants } from '../_constants'

const getLocalStorage = () => {
  let list = localStorage.getItem(globalConstants.LOCAL_STORAGE.toString())
  if (list) {
    return (list = JSON.parse(
      localStorage.getItem(globalConstants.LOCAL_STORAGE.toString())
    ))
  } else {
    return []
  }
}

export const todoInitialState = {
  todo: {
    loading: false,
    list: getLocalStorage(),
  },
}
