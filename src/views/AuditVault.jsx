import React, { useState, useMemo } from 'react';
import { Lock, Shield, Hash, ChevronUp, ChevronDown, ChevronsUpDown, Filter, Download } from 'lucide-react';

const AUDIT_DATA = [
  {
    id: 'EVT-209441',
    ts: '2026-06-17T14:02:33.871Z',
    action: 'Asset Interdicted by AI Engine',
    actor: 'AI Engine v2.4',
    type: 'ai',
    asset: 'AST-00412',
    hash: '8f434346648f6b96df89dda901c5176b10a6d83e45e2bfe896b130d7f4d6f3a1',
  },
  {
    id: 'EVT-209440',
    ts: '2026-06-17T13:58:14.002Z',
    action: 'Human Override by Tosin A.',
    actor: 'Tosin Adeyemi',
    type: 'human',
    asset: 'AST-00409',
    hash: 'a3f1c9e245b87d6012fe3a9d8c7b514e9f2a8046d3e7c1b5f6d4e2a9c8b70312',
  },
  {
    id: 'EVT-209439',
    ts: '2026-06-17T13:47:22.519Z',
    action: 'Replacement Text Approved',
    actor: 'Compliance Sovereign',
    type: 'human',
    asset: 'AST-00411',
    hash: 'c7e2a4b89f1d3e56078a2c9b14d7f3e8a5c6b2d4e9f1a3c7b5d2e8f0a4c6b1d3',
  },
  {
    id: 'EVT-209438',
    ts: '2026-06-17T13:31:09.774Z',
    action: 'Escalated to Conflict Queue',
    actor: 'AI Engine v2.4',
    type: 'ai',
    asset: 'AST-00410',
    hash: 'd4b2a7e9c1f3b568091a4d7e2c8f5b3a0e6c9d1b7f4a2e8c0b5d3f1a9e7c4b2d',
  },
  {
    id: 'EVT-209437',
    ts: '2026-06-17T13:15:47.341Z',
    action: 'Escalated to Human Resolution',
    actor: 'Compliance Sovereign',
    type: 'human',
    asset: 'AST-00410',
    hash: 'e9c3f1a7b5d2e80431b9f6a2c4d7e1b3f5a8c0d2b7e4f6a1c9d3b5e7f2a4c8b0',
  },
  {
    id: 'EVT-209436',
    ts: '2026-06-17T12:55:31.208Z',
    action: 'Asset Cleared — Absolved',
    actor: 'AI Engine v2.4',
    type: 'ai',
    asset: 'AST-00409',
    hash: 'f1a9d3e7c5b2f40821c7e4a6b9d1f3e5a7c0d2b4e6f8a1c3d5e7b9f2a4c6d8e0',
  },
  {
    id: 'EVT-209435',
    ts: '2026-06-17T12:44:18.993Z',
    action: 'Compliance Report Exported',
    actor: 'Fatimah B.',
    type: 'human',
    asset: 'REPORT-Q2-2026',
    hash: '0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1',
  },
  {
    id: 'EVT-209434',
    ts: '2026-06-17T12:20:05.617Z',
    action: 'Asset Interdicted by AI Engine',
    actor: 'AI Engine v2.4',
    type: 'ai',
    asset: 'AST-00408',
    hash: '2c4e6f8a0b1c3d5e7f9a1b2c4d6e8f0a2b3c5d7e9f1a2b4c6d8e0f2a3b5c7d9',
  },
  {
    id: 'EVT-209433',
    ts: '2026-06-17T11:58:49.122Z',
    action: 'Asset Submitted for Pre-Clearance',
    actor: 'System · Ingestion Pipeline',
    type: 'system',
    asset: 'AST-00407',
    hash: '3d5f7a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7',
  },
  {
    id: 'EVT-209432',
    ts: '2026-06-17T11:45:33.887Z',
    action: 'Dispute Filed by Emeka O.',
    actor: 'Emeka Okafor',
    type: 'human',
    asset: 'AST-00406',
    hash: '4e6f8a0b2c3d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0',
  },
  {
    id: 'EVT-209431',
    ts: '2026-06-17T11:30:17.554Z',
    action: 'Asset Cleared — Absolved',
    actor: 'AI Engine v2.4',
    type: 'ai',
    asset: 'AST-00406',
    hash: '5f7a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8',
  },
  {
    id: 'EVT-209430',
    ts: '2026-06-17T10:44:02.231Z',
    action: 'Asset Interdicted by AI Engine',
    actor: 'AI Engine v2.4',
    type: 'ai',
    asset: 'AST-00405',
    hash: '6a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8',
  },
  {
    id: 'EVT-209429',
    ts: '2026-06-17T10:22:55.908Z',
    action: 'Remediation Text Generated',
    actor: 'AI Engine v2.4',
    type: 'ai',
    asset: 'AST-00405',
    hash: '7b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9',
  },
  {
    id: 'EVT-209428',
    ts: '2026-06-17T09:59:44.701Z',
    action: 'User Login — Session Initiated',
    actor: 'Tosin Adeyemi',
    type: 'system',
    asset: 'SYS-AUTH',
    hash: '8c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0',
  },
];

