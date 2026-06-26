import React from 'react';

export default function CaseFiles() {
  const projects = [
    {
      id: "CASE-001",
      title: "JubaShop E-Commerce Core Engine",
      stack: "React / Node.js / Databases",
      details: "An architectural full-stack retail grid engineered specifically for performance and strict input parsing safety barriers."
    },
    {
      id: "CASE-002",
      title: "University of Juba Cyber Club Learning System",
      stack: "Linux / Architecture / NetSec",
      details: "A comprehensive, 12-week modular framework designed to take members from basic command line mastery to core advanced vector exploits."
    },
    {
      id: "CASE-003",
      title: "Digital War Room and Interactive Portfolio",
      stack: "NC-OS V4.2.6 Command Portal",
      details: " A high-impact, custom-built Cyber Command Center portfolio and teaching sandbox."
    }
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
      {projects.map((proj) => (
        <div key={proj.id} className="neon-border" style={{ padding: '20px', backgroundColor: '#0a0a0a', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '12px', right: '12px', color: '#ff3333', fontSize: '11px', border: '1px solid #ff3333', padding: '2px 6px' }}>
            CLASSIFIED
          </div>
          <div style={{ color: '#888', fontSize: '11px', marginBottom: '4px' }}>{proj.id}</div>
          <h4 style={{ margin: '0 0 8px 0', color: '#00ff66', fontSize: '16px' }}>{proj.title}</h4>
          <div style={{ fontSize: '12px', color: '#00ccff', marginBottom: '12px' }}>STACK: {proj.stack}</div>
          <p style={{ margin: 0, fontSize: '13px', color: '#bbb', lineHeight: '1.5' }}>{proj.details}</p>
        </div>
      ))}
    </div>
  );
}