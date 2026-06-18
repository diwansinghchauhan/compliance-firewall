import React, { useState, useCallback } from 'react';
import {
  LayoutDashboard, GitBranch, AlertTriangle, Lock,
  Search, Download, Shield, ChevronUp, ChevronDown, Database, Plug
} from 'lucide-react';
import CommandCenter from './views/CommandCenter';
import Remediation from './views/Remediation';
import ConflictResolution from './views/ConflictResolution';
import AuditVault from './views/AuditVault';
import CodexLiveSync from './views/CodexLiveSync';
import IntegrationsHub from './views/IntegrationsHub';

const NAV_GROUPS = [
  {
    title: '1. Ingestion & Intelligence',
    items: [
      { id: 'hub',       label: 'Integrations & Channels', icon: Plug,            badge: null },
      { id: 'codex',     label: 'Codex Live Sync',         icon: Database,        badge: 'Live' },
    ]
  },
  {
    title: '2. Adjudication & Remediation',
    items: [
      { id: 'command',   label: 'Command Center',          icon: LayoutDashboard, badge: null },
      { id: 'pipeline',  label: 'AI Remediation Studio',   icon: GitBranch,       badge: '34' },
    ]
  },
  {
    title: '3. Human Escalation',
    items: [
      { id: 'conflict',  label: 'Conflict Resolution',     icon: AlertTriangle,   badge: '3' },
    ]
  },
  {
    title: '4. Forensics & Retention',
    items: [
      { id: 'vault',     label: 'Immutable Audit Vault',   icon: Lock,            badge: null },
    ]
  }
];

export default function App() {
  const [activeView, setActiveView] = useState('command');
  const [searchVal, setSearchVal] = useState('');

  const handleNav = useCallback((id) => setActiveView(id), []);

  const renderView = () => {
    switch (activeView) {
      case 'command':  return <CommandCenter />;
      case 'pipeline': return <Remediation />;
      case 'conflict': return <ConflictResolution />;
      case 'vault':    return <AuditVault />;
      case 'codex':    return <CodexLiveSync />;
      case 'hub':      return <IntegrationsHub />;
      default:         return <CommandCenter />;
    }
  };

  return (
    <div className="app-shell">
      {/* ---- Sidebar ---- */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="sidebar-logo-mark">
            <div className="logo-icon">
              <Shield size={16} color="#fff" strokeWidth={2.5} />
            </div>
            <div className="logo-text">
              <span className="logo-title">Compliance Firewall</span>
              <span className="logo-sub">Regulatory Vanguard v2.4.1</span>
            </div>
          </div>
        </div>

        <nav className="sidebar-nav">
          {NAV_GROUPS.map((group, i) => (
            <div key={i} style={{ marginBottom: '12px' }}>
              <div className="sidebar-section-label" style={{ marginBottom: '4px', paddingLeft: '12px', fontSize: '10px', color: '#8B949E', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                {group.title}
              </div>
              {group.items.map(({ id, label, icon: Icon, badge }) => (
                <div
                  key={id}
                  className={`nav-item ${activeView === id ? 'active' : ''}`}
                  onClick={() => handleNav(id)}
                >
                  <Icon size={15} className="nav-icon" />
                  <span>{label}</span>
                  {badge && <span className="nav-badge">{badge}</span>}
                </div>
              ))}
            </div>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="sidebar-user-pill">
            <div className="user-avatar">CS</div>
            <div className="user-info">
              <span className="user-name">Compliance Sovereign</span>
              <span className="user-role-tag">Super Admin</span>
            </div>
          </div>
        </div>
      </aside>

      {/* ---- Main Area ---- */}
      <div className="main-area">
        {/* Header */}
        <header className="header">
          <div className="header-workspace">
            <span className="workspace-label">Workspace:</span>
            <span className="workspace-name">Zenith Fintech</span>
          </div>
          <span className="workspace-sep">|</span>
          <span className="role-badge">Compliance Sovereign</span>

          <div className="header-search">
            <Search size={14} className="search-icon" />
            <input
              type="text"
              placeholder="Search assets, regulations, users…"
              value={searchVal}
              onChange={e => setSearchVal(e.target.value)}
              id="global-search"
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div className="status-indicator">
              <div className="status-dot live" />
              <span style={{ fontSize: '10px', color: '#6B7280' }}>Live</span>
            </div>
            <button className="btn btn-primary" id="export-audit-btn">
              <Download size={13} />
              Export Audit Report
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="content-area fade-in" key={activeView}>
          {renderView()}
        </main>
      </div>
    </div>
  );
}
