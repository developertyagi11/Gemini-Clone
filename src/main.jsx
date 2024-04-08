import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MycontextProvider } from './Context/Mycontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<MycontextProvider>
    <App/>
</MycontextProvider>
)
