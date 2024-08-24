import React, { useState } from 'react';
import Cookies from 'js-cookie';
import './Login.css';
import apple from './apple.png';
import google from './google.webp';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://dev.devsofrinventix.com:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, name }),
      });

      const data = await response.json();

      if (response.ok) {
        // Assuming the response contains the token
        Cookies.set('token', data.token, { expires: 7 }); // Store JWT in cookies for 7 days
        setSuccess("Signup successful! Redirecting...");

        setTimeout(() => {
          navigate("/login"); // Redirect to login page after signup
        }, 2000);
      } else {
        setError(data.message || "Signup failed.");
        setSuccess("");
      }
    } catch (err) {
      setError("Network error.");
      setSuccess("");
    }
  };

  return (
    <div>
      <div className='boxes font-main'> 
        <div className='box1'>
          <div className='content-b1'>
            <p className='head1'>Get Started Now</p>
            <p className='t1'>Enter your details to create your account</p>
            <div className='t2'>
              <p className='st1'><img src={google} className='google' alt='Google' />Sign up with Google</p>
              <p className='st2'><img src={apple} className='apple' alt='Apple' />Sign up with Apple ID</p>
            </div>
            <p className='line'>_________________________________________</p>
            <form onSubmit={handleSignup} className='form'>
              <p className='t3'>Name</p>
              <input className='i1' type="text" value={name} onChange={(e) => setName(e.target.value)} required />
              <p className='t3'>Email Address</p>
              <input className='i1' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <p className='t3'>Password</p>
              <input className='i1' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <div className='t6'>
                <input type="checkbox" className='cb1' required />
                <p>I accept the Terms & Agreements</p>
              </div>
              <button className='sign1' type="submit">Sign up & Create Account</button>
            </form>
            {success && <p style={{ color: 'green' }}>{success}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
        </div>
        <div className='box2'>
          <div className='b2-t1'>
            <p className='b2-st1'>The Simplest way</p>
            <p className='b2-st1'>to manage your</p>
            <p className='b2-st1'>clients & work.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
