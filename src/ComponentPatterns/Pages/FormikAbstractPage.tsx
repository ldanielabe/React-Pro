import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../Styles/styles.css';
import { MyTextInput, MySelect, MyCheckBox } from '../Components';

// import { MyTextInput } from '../Components/MyTextInput';
// import { MySelect } from '../Components/MySelect';
// import { MyCheckBox } from '../Components/MyCheckBox';

export const FormikAbstractPage = () => {

    return (
        <div>
            <h1>Formik Abstract</h1>

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
                        
                        <MyTextInput label='First Name' name='firstName' placeholder='Laura' />
                        
                        <MyTextInput label='Last Name' name='lastName' placeholder='Buitrago' />
                        
                        <MyTextInput 
                        label='Email' 
                        name='email' 
                        type='email' 
                        placeholder='laurabuitrago@gmail.com' />

                       
                        <MySelect label='Job Type' name='jobType' >
                            <option value=''>Pick something</option>
                            <option value='Developer'>Developer</option>
                            <option value='Designer'>Designer</option>
                            <option value='IT Senior'>IT Senior</option>
                            <option value='IT Junior'>IT Junior</option>
                        </MySelect>

                        <MyCheckBox label='Terms and Conditions' name='terms'/>
                        
                        <button type="submit">Submit</button>

                    </Form>

                )
            }

            </Formik>

            
        </div>
    )
}