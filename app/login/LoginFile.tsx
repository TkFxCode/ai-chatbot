import React from 'react'

const LoginFile = () => {
  return (
    <div>
      <header className="header">
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/login">Login</a>
          <a href="/chatbot">Chatbot</a>
          <a href="/about">About</a>
          <a href="/contactme">Contact me</a>
        </nav>
      </header>
      <div className="fixed top-0 left-0 size-full z-[-1]">
        <img src="./background.jpg" className="w-full h-full object-cover" />
      </div>
      <div className="z-50 flex items-center justify-center h-screenny">
        <div className="wrapper">
          <span className="bg-animate"></span>
          <span className="bg-animate2"></span>
          <div className="form-box login">
            <h2 className="animation">Login</h2>
            <form>
              <div className="input-box animation">
                <input type="text" required />
                <label>Username</label>
                <i className="bx bxs-user"></i>
              </div>
              <div className="input-box animation">
                <input type="password" required />
                <label>Password</label>
                <i className="bx bxs-lock-alt"></i>
              </div>
              <button type="submit" className="btn animation">
                Login
              </button>
              <div className="logreg-link animation">
                <p>
                  Dont have an account?{' '}
                  <a href="a" className="register-link">
                    Sign Up
                  </a>
                </p>
              </div>
            </form>
          </div>
          <div className="info-text login">
            <h2 className="animation">Welcome Back!</h2>
            <p className="animation">
              Make Learning and doing home fun with our innovative and
              multi-function chatbot.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginFile
