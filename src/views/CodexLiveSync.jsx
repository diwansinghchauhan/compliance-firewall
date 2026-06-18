import React from 'react';
import { Database, Globe, Zap, Activity, CheckCircle, Shield, FileText, Brain, UserCheck, Clock } from 'lucide-react';

const COVERAGE_DATA = [
  { body: 'Central Bank of Nigeria (CBN)', abbr: 'CBN', count: 412, color: '#1A56DB', bg: '#EEF2FF' },
  { body: 'Federal Competition and Consumer Protection', abbr: 'FCCPC', count: 189, color: '#059669', bg: '#ECFDF5' },
  { body: 'Securities and Exchange Commission', abbr: 'SEC', count: 215, color: '#7E22CE', bg: '#FDF4FF' },
  { body: 'Nigeria Data Protection Commission', abbr: 'NDPC', count: 94, color: '#D97706', bg: '#FFFBEB' },
  { body: 'National Information Technology Dev Agency', abbr: 'NITDA', count: 104, color: '#0EA5E9', bg: '#F0F9FF' },
  { body: 'National Insurance Commission', abbr: 'NAICOM', count: 88, color: '#BE185D', bg: '#FDF2F8' },
  { body: 'Nigerian Communications Commission', abbr: 'NCC', count: 132, color: '#4338CA', bg: '#EEF2FF' },
  { body: 'Other Authorities (NERC, NCAA, etc.)', abbr: 'MIXED', count: 67, color: '#6B7280', bg: '#F3F4F6' },
];

const INGESTION_FEED = [
  {
    id: 'CBN/DIR/2026/05',
    title: 'Revised Open Banking Authentication Guidelines',
    body: 'CBN',
    aiStatus: 'Extracted & Mapped',
    qaStatus: 'Pending Review',
    qaType: 'warn',
    elapsed: '2h 14m ago'
  },
  {
    id: 'NDPC/GL/26-001',
    title: 'Biometric Data Retention Standards v2',
    body: 'NDPC',
    aiStatus: 'Indexed & Scored',
    qaStatus: 'Approved by Reg-Intel',
    qaType: 'success',
    elapsed: '18h 42m ago'
  },
  {
    id: 'FCCPC/MR/26-11',
    title: 'Digital Lending Pricing Transparency Order',
    body: 'FCCPC',
    aiStatus: 'Parsing NLP (In Progress)',
    qaStatus: 'Awaiting AI Completion',
    qaType: 'pending',
    elapsed: '14m ago'
  },
  {
    id: 'SEC/CIR/2026/02',
    title: 'Digital Asset Custody Requirements',
    body: 'SEC',
    aiStatus: 'Indexed & Scored',
    qaStatus: 'Approved by Reg-Intel',
    qaType: 'success',
    elapsed: '34h 10m ago'
  },
  {
    id: 'NITDA/REG/26',
    title: 'Cloud Infrastructure Sovereignty Rule',
    body: 'NITDA',
    aiStatus: 'Conflict Detected (Escalated)',
    qaStatus: 'Under Legal Arbitration',
    qaType: 'danger',
    elapsed: '41h 05m ago'
  }
];

