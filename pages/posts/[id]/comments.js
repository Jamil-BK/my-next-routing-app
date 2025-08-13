// pages/posts/[id]/comments.js

import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Comments() {
  const router = useRouter();

  const { id } = router.query;



  // Sample comment data for different posts
  const commentsData = {
    'sample-post': [
      'This post was really insightful!',
      'I learned a lot. Thank you for sharing!',
      'Great write-up. Looking forward to more posts.',
    ],

    'web-design': [
      'Very helpful overview of design basics.',
      'Loved the simplicity and clarity!',
    ],

    'nextjs-tips': [
      'The tips were on point!',
      'Please share more Next.js articles!',
    ],

  };

  const comments = commentsData[id] || ['No comments available for this post.'];

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

      {/* HEADER VIDEO */}

      <div style={{ position: 'relative', width: '100%', height: '300px', overflow: 'hidden' }}>
        <video
          src="/vid2.mp4"
          autoPlay
          loop
          muted
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>


      {/* COMMENTS CONTENT */}
      <div style={{ padding: '40px 20px', textAlign: 'center', flex: 1 }}>
        <h2 style={{ color: 'orange', fontSize: '2rem', marginBottom: '30px' }}>
          Comments for Post: {id}
        </h2>

        <div style={{
          maxWidth: '700px',
          margin: '0 auto',
          padding: '20px',
          backgroundColor: '#1e1e1e',
          borderRadius: '10px',
          boxShadow: '0 0 15px rgba(255, 165, 0, 0.4)',
          textAlign: 'left',
          fontSize: '1.1rem',
        }}>
          {comments.map((comment, index) => (
            <p key={index}><strong>User{index + 1}:</strong> {comment}</p>
          ))}
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
