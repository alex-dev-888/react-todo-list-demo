import { todoConstants, globalConstants } from '../_constants'
import { alertActions } from './'

export const todoActions = {
  addEditTodo,
  clearTodo,
  removeTodo,
}

function addEditTodo(todoDispatch, alertDispatch, name, id, isEditing) {
  if (!name) {
    alertActions.showAlert(alertDispatch, 'please enter value', 'error')
    return
  }

  if (isEditing) {
    todoDispatch({
      type: todoConstants.EDIT_TODO_PROCESS,
      payload: { id: id, name: name },
    })
    alertActions.showAlert(alertDispatch, 'value changed', 'success')
  } else {
    const newItem = { id: new Date().getTime().toString(), title: name }
    todoDispatch({
      type: todoConstants.ADD_TODO_PROCESS,
      payload: newItem,
    })

    alertActions.showAlert(alertDispatch, 'task added to the list', 'success')
  }
}

function clearTodo(todoDispatch, alertDispatch) {
  todoDispatch({
    type: todoConstants.CLEAR_TODO_PROCESS,
  })
  alertActions.showAlert(alertDispatch, 'empty tasks', 'error')
}

function removeTodo(todoDispatch, alertDispatch, id) {
  todoDispatch({
    type: todoConstants.REMOVE_TODO_PROCESS,
    payload: id,
  })
  alertActions.showAlert(alertDispatch, 'Task Removed', 'error')
}
