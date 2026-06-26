import React, { useState } from 'react';
import BootScreen from './components/BootScreen';
import Sidebar from './layout/Sidebar';
import DashboardHome from './components/DashboardHome';
import CommandTerminal from './components/CommandTerminal';
import SkillsMatrix from './components/SkillsMatrix';
import CaseFiles from './components/CaseFiles';
import SecurityLogs from './components/SecurityLogs';
import ContactUplink from './components/ContactUplink';

export default function App() {
  const [isBooted, setIsBooted] = useState(false);
  const [activeView, setActiveView] = useState('dashboard');

  if (!isBooted) {
    return <BootScreen onBootComplete={() => setIsBooted(true)} />;
  }

  return (
    <div className="crt-effect" style={{ display: 'flex', backgroundColor: '#050505', minHeight: '100vh', width: '100vw' }}>
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      
      <main style={{ flex: 1, padding: '40px', boxSizing: 'border-box', overflowY: 'auto', height: '100vh' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', borderBottom: '1px solid #003311', paddingBottom: '16px' }}>
          <h1 style={{ margin: 0, fontSize: '22px', fontWeight: 'bold', color: '#00ff66', textShadow: '0 0 5px #00ff66' }}>
            SYSTEM COMMAND PORTAL // {activeView.toUpperCase()}
          </h1>
          <div style={{ fontSize: '11px', color: '#00ccff', border: '1px solid #00ccff', padding: '4px 10px' }}>
            SECURE ACCESS LAYER V2
          </div>
        </header>

        <div>
          {activeView === 'dashboard' && <DashboardHome />}
          {activeView === 'terminal' && <CommandTerminal />}
          {activeView === 'skills' && <SkillsMatrix />}
          {activeView === 'projects' && <CaseFiles />}
          {activeView === 'logs' && <SecurityLogs />}
          {activeView === 'contact' && <ContactUplink />}
        </div>
      </main>
    </div>
  );
}