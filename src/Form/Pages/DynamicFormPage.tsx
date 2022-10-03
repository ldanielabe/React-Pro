import {Formik, Form} from 'formik'
import { MySelect, MyTextInput } from '../../ComponentPatterns/Components';
import * as Yup from 'yup';
import formJson from '../Data/custom-form.json'

const initialValues: { [key: string]:any } = {};
const requiredFields: { [key: string]:any } = {};

for (const input of formJson) {
    initialValues[input.name] = input.value;
    if(!input.validations) continue

    let schema = Yup.string();

    for (const rule of input.validations) {
        
        if(rule.type==='required'){
            schema = schema.required('Este campo es requerido')
        }
        
        if(rule.type==='minLength'){
            schema = schema.min((rule as any).value, `Debe tener minimo ${(rule as any).value} caracteres`)
        }

        if(rule.type==='email'){
            schema = schema.email("El formato del email es incorrecto")
        }
    }

    requiredFields[input.name]= schema

}

const validationSchema = Yup.object({...requiredFields})

export const DynamicFormPage = () => {
  return (
    <div>
        <h1>Dynamic Form</h1>
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={ (values)=>{
            console.log(values);
        }}>
            { (formik)=>(
                <Form>
                {formJson.map(({type, name, label, placeholder, options})=>{

                    if(type==="select"){
                        return <MySelect 
                        key={name}
                        type={(type as any)} 
                        label={label} 
                        name={name} 
                        placeholder={placeholder}
                        >
                            <option value="">Select an option</option>                    
                        {
                                  options?.map(option =>{
                                    return <option key={ option.id } value={option.id}>{option.label}</option>
                                })                        
                        }
                        </MySelect>
                    }else{
                        return <MyTextInput 
                        key={name}
                        type={(type as any)} 
                        label={label} 
                        name={name} 
                        placeholder={placeholder}/>
                    }

                    
                })}

                <button type='submit'>Enviar</button></Form>
            )}
        </Formik>
    </div>
  )
}
