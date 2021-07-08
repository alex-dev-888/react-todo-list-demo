import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Todo from './Todo'
import './Provider'
import { GlobalProvider } from './Provider'

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <Todo />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
