import { todoConstants, globalConstants } from '../_constants'

export function todoReducer(state, action) {
  switch (action.type) {
    case todoConstants.ADD_TODO_PROCESS:
      let newList = [...state.todo.list, action.payload]
      localStorage.setItem(
        globalConstants.LOCAL_STORAGE.toString(),
        JSON.stringify(newList)
      )
      return {
        ...state,
        todo: {
          ...state.todo,
          list: newList,
        },
      }
    case todoConstants.EDIT_TODO_PROCESS:
      let newListEdited = state.todo.list.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, title: action.payload.name }
        }
        return item
      })
      localStorage.setItem(
        globalConstants.LOCAL_STORAGE.toString(),
        JSON.stringify(newListEdited)
      )
      return {
        ...state,
        todo: {
          ...state.todo,
          list: newListEdited,
        },
      }
    case todoConstants.CLEAR_TODO_PROCESS:
      localStorage.setItem(globalConstants.LOCAL_STORAGE.toString(), [])

      return {
        ...state,
        todo: {
          ...state.todo,
          list: [],
        },
      }
    case todoConstants.REMOVE_TODO_PROCESS:
      let listRemoveLeft = state.todo.list.filter(
        (todo) => todo.id !== action.payload
      )
      localStorage.setItem(
        globalConstants.LOCAL_STORAGE.toString(),
        JSON.stringify(listRemoveLeft)
      )
      return {
        ...state,
        todo: {
          ...state.todo,
          list: listRemoveLeft,
        },
      }
    default:
      return state
  }
}
