// pages/index.js

import React from 'react';
import Link from 'next/link';

export default function Home() {
  const posts = [
    { id: 'sample-post', title: 'Sample Post' },
    { id: 'web-design', title: 'Web Design Basics' },
    { id: 'nextjs-tips', title: 'Next.js Tips for Beginners' }
  ];

  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh' }}>

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

      {/* INTRO TEXT */}
      <div style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h2 style={{ color: 'cyan', fontSize: '2.5rem', marginBottom: '30px' }}>
          Welcome to JK Web Designs
        </h2>
        <div style={{
          maxWidth: '700px',
          margin: '0 auto',
          padding: '20px',
          backgroundColor: '#1e1e1e',
          borderRadius: '10px',
          boxShadow: '0 0 15px rgba(0, 255, 255, 0.4)',
          fontSize: '1.1rem',
          lineHeight: '1.6',
        }}>
          <p>
            At JK Web Designs which is maintained by Jamil Khalil, we build sleek, modern, and high-performance websites using the latest front-end technologies. Our passion for creativity and code drives us to deliver stunning user experiences that stand out in the digital world.
          </p>
          <p style={{ marginTop: '15px' }}>
            Explore our site to learn more about who we are, what we do, and how we can help you build your online presence with elegance and efficiency.
          </p>
        </div>
      </div>


      {/* DYNAMIC ROUTING POSTS SECTION */}

      <div style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h3 style={{ color: 'orange', fontSize: '2rem', marginBottom: '20px' }}>Recent Blog Posts</h3>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          maxWidth: '700px',
          margin: '0 auto',
        }}>
          {posts.map((post) => (
            <li key={post.id} style={{
              marginBottom: '15px',
              backgroundColor: '#1e1e1e',
              padding: '15px',
              borderRadius: '8px',
              boxShadow: '0 0 10px rgba(255, 165, 0, 0.3)',
              transition: 'transform 0.2s ease',
            }}>
              <Link href={`/posts/${post.id}`}>
                <span style={{
                  color: '#00ffff',
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                  cursor: 'pointer'
                }}>
                  {post.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>


      {/* FOOTER */}
      
      <footer style={{
        backgroundColor: '#222',
        padding: '15px 0',
        textAlign: 'center',
        color: '#aaa',
        marginTop: '30px'
      }}>
        © 2025 JK Web Designs. All rights reserved.
      </footer>
    </div>
  );
}
