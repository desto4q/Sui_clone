import { createContext, useEffect, useState } from "react";



export let userContext = createContext()

export let Contextprovider = ({children}) => {


    let [screen,setScreem] = useState("wide")
    let [ham,setHam] = useState(false)
    let screenObserver = e => {
        if (window.innerWidth > 1000) {
            setScreem("wide")
        }
        else {
            setScreem("small")
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
    useEffect(()=>{
    },[ham])
    let values = {ham,setHam,screen}
    return (
        <userContext.Provider value={values}>
            {children}
        </userContext.Provider>
    )
}