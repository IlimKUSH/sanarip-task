import React, { FC } from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { routes } from './views/routes'

const Routes: FC = () => {
  const appRoutes = useRoutes(routes)
  return appRoutes
}

function App() {
  return (
    <BrowserRouter>
      <div style={{ background: '#EBEBF0' }}>
        <Routes />
      </div>
    </BrowserRouter>
  )
}

export default App
