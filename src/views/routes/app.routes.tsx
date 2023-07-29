import { Outlet, RouteObject } from 'react-router-dom'
import { BrowserRoute } from '../../routes/browser.routes'
import { Weather } from '../content/weather/weather.view'
import { Layout } from '../components/layout/layout.view'
import { UsersList } from '../content/users-list/users-list.view'
import { JsBasics } from '../content/js-basics/js-basics.view'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        index: true,
        element: <JsBasics />,
      },
      {
        path: BrowserRoute.jsBasics,
        element: <JsBasics />,
      },
      {
        path: BrowserRoute.users,
        element: <UsersList />,
      },
      {
        path: BrowserRoute.weather,
        element: <Weather />,
      },
    ],
  },
]
