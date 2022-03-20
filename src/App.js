import AppRoutes from './routes/AppRoutes'
import jsCookie from 'js-cookie'
import { useEffect, useState } from 'react'
import $api from '../src/components/helpers/api'

// redux

import { Provider } from 'react-redux'
import store from './store'

function App() {
  const [user, setUser] = useState(null)

  //   useEffect(() => {
  //     const user = jsCookie.get("user");
  //     if (user) {
  //       setUser(JSON.parse(user));
  //     }
  //   }, []);

  useEffect(() => {
    if (user) {
      jsCookie.set('user', JSON.stringify(user))
      const tokenInterceptor = $api.$axios.interceptors.request.use(
        (config) => {
          config.headers.Authorization = user.token
          return config
        },
      )
      const authInterceptor = $api.$axios.interceptors.response.use(
        (res) => res,
        (error) => {
          if (error.response?.status === 403) {
            jsCookie.remove('user')
            setUser(null)
          }

          return Promise.reject(error)
        },
      )

      return () => {
        $api.$axios.interceptors.request.eject(authInterceptor)
        $api.$axios.interceptors.request.eject(tokenInterceptor)
      }
    }
  }, [user])
  return (
    <Provider store={store}>
      <div className="App">
        <AppRoutes />
      </div>
    </Provider>
  )
}

export default App
