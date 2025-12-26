import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// This targets the <div id="root"></div> in your index.html
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
