import { useState } from 'react';
import '../styles/login.css';
import log from '../img/log.svg';
import register from '../img/register.svg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Base_URL } from '../config';
import { useToast } from '@chakra-ui/react'

export function LoginPage() {
  const toast = useToast()

  const [signUpMode, setSignUpMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = formData;

    if (name === '' || email === '' || password === '') {
      toast({
        title: 'Oops!! ☹',
        description: "Please fill in all the details.",
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return; // Exit the function early
    }

    try {
      const response = await axios.post(`${Base_URL}/user/register`, formData);
      console.log(response.data);

      
      toast({
        title: 'Success!',
        description: "You are registered successfully.",
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      
      setSignUpMode(false);

    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast({
          title: 'Already Registered!',
          description: "You are already registered! Please log in.",
          status: 'info',
          duration: 2000,
          isClosable: true,
        });
      } else {
        console.error("Registration failed:", error);
        toast({
          title: 'Registration failed',
          description: "Something went wrong. Please try again.",
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
      }
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const { name, email} = loginData;

    if (name === '' || email === '' ) {
      toast({
        title: 'Oops!! ☹',
        description: "Please fill in all the details.",
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return; // Exit the function early
    }


    try {
      const response = await axios.post(`${Base_URL}/user/login`, loginData);
      console.log(response.data.accessToken);
      console.log(response.data);
      localStorage.setItem('token', response.data.accessToken);

      toast({
        title: 'Success!',
        description: "You are logged in successfully.",
        status: 'success',
        duration: 2000,
        isClosable: true,
      });


      setTimeout(()=>{
        navigate("/chartSection");

      },2000)

    } catch (error) {
      console.error("Login failed:", error);
      toast({
        title: 'Login failed',
        description: "Invalid email or password. Please try again or register first.",
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSignUpClick = () => {
    setSignUpMode(true);
  };

  const handleSignInClick = () => {
    setSignUpMode(false);
  };

  return (
    <div className={`container ${signUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={handleLoginSubmit} className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="email"
                name="email"
                value={loginData.email}
                onChange={handleLoginChange}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
              />
            </div>
            <input
              type="submit"
              value="Login"
              className="btn solid"
            />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
          <form onSubmit={handleSubmit} className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
            We are excited to have you! Register now to enjoy member-only benefits, get the latest updates, and connect with others.
            </p>
            <button className="btn transparent" type="button" onClick={handleSignUpClick}>
              Sign up
            </button>
          </div>
          <img src={log} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
            Welcome back! Enter your credentials to get back to your dashboard and enjoy your benefits.
            </p>
            <button className="btn transparent" onClick={handleSignInClick}>
              Sign in
            </button>
          </div>
          <img src={register} className="image" alt="" />
        </div>
      </div>
    </div>
  );
}
