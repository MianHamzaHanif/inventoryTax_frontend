import React, { useState } from 'react';
import "./Login.css";
import { APIinstance } from '../../axios.config';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';

const Login = () => {
  const navigate = useNavigate();
    const [isSignUp, setIsSignUp] = useState(false);
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleForm = () => {
        setIsSignUp(prevIsSignUp => !prevIsSignUp);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const loginUser = async (e) => {
        e.preventDefault(); // Prevent the default form submit action

        const formData = new FormData();
        formData.append('email', credentials.email);
        formData.append('password', credentials.password);

        try {
            const response = await APIinstance.post('/user/login', formData);
            if (response.data.status === 'OK') {
                // Assuming the API sends some sort of token or user data
                // Store it in local storage or context
                localStorage.setItem('user', JSON.stringify(response.data.data));
                setIsLoggedIn(true);
                navigate('/'); // Navigate to the home page
            }
        } catch (error) {
            console.error("Error during login", error);
        }
    };

    // Redirect to home if already logged in
    if (isLoggedIn) {
      navigate('/');
    }

  
  

    return (
        <div className={`login_bg ${isSignUp ? 'active' : ''}`}>
            <div className="wrapper">
                <div className={`form-wrapper ${isSignUp ? 'sign-up' : 'sign-in'}`}>
                    <form onSubmit={loginUser}>
                        <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
                        {!isSignUp && (
                            <div className="input-group">
                                <input
                                    type="text"
                                    name="email"
                                    required
                                    onChange={handleInputChange}
                                    value={credentials.email}
                                />
                                <label htmlFor="">Email</label>
                            </div>
                        )}
                        <div className="input-group">
                            <input
                                type="password"
                                name="password"
                                required
                                onChange={handleInputChange}
                                value={credentials.password}
                            />
                            <label htmlFor="">Password</label>
                        </div>
                        <button className='login_btn' type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
                        <div className="signUp-link">
                            <p>
                                {isSignUp
                                    ? "Already have an account? "
                                    : "Don't have an account? "}
                                <span onClick={toggleForm} className={`${isSignUp ? 'SignInBtn-link' : 'SignUpBtn-link'}`}>
                                    {isSignUp ? 'Sign In' : 'Sign Up'}
                                </span>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
