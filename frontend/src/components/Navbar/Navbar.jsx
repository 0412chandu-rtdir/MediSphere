import "./Navbar.css";

function Navbar({ onLogin, onRegister }) {
    return (
        <nav className="navbar">
            <a href="#home" className="navbar-logo">
                <span className="logo-icon">✚</span>
                MediSphere
            </a>

            <div className="navbar-links">
                <a href="#home">Home</a>
                <a href="#services">Services</a>
                <a href="#how-it-works">How It Works</a>
                <a href="#about">About Us</a>
            </div>

            <div className="navbar-actions">
                <button className="login-btn" onClick={onLogin}>
                    Login
                </button>

                <button className="register-btn" onClick={onRegister}>
                    Get Started
                </button>
            </div>
        </nav>
    );
}

export default Navbar;