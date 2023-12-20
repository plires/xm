import { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import RotateLoader from 'react-spinners/RotateLoader'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ErrorInput from './../components/Common/ErrorInput'
import saveDataAndSendEmail from './saveDataAndSendEmail'

import './styles.css'

const override = {
  display: 'block',
  position: 'absolute',
  left: '50%',
  top: '50vh',
  zIndex: '1',
  background: '#05BED4',
}

const FormularioContacto = () => {
  const { executeRecaptcha } = useGoogleReCaptcha()

  const [loading, setLoading] = useState(false)

  const validation = values => {
    const errors = {}
    if (!values.name) {
      errors.name = 'Ingresá un nombre'
    }
    if (!values.email) {
      errors.email = 'Ingresá tu email'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Ingresá un correo válido'
    }
    if (!values.comments) {
      errors.comments = 'Enviá tu consulta'
    }
    return errors
  }

  const sendForm = async (values, { setSubmitting, resetForm }) => {
    setLoading(true)

    const token = await executeRecaptcha('form_contacto')
    values.recaptchaToken = token
    values.origin = 'Formulario de Contacto sitio web'

    try {
      saveDataAndSendEmail(values).then(responseData => {
        if (responseData.success) {
          toast.success(responseData.msg)
          resetForm()
          setSubmitting(false)
          setLoading(false)
        } else {
          toast.error(responseData.msg)
          setSubmitting(false)
          setLoading(false)
        }
      })
    } catch (error) {
      // Realizar acciones en caso de error
      toast.error(
        'Aparentemente en este momento no hay conexión con el servidor, por favor intente mas tarde.',
      )
    }

    setSubmitting(false)
    setLoading(false)
  }

  const initFormDefault = {
    name: '',
    email: '',
    comments: '',
  }

  return (
    <div className='content_all_form'>
      <div className='sweet-loading'>
        <RotateLoader
          loading={loading}
          color='#05BED4'
          speedMultiplier={1}
          size={15}
          cssOverride={override}
          aria-label='Loading Spinner'
          data-testid='loader'
        />
      </div>

      <div>
        <ToastContainer />
      </div>
      <Formik
        initialValues={initFormDefault}
        validate={validation}
        onSubmit={sendForm}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form id='form_contacto' onSubmit={handleSubmit}>
            <div className='mb-3'>
              <Field
                className='form-control'
                type='text'
                name='name'
                placeholder='Nombre'
              />
              <ErrorMessage name='name' component={ErrorInput} />
            </div>

            <div className='mb-3'>
              <Field
                className='form-control'
                type='email'
                name='email'
                placeholder='Email'
              />
              <ErrorMessage name='email' component={ErrorInput} />
            </div>

            <div className='mb-3'>
              <Field
                className='form-control'
                as='textarea'
                name='comments'
                rows='4'
                placeholder='Que necesitás?'
              />
              <ErrorMessage name='comments' component={ErrorInput} />
            </div>

            <button
              id='send'
              className='btn btn-primary transition'
              type='submit'
              disabled={isSubmitting}
            >
              _enviar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default FormularioContacto
