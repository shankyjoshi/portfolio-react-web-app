import { useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthContext";

export const useLogin = () => {
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useContext(AuthContext);

    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)

        console.log(JSON.stringify({email, password}))

        const response = await fetch('http://localhost:5690/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })

        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            sessionStorage.setItem('user', JSON.stringify(json))
            dispatch({ type: 'LOGIN', payload: json })

            setIsLoading(false);
        }
    }

    return { login, isLoading, error };
}