import { useEffect, useState } from "react";
import { useProductArgs } from '../Interfaces/Interfaces';


export const useProduct = ({product,onChange, value = 0}: useProductArgs) => {

    const [counter, setCounter] = useState(value);

    const increaseBy = (value: number) => {
        const newValue= Math.max(counter+value, 0);
        setCounter(newValue);
        onChange && onChange({count:newValue, product});
    }


    useEffect(() => {
      setCounter(value);
    }, [value]);
    

  return {
    counter,
    increaseBy
  };
};
