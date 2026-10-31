function Register({ onSwitch }) {
  function handleSubmit(event) {
    event.preventDefault();

    alert("Registration API will be connected later.");
  }

  return (
    <div className="auth-content">
      <h2>Create Account</h2>

      <p className="auth-subtitle">
        Join MediSphere and manage your healthcare.
      </p>

      <form onSubmit={handleSubmit}>
        <label>Full Name</label>

        <input
          type="text"
          placeholder="Enter your full name"
          required
        />

        <label>Email Address</label>

        <input
          type="email"
          placeholder="Enter your email"
          required
        />

        <label>Phone Number</label>

        <input
          type="tel"
          placeholder="Enter your phone number"
          required
        />

        <label>Password</label>

        <input
          type="password"
          placeholder="Create a password"
          minLength="8"
          required
        />

        <label>Confirm Password</label>

        <input
          type="password"
          placeholder="Confirm your password"
          minLength="8"
          required
        />

        <button type="submit" className="auth-submit">
          Create Account
        </button>
      </form>

      <p className="auth-switch">
        Already have an account?{" "}
        <button onClick={onSwitch}>Login</button>
      </p>
    </div>
  );
}

export default Register;