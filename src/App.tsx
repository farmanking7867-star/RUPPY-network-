import React from 'react';

function App() {
  return (
    <div style={{ backgroundColor: '#000', color: '#d4af37', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <div style={{ border: '2px solid #d4af37', padding: '40px', borderRadius: '20px', backgroundColor: '#111', boxShadow: '0 0 30px rgba(212, 175, 55, 0.3)', maxWidth: '400px', width: '90%' }}>
        <h1 style={{ fontSize: '3.5rem', margin: '0 0 10px 0', background: 'linear-gradient(to right, #bf953f, #fcf6ba, #b38728)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bold' }}>RUPPY</h1>
        <p style={{ color: '#888', marginBottom: '30px', letterSpacing: '2px' }}>PREMIUM DIGITAL NETWORK</p>
        
        <div style={{ background: '#1a1a1a', padding: '20px', borderRadius: '15px', marginBottom: '20px', border: '1px solid #333' }}>
          <p style={{ fontSize: '0.9rem', color: '#666', margin: '0' }}>CURRENT BALANCE</p>
          <p style={{ fontSize: '1.8rem', fontWeight: 'bold', margin: '5px 0' }}>540.00 RPY</p>
        </div>

        <button style={{ backgroundColor: '#d4af37', color: '#000', border: 'none', padding: '15px 30px', borderRadius: '12px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', width: '100%', boxShadow: '0 4px 15px rgba(212, 175, 55, 0.4)' }}>
          Connect Wallet
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '25px' }}>
          <div style={{ padding: '10px', border: '1px solid #222', borderRadius: '8px' }}>
            <p style={{ fontSize: '0.7rem', color: '#555', margin: 0 }}>HOLDERS</p>
            <p style={{ fontSize: '1rem', fontWeight: 'bold', margin: '3px 0' }}>18.2K</p>
          </div>
          <div style={{ padding: '10px', border: '1px solid #222', borderRadius: '8px' }}>
            <p style={{ fontSize: '0.7rem', color: '#555', margin: 0 }}>PRICE</p>
            <p style={{ fontSize: '1rem', fontWeight: 'bold', margin: '3px 0' }}>$0.024</p>
          </div>
        </div>
      </div>
      <footer style={{ marginTop: '30px', color: '#333', fontSize: '0.8rem' }}>
        &copy; 2026 RUPPY NETWORK • ENCRYPTED ASSET
      </footer>
    </div>
  );
}

export default App;
