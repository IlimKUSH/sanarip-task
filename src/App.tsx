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
      <Routes />
    </BrowserRouter>
  )
}

export default App
