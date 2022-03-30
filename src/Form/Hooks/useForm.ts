import { ChangeEvent, useState } from "react";

export const useForm = <T>(initialData:T) => {

    const [formData, setFormData] = useState(initialData);
    
    
    
      const onChange = (e:ChangeEvent<HTMLInputElement>) =>{
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      }

      const resetFotm = () =>{
        setFormData({...initialData})
      }
      
  return {
    ...formData,
    formData,
    setFormData,
    onChange,
    resetFotm,
  };
};
