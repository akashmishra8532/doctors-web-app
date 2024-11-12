import { createContext } from "react";
import { doctors } from "../assets/assets";

export const AppContext=createContext()

const AppContextProvider=(props)=>{

    const currencySymbol="₹"
    const values ={
        doctors,
        currencySymbol
    }


    return(
        <AppContext.Provider value={values}>
            {props.children}

        </AppContext.Provider>
    )

}

export default AppContextProvider;