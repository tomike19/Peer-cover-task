import { useEffect } from 'react'
import { Input } from '../../components/Input/Input.component'
import { Button } from '../../components/Button/button.component'
import $api from '../../components/helpers/api'
import { toast } from 'react-toastify'
// import 'antd/dist/antd.css'
import { Formik } from 'formik'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { loginValidationSchema } from '../../components/helpers/ValidationSchema'
import '../../styles/Login.css'

const Login = (props) => {
  const { user, setUser } = props
  const navigate = useNavigate()
  const [search] = useSearchParams()

  useEffect(() => {
    if (user) {
      const goto = search.get('goto') || '/'

      navigate(goto)
      return null
    }
  }, [navigate, search, user])

  return (
    <div className="login-section">
      <div className="login-section-left-content">
        <section>
          <h4 className="login-header-text">PEERCOVER</h4>
          <p className="login-header-paragraph">Car</p>
          <p className="login-header-Insurance-text">Insurance</p>
          <p className="login-header-prices">Prices from</p>
          <p className="login-header-paragraph-price">N10,000</p>
        </section>
      </div>
      <section className="login-section-container">
        <div className="login-section-details">
          <h1>WELCOME BACK</h1>
          <p className="login-section-input-text">
            Input your details to proceed
          </p>

          <Formik
            initialValues={{ username: '', password: '' }}
            onSubmit={(values, helpers) => {
              helpers.setSubmitting(true)
              $api
                .$post('/consultant_auth', values)
                .then(setUser)
                .catch((error) => {
                  toast.error(error.message)
                })
                .finally(helpers.setSubmitting(false))
            }}
            validationSchema={loginValidationSchema}
          >
            {(props) => {
              const {
                handleSubmit,
                handleChange,
                errors,
                touched,
                values,
                handleBlur,
                isSubmitting,
              } = props

              return (
                <form onSubmit={handleSubmit}>
                  <Input
                    error={touched.username && errors.username}
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="username"
                    placeholder="Username"
                  />

                  <br />
                  <Input
                    error={touched.password && errors.password}
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="password"
                    placeholder="Password"
                    type="password"
                  />

                  <div className="login-section-forgot-password">
                    <p>Forgot Password?</p>
                  </div>
                  {/* <Link to="/dashboard"> */}
                  <Button disabled={isSubmitting} type="submit">
                    Log In
                  </Button>
                </form>
              )
            }}
          </Formik>

          {/* </Link> */}
        </div>
      </section>
    </div>
  )
}

export default Login
