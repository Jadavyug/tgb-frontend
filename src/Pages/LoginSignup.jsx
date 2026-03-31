import React, { useState } from 'react';
import "../CSS/Login.css"

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-container">
      <div className={`form-card ${isLogin ? '' : 'flipped'}`}>
        
        {/* Login Side */}
        <div className="form-side login-side">
          <h2>Login</h2>
          <form>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
          <p>
            Don't have an account? <span onClick={toggleForm}>Sign Up</span>
          </p>
        </div>

        {/* Sign Up Side */}
        <div className="form-side signup-side">
          <h2>Sign Up</h2>
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Register</button>
          </form>
          <p>
            Already have an account? <span onClick={toggleForm}>Login</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default AuthForm;