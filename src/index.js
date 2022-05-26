import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import App from "./App"

ReactDom.render(
    <React.StrictMode>
        <App></App>
    </React.StrictMode>,
    document.getElementById('root')
)