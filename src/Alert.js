import React, { useEffect, useContext } from 'react'
import { GlobalContext } from './Provider'
import { alertActions } from './_actions'

const Alert = () => {
  const { alertState, alertDispatch } = useContext(GlobalContext)

  useEffect(() => {
    const timeout = setTimeout(() => {
      alertActions.showAlert(alertDispatch, '', 'clear')
    }, 3000)
    return () => clearTimeout(timeout)
  })

  return (
    <p className={`alert ${alertState.alert.type}`}>
      {alertState.alert.message}
    </p>
  )
}

export default Alert
