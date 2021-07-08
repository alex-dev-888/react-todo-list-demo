import React, { createContext, useReducer, Children } from 'react'
import { alertReducer, todoReducer } from './_reducers'
import { alertInitialState, todoInitialState } from './_initialstates'

export const GlobalContext = createContext({})

export const GlobalProvider = ({ children }) => {
  const [alertState, alertDispatch] = useReducer(
    alertReducer,
    alertInitialState
  )
  const [todoState, todoDispatch] = useReducer(todoReducer, todoInitialState)

  return (
    <GlobalContext.Provider
      value={{ alertState, alertDispatch, todoState, todoDispatch }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
