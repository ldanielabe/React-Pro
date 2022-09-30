import '../Styles/styles.css';
import { FormEvent } from 'react';
import { useForm } from '../Hooks/useForm';

export const RegisterPage = () => {

  const {formData, onChange, name, email, password1, password2, resetFotm}=useForm({
    name: '',
    email: '',
    password1: '',
    password2: ''
  });

  const onSubmit = (e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
  console.log(formData);
  }

  return (
  <div>

      <h1>Register Page</h1>

        <form noValidate onSubmit={e=>onSubmit(e)}>
            <input 
            name="name" 
            type="text" 
            placeholder="Name" 
            value={name} 
            onChange={e => onChange(e)}/>
            
            <input 
            name="email" 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={e => onChange(e)}/>
            
            <input 
            name="password1" 
            type="password" 
            placeholder="Password" 
            value={password1} 
            onChange={e => onChange(e)}/>
           
            <input 
            name="password2" 
            type="password" 
            placeholder="Repeat Password" 
            value={password2} 
            onChange={e => onChange(e)}/>
            
            <button type="submit">Send</button>

            <button type="button" onClick={resetFotm }>Reset</button>

        </form>
  </div>
  );
};
