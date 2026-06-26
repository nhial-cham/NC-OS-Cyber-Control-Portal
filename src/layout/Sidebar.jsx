import React from 'react';

export default function Sidebar({ activeView, setActiveView }) {
  const menuItems = [
    { id: 'dashboard', label: '🛡️ CORE HUD' },
    { id: 'terminal', label: '📟 TERMINAL' },
    { id: 'skills', label: '⚡ MATRIX' },
    { id: 'projects', label: '🗂️ CASE FILES' },
    { id: 'logs', label: '📊 LIVE LOGS' },
    { id: 'contact', label: '📡 UPLINK' }
  ];

  return (
    <div style={{ width: '260px', height: '100vh', backgroundColor: '#0a0a0a', borderRight: '2px solid #00ff66', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
      <div style={{ padding: '24px', borderBottom: '1px solid #003311', textAlign: 'center' }}>
        <h2 style={{ color: '#00ff66', margin: 0, fontSize: '18px', letterSpacing: '2px', textShadow: '0 0 8px #00ff66' }}>NC-SOC</h2>
        <p style={{ color: '#888', fontSize: '10px', margin: '4px 0 0 0' }}>OPERATIVE: Nhial Cham</p>
      </div>
      <nav style={{ flex: 1, padding: '20px 0' }}>
        {menuItems.map(item => (
          <button
            key={item.id}
            onClick={() => setActiveView(item.id)}
            style={{
              width: '100%',
              padding: '16px 24px',
              background: activeView === item.id ? 'rgba(0, 255, 102, 0.15)' : 'transparent',
              border: 'none',
              borderLeft: activeView === item.id ? '4px solid #00ff66' : '4px solid transparent',
              color: activeView === item.id ? '#00ff66' : '#a0a0a0',
              fontFamily: "'Fira Code', monospace",
              textAlign: 'left',
              fontSize: '13px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'block'
            }}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <div style={{ padding: '16px', fontSize: '10px', borderTop: '1px solid #003311', color: '#666', textAlign: 'center' }}>
        SYS_STATUS: <span style={{ color: '#00ff66', fontWeight: 'bold' }}>SECURE</span>
      </div>
    </div>
  );
}