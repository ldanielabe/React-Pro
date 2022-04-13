import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../Styles/styles.css';

export const FormikComponentsPage = () => {

    return (
        <div>
            <h1>Formik Components</h1>

            <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                terms: false,
                jobType: '',
            }} 
            
            onSubmit={(values)=>{
                console.log('onSubmit ', values);
            }}
            
            validationSchema={
                Yup.object({
                    firstName: Yup.string()
                                  .max(15, 'Debe tener máximo 15 caracteres')
                                  .required('Campo requerido'),
                    lastName: Yup.string()
                                  .max(15, 'Debe tener máximo 10 caracteres')
                                  .required('Campo requerido'),
                    email: Yup.string()
                                  .email('El corrreo no tiene un formato valido')
                                  .required('Campo requerido'),
                    terms: Yup.boolean()
                                  .oneOf([true], 'Debe de aceptar los terminos'),
                    jobType: Yup.string()
                                  .required('Campo requerido')
                                  .notOneOf(['Designer'], 'Debes seleccionar una opcion valida'),
                })
            }>


            {
                formik => (
                    <Form>
                        <label htmlFor="firstName">First Name</label>
                        <Field name='firstName' type='text'/>
                        <ErrorMessage name='firstName' component='span'/>

                        <label htmlFor="lastName">Last Name</label>
                        <Field name='lastName' type='text'/>
                        <ErrorMessage name='lastName' component='span'/>

                        <label htmlFor="email">Email Address</label>
                        <Field name='email' type='email'/>
                        <ErrorMessage name='email' component='span'/>

                        <label htmlFor="jobType">Job Type</label>
                        <Field name='jobType' as='select'>
                            <option value=''>Pick something</option>
                            <option value='Developer'>Developer</option>
                            <option value='Designer'>Designer</option>
                            <option value='IT Senior'>IT Senior</option>
                            <option value='IT Junior'>IT Junior</option>
                        </Field>
                        <ErrorMessage name='jobType' component='span'/>


                        <label htmlFor="terms">
                            <Field name='terms' type='checkbox'/>
                            Terms and Conditions
                        </label>
                        
                        <ErrorMessage name='terms' component='span'/>


                        <button type="submit">Submit</button>

                    </Form>

                )
            }

            </Formik>

            
        </div>
    )
}