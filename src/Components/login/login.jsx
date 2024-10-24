import React from 'react';
import './login.css';

const Login = () => {
  return (
    <section className="login">
      <h2>Login to Your Account</h2>
      <form action="#" method="post">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="signup.html">Sign up here</a>
      </p>
    </section>
  );
};

export default Login;