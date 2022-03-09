import { useEffect, useRef, useState } from "react";
import { useProductArgs, InitialValues } from '../Interfaces/Interfaces';


export const useProduct = ({product,onChange, value = 0, initialValues}: useProductArgs) => {

    const [counter, setCounter] = useState<number>(initialValues?.count||value);

    const isMounted = useRef(false);

    const isControlled = useRef(!!onChange);

    const increaseBy = (value: number) => {

      if(isControlled.current){
        return onChange!({count:value, product});
      }

        let newValue=Math.max(counter+value, 0);
        
        if (initialValues?.maxCount){
          newValue = Math.min(newValue , initialValues.maxCount);
        }
       
        setCounter(newValue);
        onChange && onChange({count:newValue, product});
    }

    useEffect(() => {
      if(isMounted.current){
        setCounter(value);
      }
    }, [value]);

     useEffect(() => {
      isMounted.current= true;
    }, []);
    

  return {
    counter,
    increaseBy
  };
};
