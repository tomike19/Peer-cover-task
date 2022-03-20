import * as Yup from 'yup'

export const loginValidationSchema = Yup.object().shape({
  username: Yup.string().required('Please enter username'),
  password: Yup.string().required('Please enter password'),
})
