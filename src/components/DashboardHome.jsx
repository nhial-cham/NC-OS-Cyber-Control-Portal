import React from 'react';

export default function DashboardHome() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
      
      {/* Metrics Row */}
      <div className="neon-border" style={{ padding: '20px', backgroundColor: '#0a0a0a', position: 'relative' }}>
        <div style={{ fontSize: '12px', color: '#ff3333', fontWeight: 'bold', letterSpacing: '1px' }}>GLOBAL THREAT LEVEL</div>
        <div style={{ fontSize: '42px', color: '#ff3333', marginTop: '10px', fontWeight: 'bold', textShadow: '0 0 10px #ff3333' }}>CRITICAL (8.9)</div>
        <p style={{ fontSize: '12px', color: '#888', margin: '10px 0 0 0' }}>Elevated scanning activity detected targeting SSH subsystems.</p>
      </div>

      <div className="neon-border" style={{ padding: '20px', backgroundColor: '#0a0a0a' }}>
        <div style={{ fontSize: '12px', color: '#00ff66', fontWeight: 'bold', letterSpacing: '1px' }}>FIREWALL BLOCK RATE</div>
        <div style={{ fontSize: '42px', color: '#00ff66', marginTop: '10px', fontWeight: 'bold' }}>4,921 / min</div>
        <p style={{ fontSize: '12px', color: '#888', margin: '10px 0 0 0' }}>Integrity index: 99.98% clean packet throughput.</p>
      </div>

      <div className="neon-border" style={{ padding: '20px', backgroundColor: '#0a0a0a' }}>
        <div style={{ fontSize: '12px', color: '#00ccff', fontWeight: 'bold', letterSpacing: '1px' }}>NODE ARCHITECTURE</div>
        <div style={{ fontSize: '18px', color: '#fff', marginTop: '15px' }}>Location: <span style={{ color: '#00ccff' }}>Juba, South Sudan</span></div>
        <div style={{ fontSize: '14px', color: '#aaa', marginTop: '5px' }}>Role: <span style={{ color: '#00ff66' }}>Junior Penetration Tester</span></div>
      </div>

      {/* Main Console Box */}
      <div className="neon-border" style={{ gridColumn: '1 / -1', padding: '24px', backgroundColor: '#0a0a0a' }}>
        <h3 style={{ margin: '0 0 16px 0', color: '#00ff66', fontSize: '16px', borderBottom: '1px solid #003311', paddingBottom: '8px' }}>🤖 SYSTEM MANIFESTO</h3>
        <p style={{ lineHeight: '1.6', fontSize: '14px', color: '#d0d0d0' }}>
          Welcome to the control console of <strong style={{ color: '#00ff66' }}>Nhial Cham</strong>. I specialize in Offensive Security, Network Security Architecture, and Defensive Threat Hunting. As the Cybersecurity Club President at the University of Juba, I architect systems capable of weathering real-world cyber warfare while developing specialized payloads and full-stack enterprise engines.
        </p>
        <div style={{ marginTop: '20px', display: 'flex', gap: '12px' }}>
          <span style={{ padding: '6px 12px', backgroundColor: '#002208', border: '1px solid #00ff66', color: '#00ff66', fontSize: '12px' }}>OSCP Candidate</span>
          <span style={{ padding: '6px 12px', backgroundColor: '#001122', border: '1px solid #00ccff', color: '#00ccff', fontSize: '12px' }}>Full-Stack Developer</span>
          <span style={{ padding: '6px 12px', backgroundColor: '#221100', border: '1px solid #ff9900', color: '#ff9900', fontSize: '12px' }}>Data Analyst</span>
        </div>
      </div>
    </div>
  );
}