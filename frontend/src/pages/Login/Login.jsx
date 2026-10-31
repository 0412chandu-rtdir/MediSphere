


function Login({ onSwitch }) {
  function handleSubmit(event) {
    event.preventDefault();

    alert("Login API will be connected later.");
  }

  return (
    <div className="auth-content">
      <h2>Welcome Back!</h2>

      <p className="auth-subtitle">
        Login to access your MediSphere account.
      </p>

      <form onSubmit={handleSubmit}>
        <label>Email Address</label>

        <input
          type="email"
          placeholder="Enter your email"
          required
        />

        <label>Password</label>

        <input
          type="password"
          placeholder="Enter your password"
          required
        />

        <button type="submit" className="auth-submit">
          Login
        </button>
      </form>

      <p className="auth-switch">
        Don't have an account?{" "}
        <button onClick={onSwitch}>Register</button>
      </p>
    </div>
  );
}

export default Login;