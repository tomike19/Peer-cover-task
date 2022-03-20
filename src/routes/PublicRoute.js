import jsCookie from 'js-cookie'
import { useEffect, useState } from 'react'
import Login from '../pages/Login/Login'
import Dashboard from '../pages/Dashboard/Dashboard'
import AddNewConsultant from '../pages/AddNewConsultant/AddNewConsultant'
import EditMarketer from '../pages/EditMarkerter/editMarketer'
import { RouteLinks } from './RouteLinks'
import $api from '../components/helpers/api'



export const PublicRoute = [
  {
    component: <Login />,
    path: RouteLinks.login,
  },
]

export const AuthRoute = [
  {
    component: <Dashboard />,
    path: RouteLinks.dashboard,
  },
  {
    component: <AddNewConsultant />,
    path: RouteLinks.addConsultant,
  },
  {
    component: <EditMarketer />,
    path: RouteLinks.editMarketer,
  },
]
