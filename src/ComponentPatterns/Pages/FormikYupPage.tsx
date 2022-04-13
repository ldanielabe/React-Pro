import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../Styles/styles.css';

export const FormikYupPage = () => {

 
    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                          .max(15, 'Debe tener máximo 15 caracteres')
                          .required('Campo requerido'),
            lastName: Yup.string()
                          .max(15, 'Debe tener máximo 10 caracteres')
                          .required('Campo requerido'),
            email: Yup.string()
                          .email('El corrreo no tiene un formato valido')
                          .required('Campo requerido')
        })
    });



    return (
        <div>
            <h1>Formik Yup</h1>

            <form onSubmit={ handleSubmit } noValidate>
                <label htmlFor="firstName">First Name</label>
                <input type="text" {...getFieldProps('fistName')}/>
                { touched.firstName && errors.firstName && <span>{ errors.firstName }</span> }

                <label htmlFor="lastName">Last Name</label>
                <input type="text" {...getFieldProps('lastName')}/>
                { touched.lastName && errors.lastName && <span>{ errors.lastName }</span> }

                <label htmlFor="email">Email Address</label>
                <input type="email" {...getFieldProps('email')}/>
                { touched.email && errors.email && <span>{ errors.email }</span> }


                <button type="submit">Submit</button>

            </form>

        </div>
    )
}