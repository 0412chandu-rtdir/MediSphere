import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Login from "../Login/Login";
import Register from "../Register/Register";
import "./Landing.css";

function Landing() {
  const [authMode, setAuthMode] = useState(null);

  const services = [
    {
      icon: "📅",
      title: "Book Appointments",
      description:
        "Find doctors and schedule appointments without waiting in long queues.",
    },
    {
      icon: "👨‍⚕️",
      title: "Find Doctors",
      description:
        "Discover healthcare professionals according to your needs.",
    },
    {
      icon: "📋",
      title: "Medical Records",
      description:
        "Access your medical history and reports from one place.",
    },
    {
      icon: "💊",
      title: "Prescriptions",
      description:
        "Manage your prescriptions and medication information easily.",
    },
    {
      icon: "🧪",
      title: "Lab Reports",
      description:
        "Keep your diagnostic reports organized in one place.",
    },
    {
      icon: "🏥",
      title: "Hospital Services",
      description:
        "Explore healthcare services through a centralized platform.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Create Your Account",
      description: "Register yourself and set up your patient profile.",
    },
    {
      number: "02",
      title: "Find Healthcare",
      description: "Explore doctors, hospitals and healthcare services.",
    },
    {
      number: "03",
      title: "Get Consultation",
      description: "Connect with healthcare professionals.",
    },
    {
      number: "04",
      title: "Manage Your Health",
      description: "Keep your medical information organized.",
    },
  ];

  const benefits = [
    {
      icon: "🔒",
      title: "Privacy Focused",
      description:
        "Your health information deserves careful handling and protection.",
    },
    {
      icon: "⚡",
      title: "Easy to Use",
      description:
        "Access important healthcare services through one simple platform.",
    },
    {
      icon: "🌐",
      title: "Connected Healthcare",
      description:
        "Bring different healthcare services together in one ecosystem.",
    },
    {
      icon: "❤️",
      title: "Patient First",
      description:
        "Designed to make healthcare access simpler and more convenient.",
    },
  ];

  return (
    <>
      <Navbar
        onLogin={() => setAuthMode("login")}
        onRegister={() => setAuthMode("register")}/>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-content">
            <span className="hero-tag">
              YOUR HEALTH, OUR PRIORITY
            </span>

            <h1>
              Better Healthcare
              <br />
              for a <span>Healthier Tomorrow</span>
            </h1>

            <p>
              MediSphere brings healthcare services together in one
              convenient digital platform. Explore doctors, manage
              medical information and take control of your health.
            </p>

            <div className="hero-buttons">
              <button
                className="primary-btn"
                onClick={() => setAuthMode("register")} >
                Get Started →
              </button>

              <a href="#services" className="secondary-btn">
                Explore Services
              </a>
            </div>

            <div className="hero-trust">
              <span>✓ Patient-focused platform</span>
              <span>✓ Convenient healthcare access</span>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="../../src/assets/Landing.jpg"
              alt="Healthcare professional" />

            <div className="floating-card">
              <span>❤️</span>
              <div>
                <strong>Your Health Matters</strong>
                <small>Healthcare made simpler</small>
              </div>
            </div>
          </div>
        </section>


        <section className="services-section" id="services">
          <div className="section-heading">
            <span>OUR SERVICES</span>
            <h2>Healthcare Services in One Place</h2>
            <p>
              Explore essential healthcare services through MediSphere.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon">
                  {service.icon}
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <a href="#how-it-works">
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </section>


        <section className="how-section" id="how-it-works">
          <div className="section-heading">
            <span>HOW IT WORKS</span>
            <h2>Healthcare Made Simple</h2>
            <p>
              Get started with just a few simple steps.
            </p>
          </div>

          <div className="steps-grid">
            {steps.map((step) => (
              <div className="step-card" key={step.number}>
                <div className="step-number">
                  {step.number}
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </section>


        <section className="benefits-section" id="about">
          <div className="section-heading">
            <span>WHY MEDISPHERE</span>
            <h2>A Smarter Approach to Healthcare</h2>
            <p>
              Making healthcare more accessible, organized and convenient.
            </p>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div className="benefit-card" key={index}>
                <div className="benefit-icon">
                  {benefit.icon}
                </div>

                <h3>{benefit.title}</h3>

                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>


        <section className="cta-section">
          <h2>Take the First Step Towards Better Healthcare</h2>

          <p>
            Create your MediSphere account and explore a simpler
            healthcare experience.
          </p>

          <button
            className="cta-button"
            onClick={() => setAuthMode("register")}
          >
            Create Your Account →
          </button>
        </section>
      </main>

      <Footer />


      {authMode && (
        <div
          className="modal-overlay"
          onClick={() => setAuthMode(null)}
        >
          <div
            className="auth-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setAuthMode(null)}
              aria-label="Close modal"
            >
              ×
            </button>

            {authMode === "login" ? (
              <Login onSwitch={() => setAuthMode("register")} />) : 
              ( <Register onSwitch={() => setAuthMode("login")} />
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Landing;