export default function CodexLiveSync() {
  const totalRegs = COVERAGE_DATA.reduce((acc, curr) => acc + curr.count, 0);

  return (
    <div>
      <div className="view-header">
        <h1 className="view-title">Codex Live Sync Engine</h1>
        <p className="view-subtitle" style={{ lineHeight: '1.5', maxWidth: '800px', marginTop: '8px' }}>
          <strong>The Jurisprudential Brain of the Firewall.</strong> Before Vanguard can scan a marketing email or intercept a loan script, it must know the law. 
          The Codex is the living, breathing rulebook that continuously ingests mandates from the CBN, NDPC, and FCCPC. 
          <span style={{ color: '#1A56DB', fontWeight: 600 }}> Vanguard never guesses—every decision is anchored in active jurisprudence.</span>
        </p>
      </div>

      <div className="metrics-row" style={{ gridTemplateColumns: '1fr 1fr' }}>
        <div className="card" style={{ display: 'flex', alignItems: 'center', padding: '24px', gap: '20px' }}>
            <div style={{ background: '#EEF2FF', padding: '16px', borderRadius: '50%' }}>
                <Activity size={32} style={{ color: '#1A56DB' }} />
            </div>
            <div>
                <div style={{ fontSize: '11px', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Engine Status</div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#111827', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    Fully Operational
                    <div className="status-dot live" style={{ width: '10px', height: '10px' }} />
                </div>
                <div style={{ fontSize: '12px', color: '#4B5563', marginTop: '4px' }}>
                    Continuous 24/7 monitoring across 14 regulatory bodies
                </div>
            </div>
        </div>

        <div className="card" style={{ display: 'flex', alignItems: 'center', padding: '24px', gap: '20px' }}>
            <div style={{ background: '#ECFDF5', padding: '16px', borderRadius: '50%' }}>
                <Database size={32} style={{ color: '#059669' }} />
            </div>
            <div>
                <div style={{ fontSize: '11px', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Total Regulatory Inventory</div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#111827' }}>
                    {totalRegs.toLocaleString()} Active Regulations
                </div>
                <div style={{ fontSize: '12px', color: '#4B5563', marginTop: '4px' }}>
                    Deeply mapped with sections, mandates, and enforcement precedents
                </div>
            </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '20px' }}>
        
        {/* Left Col: Live Ingestion Feed */}
        <div className="card">
            <div className="card-header">
                <span className="card-title">
                    <Zap size={12} style={{ display: 'inline', marginRight: '5px' }} />
                    Live Ingestion & Review Pipeline (24-48hr SLA)
                </span>
                <span style={{ fontSize: '11px', color: '#6B7280' }}>AI Heavy Lifting + Human QA</span>
            </div>
            <div className="card-body" style={{ padding: 0 }}>
                <div className="data-table-wrap">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Document</th>
                                <th><Brain size={10} style={{ display: 'inline', marginRight: 4 }}/> AI Ingestion Stage</th>
                                <th><UserCheck size={10} style={{ display: 'inline', marginRight: 4 }}/> Human QA Review</th>
                                <th><Clock size={10} style={{ display: 'inline', marginRight: 4 }}/> Detected</th>
                            </tr>
                        </thead>
                        <tbody>
                            {INGESTION_FEED.map((item, idx) => (
                                <tr key={idx}>
                                    <td>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                                            <span style={{ fontSize: '12px', fontWeight: 600, color: '#111827' }}>{item.title}</span>
                                            <span className="text-mono" style={{ fontSize: '10px', color: '#6B7280' }}>{item.id} · {item.body}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span style={{ fontSize: '11px', color: '#4B5563', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                            {item.aiStatus.includes('Parsing') && <div className="status-dot live" style={{ width: 6, height: 6 }} />}
                                            {item.aiStatus}
                                        </span>
                                    </td>
                                    <td>
                                        <span className={`badge badge-${item.qaType === 'warn' ? 'escalated' : item.qaType === 'success' ? 'absolved' : item.qaType === 'danger' ? 'interdicted' : 'pending'}`} style={{ fontSize: '9px' }}>
                                            {item.qaStatus}
                                        </span>
                                    </td>
                                    <td style={{ fontSize: '11px', color: '#6B7280', whiteSpace: 'nowrap' }}>
                                        {item.elapsed}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        {/* Right Col: Codex Coverage Map */}
        <div className="card">
            <div className="card-header">
                <span className="card-title">
                    <Globe size={12} style={{ display: 'inline', marginRight: '5px' }} />
                    Codex Coverage Map
                </span>
            </div>
            <div className="card-body">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {COVERAGE_DATA.map((item, idx) => (
                        <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontSize: '11px', fontWeight: 600, color: '#374151' }}>{item.abbr}</span>
                                <span style={{ fontSize: '11px', fontWeight: 700, color: item.color }}>{item.count} regs</span>
                            </div>
                            <div style={{ height: '6px', background: '#F3F4F6', borderRadius: '4px', overflow: 'hidden' }}>
                                <div style={{ width: `${(item.count / 412) * 100}%`, height: '100%', background: item.color, borderRadius: '4px' }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}
