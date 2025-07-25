import { createRoot } from 'react-dom/client'
import './assets/style/main.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from "./store/index.js"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store} >
      <App />
    </Provider>
  </BrowserRouter>
)