const formatTs = (iso) => {
  const d = new Date(iso);
  const date = d.toISOString().split('T')[0];
  const time = d.toISOString().split('T')[1].replace('Z', '');
  return { date, time };
};

const ActionCell = ({ action, type }) => {
  const cls = type === 'human' ? 'action-cell-human' : type === 'ai' ? 'action-cell-ai' : 'action-cell-system';
  return <span className={cls}>{action}</span>;
};

export default function AuditVault() {
  const [sortCol, setSortCol] = useState('ts');
  const [sortDir, setSortDir] = useState('desc');
  const [filterType, setFilterType] = useState('all');

  const filtered = useMemo(() => {
    return AUDIT_DATA.filter(r => filterType === 'all' || r.type === filterType);
  }, [filterType]);

  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      const av = a[sortCol] ?? '';
      const bv = b[sortCol] ?? '';
      if (av < bv) return sortDir === 'asc' ? -1 : 1;
      if (av > bv) return sortDir === 'asc' ? 1 : -1;
      return 0;
    });
  }, [filtered, sortCol, sortDir]);

  const handleSort = (col) => {
    if (sortCol === col) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    else { setSortCol(col); setSortDir('asc'); }
  };

  const SortIcon = ({ col }) => {
    if (sortCol !== col) return <ChevronsUpDown size={10} style={{ opacity: 0.3, marginLeft: 3 }} />;
    return sortDir === 'asc'
      ? <ChevronUp size={10} style={{ color: '#1A56DB', marginLeft: 3 }} />
      : <ChevronDown size={10} style={{ color: '#1A56DB', marginLeft: 3 }} />;
  };

  return (
    <div>
      <div className="view-header">
        <h1 className="view-title">Immutable Evidence Vault</h1>
        <p className="view-subtitle">
          Tamper-proof forensic ledger · SHA-256 integrity verified · {AUDIT_DATA.length} records
        </p>
      </div>

      {/* Vault security header */}
      <div className="vault-header-bar">
        <div className="vault-seal">
          <div className="vault-seal-dot" />
          <Lock size={13} />
          <span className="vault-seal-text">IMMUTABLE LEDGER — SHA-256 VERIFIED</span>
        </div>
        <div style={{ display: 'flex', gap: '20px', fontSize: '11px', color: '#8B949E' }}>
          <span>
            <span style={{ color: '#3B82F6', fontWeight: 600 }}>Chain ID:</span> 0xA7F3D0-ZF-2026
          </span>
          <span>
            <span style={{ color: '#3B82F6', fontWeight: 600 }}>Merkle Root:</span>
            <span className="text-mono" style={{ fontSize: '10px', marginLeft: 4 }}>9f4e7a2c...</span>
          </span>
          <span>
            <span style={{ color: '#3B82F6', fontWeight: 600 }}>Last Block:</span> 2026-06-17T14:02:33Z
          </span>
        </div>
        <div className="vault-immutable-badge">READ-ONLY · NO DELETIONS PERMITTED</div>
      </div>

      {/* Security notice */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '10px 14px',
        background: '#FEF2F2',
        border: '1px solid #FECACA',
        borderRadius: '8px',
        marginBottom: '16px',
      }}>
        <Shield size={14} style={{ color: '#DC2626', flexShrink: 0 }} />
        <span style={{ fontSize: '11px', color: '#991B1B', fontWeight: 500, lineHeight: '1.5' }}>
          <strong>Security Constraint:</strong> This vault is cryptographically sealed. All records are append-only and enforced by a <strong>7-year minimum retention lock</strong> in compliance with Nigerian financial regulations.
          Even administrators cannot modify or delete records. All system access is logged as a new immutable entry.
        </span>
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
        <Filter size={13} style={{ color: '#6B7280' }} />
        <span style={{ fontSize: '11px', color: '#6B7280', fontWeight: 600 }}>Filter by Actor Type:</span>
        {['all', 'human', 'ai', 'system'].map(t => (
          <button
            key={t}
            className={`btn ${filterType === t ? 'btn-primary' : 'btn-ghost'}`}
            style={{ height: '28px', fontSize: '11px', textTransform: 'capitalize' }}
            onClick={() => setFilterType(t)}
            id={`vault-filter-${t}`}
          >
            {t === 'all' ? 'All Events' : t === 'human' ? '👤 Human' : t === 'ai' ? '🤖 AI' : '⚙ System'}
          </button>
        ))}
        <span style={{ marginLeft: 'auto', fontSize: '11px', color: '#6B7280' }}>
          {sorted.length} events shown
        </span>
        <button className="btn btn-ghost" style={{ height: '28px', fontSize: '11px' }} id="vault-export-btn">
          <Download size={11} style={{ marginRight: '4px' }} /> Export Regulator Report (PDF/Excel)
        </button>
      </div>

      {/* Audit Table */}
      <div className="card">
        <div className="card-header">
          <span className="card-title">
            <Hash size={12} style={{ display: 'inline', marginRight: 5 }} />
            Forensic Event Log
          </span>
          <span style={{ fontSize: '10px', color: '#6B7280', fontFamily: 'JetBrains Mono, monospace' }}>
            No DELETE or EDIT operations permitted on this view
          </span>
        </div>
        <div className="card-body" style={{ padding: 0 }}>
          <div className="data-table-wrap">
            <table className="data-table" id="audit-vault-table">
              <thead>
                <tr>
                  <th>Event ID</th>
                  <th onClick={() => handleSort('ts')} className={sortCol === 'ts' ? 'sort-active' : ''}>
                    Exact Timestamp <SortIcon col="ts" />
                  </th>
                  <th onClick={() => handleSort('action')} className={sortCol === 'action' ? 'sort-active' : ''}>
                    User / System Action <SortIcon col="action" />
                  </th>
                  <th onClick={() => handleSort('actor')} className={sortCol === 'actor' ? 'sort-active' : ''}>
                    Actor <SortIcon col="actor" />
                  </th>
                  <th onClick={() => handleSort('asset')} className={sortCol === 'asset' ? 'sort-active' : ''}>
                    Asset ID <SortIcon col="asset" />
                  </th>
                  <th>
                    Cryptographic Hash (SHA-256)
                  </th>
                </tr>
              </thead>
              <tbody>
                {sorted.map(row => {
                  const { date, time } = formatTs(row.ts);
                  return (
                    <tr key={row.id}>
                      <td>
                        <span className="timestamp-cell" style={{ color: '#6B7280' }}>{row.id}</span>
                      </td>
                      <td>
                        <div className="timestamp-cell">{date}</div>
                        <div className="timestamp-cell" style={{ color: '#9CA3AF' }}>{time}</div>
                      </td>
                      <td>
                        <ActionCell action={row.action} type={row.type} />
                      </td>
                      <td>
                        <span style={{ fontSize: '12px', color: '#374151' }}>{row.actor}</span>
                      </td>
                      <td>
                        <span className="asset-id-cell">{row.asset}</span>
                      </td>
                      <td>
                        <span
                          className="hash-cell"
                          title={row.hash}
                          style={{ display: 'block', maxWidth: '260px', overflow: 'hidden', textOverflow: 'ellipsis' }}
                        >
                          {row.hash}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
