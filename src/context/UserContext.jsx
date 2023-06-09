import React, {useState, createContext} from "react";

export const UserContext = createContext()

export const UserContextProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState('Harsh')
    return (
        <UserContext.Provider value={{userInfo, setUserInfo}}>
            {children}
        </UserContext.Provider>
    )
}
