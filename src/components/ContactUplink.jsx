import React from 'react';

export default function ContactUplink() {
  return (
    <div className="neon-border" style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#0a0a0a', padding: '24px' }}>
      <h3 style={{ margin: '0 0 16px 0', color: '#00ff66', borderBottom: '1px solid #003311', paddingBottom: '8px' }}>📡 SECURE COMMUNICATIONS</h3>
      <p style={{ fontSize: '14px', color: '#bbb', lineHeight: '1.6', marginBottom: '20px' }}>
        Initiate an encrypted connection pathway. Choose a mechanism below to access secure telemetry data routing options directly to my terminal.
      </p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', border: '1px dashed #003311' }}>
          <span style={{ color: '#00ccff' }}>SECURE EMAIL:</span>
          <span style={{ color: '#fff' }}>nhialcham14@proton.me</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', border: '1px dashed #003311' }}>
          <span style={{ color: '#00ccff' }}>GITHUB MATRIX:</span>
          <a href="https://github.com/nhial-cham/" target="_blank" rel="noreferrer" style={{ color: '#00ff66', textDecoration: 'none' }}>github.com/nhial-cham</a>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', border: '1px dashed #003311' }}>
          <span style={{ color: '#00ccff' }}>LINKEDIN LINK:</span>
          <a href="https://www.linkedin.com/in/nhial-cham-70b28b11a/" target="_blank" rel="noreferrer" style={{ color: '#00ff66', textDecoration: 'none' }}>linkedin.com/in/nhial-cham</a>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', border: '1px dashed #003311' }}>
          <span style={{ color: '#00ccff' }}>FACEBOOK LINK:</span>
          <a href="https://web.facebook.com/nhialcham/" target="_blank" rel="noreferrer" style={{ color: '#00ff66', textDecoration: 'none' }}>linkedin.com/in/nhial-cham</a>
        </div>
      </div>
    </div>
  );
}