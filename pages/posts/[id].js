// pages/posts/[id].js

import { useRouter } from 'next/router';
import Link from 'next/link';

export default function PostPage() {
  const router = useRouter();
  const { id } = router.query;

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

      {/* POST CONTENT */}
      <div style={{ padding: '40px 20px', textAlign: 'center', flex: 1 }}>
        <h2 style={{ color: 'cyan', fontSize: '2.5rem', marginBottom: '30px' }}>
          Post Title: {id}
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
          <p>This is the detailed content for post <b>{id}</b>.<br />In a real app, you'd fetch this post from an API using the ID.</p>
          <Link href={`/posts/${id}/comments`}>
            <button style={{
              marginTop: '20px',
              padding: '10px 25px',
              backgroundColor: '#ff4d4d',
              color: 'white',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>
              View Comments
            </button>
          </Link>
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
