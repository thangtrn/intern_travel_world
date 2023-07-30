import {Home, About, Tours, Login, Register, NotFound} from '../pages'

const routes = [
   {
      path: '/',
      element: Home
   },
   {
      path: '/about',
      element: About
   },
   {
      path: '/tours',
      element: Tours
   },
   {
      path: '/login',
      element: Login
   },
   {
      path: '/register',
      element: Register
   },
   {
      path: '*',
      element: NotFound
   },
]

export default routes;