import { createContext, useEffect, useState } from "react";



export let userContext = createContext()

export let Contextprovider = ({children}) => {


    let [screen,setScreem] = useState("wide")
    let screenObserver = e => {
        if (window.innerWidth > 1000) {
            // console.log("yes")
        }
    }
    useEffect(()=>{
        window.addEventListener("resize",()=>
        {
            screenObserver()   
        })
        return () => {
            window.addEventListener("resize",()=>
        {
            screenObserver()   
        })  
        }
    },[])

    let values = {}
    return (
        <userContext.Provider value={values}>
            {children}
        </userContext.Provider>
    )
}