// pages/about.js

import React, { useState } from 'react';
import Link from 'next/link';

export default function About() {
  const [showMore, setShowMore] = useState(false);


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
      <div style={{ position: 'relative', width: '100%', height: '500px', overflow: 'hidden' }}>
        <video
          src="/vid.mp4"
          autoPlay
          loop
          muted
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>


      {/* ABOUT CONTENT */}
      <div style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h2 style={{ color: 'cyan', fontSize: '2.5rem', marginBottom: '30px' }}>
          About JK Web Designs
        </h2>

        <div style={{
          maxWidth: '700px',
          margin: '0 auto',
          padding: '20px',
          backgroundColor: '#1e1e1e',
          borderRadius: '10px',
          boxShadow: '0 0 15px rgba(255, 0, 0, 0.4)',
          fontSize: '1.1rem',
          lineHeight: '1.6',
        }}>
          <p>
            JK Web Designs is a creative development studio focused on delivering elegant, modern websites that inspire and perform.
            We work with businesses, creators, and organizations to shape their digital presence.
          </p>

          {!showMore && (
            <button
              onClick={() => setShowMore(true)}
              style={{
                marginTop: '20px',
                padding: '10px 20px',
                backgroundColor: '#ff4d4d',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              Read More
            </button>
          )}


          {showMore && (
            <div style={{ marginTop: '20px' }}>
              <p>
                Our design philosophy blends cutting-edge technology with clean, accessible user experiences.
                We prioritize responsiveness, usability, and performance across every project. Whether you're a
                startup or a well-known brand, we bring your vision to life with style and precision.
              </p>
            </div>
          )}
          

          {/* SEE USER'S COMMENTS BUTTON BELOW */}
          <Link href="/posts/sample-post">
            <button style={{
              marginTop: '25px',
              padding: '10px 25px',
              backgroundColor: '#ffaa00',
              color: 'black',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              boxShadow: '0 0 10px rgba(255,170,0,0.4)'
            }}>
              See User's Comments
            </button>
          </Link>
        </div>
      </div>


      {/* FOOTER */}
      <footer style={{
        backgroundColor: '#222',
        padding: '15px 0',
        textAlign: 'center',
        color: '#aaa',
        marginTop: 'auto'
      }}>
        
        © 2025 JK Web Designs. All rights reserved.
      </footer>
    </div>
  );
}
