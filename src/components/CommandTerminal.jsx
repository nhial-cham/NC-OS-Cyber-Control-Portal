import React, { useState, useRef, useEffect } from 'react';

export default function CommandTerminal() {
  const [history, setHistory] = useState([
    { text: "Type 'help' to fetch a index of authorized telemetry options.", type: "system" }
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  const executeCommand = (cmd) => {
    const cleanCmd = cmd.trim().toLowerCase();
    let response = [];

    switch(cleanCmd) {
      case 'help':
        response = [
          { text: "Authorized Commands:", type: "system" },
          { text: "  whoami   - Displays current authenticated user info", type: "output" },
          { text: "  skills   - Lists primary operational capabilities", type: "output" },
          { text: "  status   - Current server health & node telemetry", type: "output" },
          { text: "  clear    - Purges current terminal print buffer", type: "output" }
        ];
        break;
      case 'whoami':
        response = [
          { text: "USER: Nhial Cham", type: "output" },
          { text: "ROLE: Cyber Security Specialist / Full-Stack Engineer", type: "output" },
          { text: "AFFILIATION: University of Juba Cyber Security Club Leader", type: "output" },
          { text: "LOCATION: Juba, Central Equatoria, South Sudan", type: "output" }
        ];
        break;
      case 'skills':
        response = [
          { text: "[*] Penetration Testing: Kali Linux, Metasploit, Nmap, Wireshark", type: "output" },
          { text: "[*] Engineering: React, Node.js, Express, JavaScript, Databases", type: "output" },
          { text: "[*] Architecture: Linux Admin, Hardened Networks, Firewall Scripting", type: "output" }
        ];
        break;
      case 'status':
        response = [
          { text: "CORE TEMPERATURE: 41°C [NOMINAL]", type: "output" },
          { text: "UPLINK STABILITY: 98.7%", type: "output" },
          { text: "INTEGRITY INTRUSION ATTEMPTS: 0 CURRENTLY ACTIVE", type: "output" }
        ];
        break;
      case 'clear':
        setHistory([]);
        return;
      default:
        response = [{ text: `Error: Command unknown: '${cmd}'. Access Denied.`, type: "error" }];
    }

    setHistory(prev => [...prev, { text: `nhial@nc-soc:~$ ${cmd}`, type: "command" }, ...response]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    executeCommand(input);
    setInput("");
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <div className="neon-border" style={{ backgroundColor: '#000', height: '500px', display: 'flex', flexDirection: 'column', padding: '16px' }}>
      <div style={{ flex: 1, overflowY: 'auto', marginBottom: '12px', fontSize: '14px', lineHeight: '1.5' }}>
        {history.map((line, i) => (
          <div key={i} style={{ 
            color: line.type === 'command' ? '#00ccff' : line.type === 'error' ? '#ff3333' : line.type === 'system' ? '#ffaa00' : '#00ff66',
            marginBottom: '4px'
          }}>
            {line.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', borderTop: '1px solid #003311', paddingTop: '10px' }}>
        <span style={{ color: '#00ccff', marginRight: '8px' }}>nhial@nc-soc:~$</span>
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
          style={{ flex: 1, background: 'transparent', border: 'none', color: '#00ff66', outline: 'none', fontFamily: "'Fira Code', monospace", fontSize: '14px' }}
        />
      </form>
    </div>
  );
}