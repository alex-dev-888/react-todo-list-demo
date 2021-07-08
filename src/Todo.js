import React, { useState, useEffect, useContext } from 'react'
import List from './List'
import Alert from './Alert'
import { GlobalContext } from './Provider'
import { alertActions, todoActions } from './_actions'

function Todo() {
  const { alertDispatch, todoState, todoDispatch } = useContext(GlobalContext)

  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      alertActions.showAlert(alertDispatch, 'please enter value', 'error')
    } else if (name && isEditing) {
      todoActions.addEditTodo(todoDispatch, alertDispatch, name, editID, true)
      setName('')
      setEditID(null)
      setIsEditing(false)
    } else {
      todoActions.addEditTodo(todoDispatch, alertDispatch, name, null, false)
      setName('')
    }
  }

  const clearList = () => {
    todoActions.clearTodo(todoDispatch, alertDispatch)
  }

  const removeItem = (id) => {
    todoActions.removeTodo(todoDispatch, alertDispatch, id)
  }

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id)
    setIsEditing(true)
    setEditID(id)
    setName(specificItem.title)
  }

  useEffect(() => {
    setList(todoState.todo.list)
  }, [todoState.todo.list])

  return (
    <section className='section-center'>
      <form className='todo-form' onSubmit={handleSubmit}>
        <Alert />
        <h3>Todo List</h3>
        <div className='form-control'>
          <input
            type='text'
            className='todo-input'
            placeholder='e.g. task'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit' : 'add'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='todo-list-container'>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className='clear-btn' onClick={clearList}>
            clear tasks
          </button>
        </div>
      )}
    </section>
  )
}

export default Todo
