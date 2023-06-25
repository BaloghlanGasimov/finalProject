import React, { createContext, useState } from 'react'
// import mydata from '../data/data';
import langdata from '../data/langData';

export const LangDataContext = createContext();


export const LangDataProvider = (props) => {

    const [langData,setLangData] = useState(langdata);
    // useEffect(()=>{

    // },[])
    
  return <LangDataContext.Provider value={[langData,setLangData]}>
    {props.children}
  </LangDataContext.Provider>
}

