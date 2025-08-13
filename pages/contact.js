// pages/contact.js

import React, { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted:\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
  };

  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* NAVBAR */}
      <nav style={{
        position: 'absolute',
        top: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: '15px 0',
        background: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(8px)',
        zIndex: 10,
      }}>
        {['Home', 'About', 'Contact'].map((text) => (
          <Link key={text} href={text === 'Home' ? '/' : `/${text.toLowerCase()}`}>
            <div
              style={{
                display: 'inline-block',
                margin: '0 10px',
                padding: '10px 20px',
                backgroundColor: '#003366',
                color: 'white',
                fontWeight: 'bold',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'red'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#003366'}
            >
              {text}
            </div>
          </Link>
        ))}
      </nav>

      {/* VIDEO HEADER */}
      <div style={{ position: 'relative', width: '100%', height: '300px', overflow: 'hidden' }}>
        <video
          src="/vid2.mp4"
          autoPlay
          loop
          muted
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* CONTACT FORM */}
      <div style={{ padding: '40px 20px', textAlign: 'center', flex: 1 }}>
        <h2 style={{ color: 'cyan', fontSize: '2.5rem', marginBottom: '30px' }}>
          Contact Us
        </h2>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          background: 'linear-gradient(to right, #2c2c54, #40407a)',
          padding: '35px',
          borderRadius: '12px',
          boxShadow: '0 0 20px rgba(0, 255, 255, 0.4)'
        }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px', textAlign: 'left' }}>
              <label style={{ fontWeight: 'bold', color: 'lightblue' }}>Name:</label><br />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: '#eee',
                  color: 'black',
                  fontWeight: 'bold'
                }}
              />
            </div>
            <div style={{ marginBottom: '20px', textAlign: 'left' }}>
              <label style={{ fontWeight: 'bold', color: 'lightblue' }}>Email:</label><br />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: '#eee',
                  color: 'black',
                  fontWeight: 'bold'
                }}
              />
            </div>
            <div style={{ marginBottom: '25px', textAlign: 'left' }}>
              <label style={{ fontWeight: 'bold', color: 'lightblue' }}>Message:</label><br />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: '#eee',
                  color: 'black',
                  fontWeight: 'bold',
                  resize: 'vertical'
                }}
              />
            </div>
            <button type="submit" style={{
              padding: '12px 30px',
              backgroundColor: '#ff4d4d',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1rem',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: '0.3s'
            }}>
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{
        backgroundColor: '#222',
        padding: '15px 0',
        textAlign: 'center',
        color: '#aaa'
      }}>
        © 2025 JK Web Designs. All rights reserved.
      </footer>
    </div>
  );
}
