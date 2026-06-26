import React, { useState, useEffect } from 'react';

export default function SecurityLogs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const rawEvents = [
      "INTRUSION DETECTION: Blocked brute-force attempt on port 22 from 192.168.1.105",
      "INTEGRITY ALERT: XSS injection string detected and scrubbed in payload parse buffer",
      "SYSTEM STATUS: Port 443 load mitigation profile successfully deployed",
      "NETWORK METRIC: Firewall routed 1,202 encrypted egress payloads securely",
      "AUDIT TRAIL: Routine health audit completed across University node infrastructure"
    ];

    const generateLog = () => {
      const stamp = new Date().toISOString().slice(11, 19);
      const chosenEvent = rawEvents[Math.floor(Math.random() * rawEvents.length)];
      return `[${stamp}] ${chosenEvent}`;
    };

    setLogs([generateLog(), generateLog(), generateLog()]);

    const interval = setInterval(() => {
      setLogs(prev => [generateLog(), ...prev.slice(0, 14)]);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="neon-border" style={{ backgroundColor: '#000', padding: '20px', minHeight: '400px' }}>
      <h3 style={{ margin: '0 0 16px 0', color: '#ffaa00', fontSize: '15px' }}>🚨 LIVE PACKET HUB MONITOR</h3>
      <div style={{ fontFamily: "'Fira Code', monospace", fontSize: '13px', lineHeight: '1.8', color: '#00ff66' }}>
        {logs.map((log, index) => (
          <div key={index} style={{ borderBottom: '1px solid #001105', padding: '6px 0' }}>
            <span style={{ color: '#888', marginRight: '10px' }}>&gt;</span> {log}
          </div>
        ))}
      </div>
    </div>
  );
}