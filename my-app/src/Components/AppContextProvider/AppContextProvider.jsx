import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const [state, setState] = useState({
        articleList : [],
        isLoggedIn :false,
        userName : "Hemanth"
    })
    return(
        <AppContext.Provider value={{state,setState}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;