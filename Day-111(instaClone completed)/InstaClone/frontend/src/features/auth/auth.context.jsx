import { createContext, useState } from "react";
import { login, register, getMe } from "./services/auth.api";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleLogin = async (email, password) => {
        
        setLoading(true)

        try{
            const response = await login(email, password)
            console.log(response.user)
            setUser(response.user)
        }
        catch(err){
            console.log(err)
        }
        finally{
            setLoading(false)
        }

    }

    const handleRegister = async (username, email, password) => {

        setLoading(true)

        try{
            const response = await register(username, email, password)
            console.log(response.user)
            setUser(response.user)
        }
        catch(err){
            console.log(err)
        }
        finally{
            setLoading(false)
        }
    }

    return (
        <AuthContext value={{ user, loading, handleLogin, handleRegister }}>
            {children}
        </AuthContext> 
    )
}