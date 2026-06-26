import React from 'react';

export default function SkillsMatrix() {
  const vectors = [
    { name: "Network Infrastructure Security", level: 90, desc: "VLAN Isolation, Wireshark Deep Packet Inspection, Router Hardening" },
    { name: "Offensive Penetration Testing", level: 85, desc: "Metasploit deployment, vulnerability mapping, reverse engineering" },
    { name: "Full-Stack System Engineering", level: 88, desc: "React Frontend Systems, REST APIs, Microservices with Node.js" },
    { name: "Linux Systems Administration", level: 92, desc: "Bash automation scripts, secure access protocols, permissions architecture" },
    { name: "Data Analytics & Integrity", level: 80, desc: "Threat tracking patterns, localized curriculum metric analysis" }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {vectors.map((vector, idx) => (
        <div key={idx} className="neon-border" style={{ padding: '20px', backgroundColor: '#0a0a0a' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontWeight: 'bold', color: '#00ff66' }}>{vector.name}</span>
            <span style={{ color: '#00ccff' }}>{vector.level}% EFFECTIVENESS</span>
          </div>
          <div style={{ width: '100%', height: '8px', backgroundColor: '#001105', border: '1px solid #003311', marginBottom: '10px' }}>
            <div style={{ width: `${vector.level}%`, height: '100%', backgroundColor: '#00ff66' }}></div>
          </div>
          <p style={{ margin: 0, fontSize: '12px', color: '#aaa' }}>{vector.desc}</p>
        </div>
      ))}
    </div>
  );
}