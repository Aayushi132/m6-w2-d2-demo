import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'

import './api/server'
import store from './store'
import { fetchTodos } from './features/todos/todosSlice'

store.dispatch(fetchTodos())

// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// )

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

