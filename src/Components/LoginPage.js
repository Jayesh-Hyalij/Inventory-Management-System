import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((prevMode) =>!prevMode);
  };

  const handleLogin = () => {
    if (userName === 'user' && password === 'password') {
      localStorage.setItem('authenticated', 'true');
      navigate('/dashboard'); // Redirect to dashboard upon successful login
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className={`mainCont ${darkMode? 'dark-mode' : ''}`}>
      <div className={`container ${darkMode? 'dark-mode' : ''}`}>
        <img src={require('./img/loginBG.webp')} alt="" className='loginBG'/>
        <div className={`login-page ${darkMode? 'dark-mode' : ''}`}>
        <h2 className='login'>Login</h2>
        <button onClick={toggleDarkMode} className={`btn ${darkMode? 'btn-dark' : 'btn-light'}`}>
  {darkMode? 'Light Mode' : 'Dark Mode'}
</button>
          <div className={`input-group flex-nowrap loginUser ${darkMode? 'dark-mode' : ''}`}>
            <input type="text" className='form-control' placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className={`input-group flex-nowrap loginUser ${darkMode? 'dark-mode' : ''}`}>
            <input type="password" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping" value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleLogin} className={`btn ${darkMode? 'btn-dark' : 'btn-primary'} loginBtn`}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;