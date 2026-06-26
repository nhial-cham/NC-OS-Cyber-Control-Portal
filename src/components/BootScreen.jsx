import React, { useState, useEffect } from 'react';

export default function BootScreen({ onBootComplete }) {
  const [logs, setLogs] = useState([]);
  const [progress, setProgress] = useState(0);

  const bootSequences = [
    "INITIALIZING NC-OS V4.2.6...",
    "LOADING KERNEL MODULES...",
    "SETTING UP IPV6 FIREWALL TABLES... [OK]",
    "ESTABLISHING SECURE VPN TUNNEL TO JUBA_NODE_01...",
    "MOUNTING ENCRYPTED FILE SYSTEM (/dev/sda2)...",
    "STARTING INTENT EXTRACTION & PACKET SNIFFER...",
    "INJECTING METASPLOIT PAYLOAD DEFINITIONS...",
    "BYPASSING LOCAL PROXY GATEWAYS...",
    "ACCESS GRANTED: WELCOME OPERATIVE NHIAL CHAM."
  ];

  useEffect(() => {
    let currentLogIndex = 0;
    const logInterval = setInterval(() => {
      if (currentLogIndex < bootSequences.length) {
        setLogs(prev => [...prev, bootSequences[currentLogIndex]]);
        currentLogIndex++;
      }
    }, 450);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(logInterval);
          setTimeout(() => onBootComplete(), 600); // Smooth handoff
          return 100;
        }
        return prev + 4;
      });
    }, 100);

    return () => {
      clearInterval(logInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div style={{ backgroundColor: '#050505', color: '#00ff66', height: '100vh', width: '100vw', padding: '40px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ fontSize: '14px', lineHeight: '1.8', maxWidth: '800px' }}>
        {logs.map((log, index) => (
          <div key={index} style={{ marginBottom: '4px' }}>
            <span style={{ color: '#00ccff' }}>[+]</span> {log}
          </div>
        ))}
        <span style={{ animation: 'pulse 1s infinite' }}>_</span>
      </div>
      
      <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '12px' }}>
          <span>DECRYPTING INTERFACE ARCHITECTURE</span>
          <span>{progress}%</span>
        </div>
        <div style={{ width: '100%', height: '12px', border: '1px solid #00ff66', padding: '2px', boxSizing: 'border-box' }}>
          <div style={{ width: `${progress}%`, height: '100%', backgroundColor: '#00ff66', transition: 'width 0.1s linear' }}></div>
        </div>
      </div>
    </div>
  );
}