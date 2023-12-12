import { useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthContext";

export const useSignup = () => {
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useContext(AuthContext);

    const signup = async (email, password) => {
        setIsLoading(true);
        setError(null);

        console.log(email);
        console.log(password);
        console.log(JSON.stringify({email, password}));

        const response = await fetch('http://localhost:5690/api/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        });

        const json = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(json.error);
        }
        if (response.ok) {
            sessionStorage.setItem('user', JSON.stringify(json));
            dispatch({ type: 'LOGIN', payload: json })

            setIsLoading(false);
        }
    }

    return { signup, isLoading, error };
}