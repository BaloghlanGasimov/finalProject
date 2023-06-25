import React, { createContext, useState } from 'react'
import mydata from '../data/data';

export const ProductContext = createContext();


export const ProductProvider = (props) => {

    const [products,setProducts] = useState(mydata);
    // useEffect(()=>{

    // },[])
    
  return <ProductContext.Provider value={[products,setProducts]}>
    {props.children}
  </ProductContext.Provider>
}

