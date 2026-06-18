import React, { useState } from 'react';
import { Brain, CheckCircle, Scale, XCircle, Zap, AlertTriangle } from 'lucide-react';

const VIOLATION_PARTS = [
  { text: "Dear Valued Customer,\n\nYou've been pre-approved for our " },
  { text: "ZERO-RISK GUARANTEED RETURNS", highlight: true, rule: 'FCCPA 2018 Sec 17(a) — Prohibition of misleading guarantees on financial products.' },
  { text: " investment product. Act now — this " },
  { text: "EXCLUSIVE LIMITED-TIME OFFER EXPIRES IN 24 HOURS", highlight: true, rule: 'FCCPA 2018 Sec 17(c) — Artificial urgency tactics that coerce consumer decisions.' },
  { text: ". With our Zenith Turbo Loan, you can access up to ₦5,000,000 at " },
  { text: "NO HIDDEN FEES — EVER", highlight: true, rule: 'CBN CPS 2021 §4.2(d) — False representation of fee structures.' },
  { text: ". Our " },
  { text: "AI-POWERED ALGORITHM has already pre-selected YOU", highlight: true, rule: 'NDPC Act 2023 Sec 8 — Unlawful profiling and automated decision-making disclosure.' },
  { text: " based on your spending habits. Simply tap below to unlock your funds instantly.\n\nDon't delay — " },
  { text: "failure to respond means you forfeit this offer permanently", highlight: true, rule: 'FCCPA 2018 Sec 17(e) — Coercive language designed to induce undue financial pressure.' },
  { text: ".\n\nZenith Fintech — Your Trusted Partner." },
];

const REASONING_ITEMS = [
  {
    cite: 'FCCPA 2018 Sec 17(a)',
    circular: 'Federal Competition and Consumer Protection Act',
    date: 'Jan 2019',
    text: 'The phrase "ZERO-RISK GUARANTEED RETURNS" constitutes a false or misleading guarantee. No retail financial product can guarantee returns; this violates Section 17(a) which explicitly prohibits deceptive product characterization.',
  },
  {
    cite: 'FCCPA 2018 Sec 17(c)',
    circular: 'Federal Competition and Consumer Protection Act',
    date: 'Jan 2019',
    text: '"LIMITED-TIME OFFER EXPIRES IN 24 HOURS" employs artificial urgency, a coercive sales practice. The CBN Consumer Protection Framework, §3.1, requires fair treatment and prohibits pressure tactics.',
  },
  {
    cite: 'CBN CPS 2021 §4.2(d)',
    circular: 'CBN Consumer Protection Regulations (Circular: FPR/DIR/GEN/CIR/06/014)',
    date: 'Mar 2021',
    text: '"NO HIDDEN FEES — EVER" is a demonstrably false fee representation given the 3.5% management fee and ₦500 processing charge documented in the product schedule. This constitutes material misrepresentation.',
  },
  {
    cite: 'NDPC Act 2023 Sec 8',
    circular: 'Nigeria Data Protection Act (Act No. 11)',
    date: 'Jun 2023',
    text: 'Reference to AI-based profiling ("AI-POWERED ALGORITHM has already pre-selected YOU") without disclosure of data processing basis or right to object violates automated decision-making provisions.',
  },
];

const SAFE_TEXT = `Dear Valued Customer,

We would like to introduce our Zenith Turbo Loan product, which may be available to you based on your account standing and eligibility criteria.

This product offers a loan of up to ₦5,000,000, subject to a standard 3.5% annual management fee and a ₦500 processing charge, as disclosed in the full product schedule available at zenithfintech.ng/terms.

This offer is available on a first-come, first-served basis. There is no obligation or penalty for declining. Full terms and conditions, including your right to a 14-day cooling-off period, are contained in the Key Features Document (KFD).

To review your eligibility or speak with an adviser, please visit our app or contact support at 0800-ZENITH.

Zenith Fintech — Regulated by the Central Bank of Nigeria.`;

export default function Remediation() {
  const [tooltipVisible, setTooltipVisible] = useState(null);
  const [approveState, setApproveState] = useState(null); // null | 'approved' | 'routed' | 'disputed'

  return (
    <div>
      <div className="view-header">
        <h1 className="view-title">Automated Remediation &amp; Reasoning</h1>
        <p className="view-subtitle">
          Asset <span className="text-mono" style={{ color: '#1A56DB' }}>AST-00412</span> · Q3 WhatsApp Loan Script · Interdicted 14:02 UTC
        </p>
      </div>

      {/* Action banner */}
      {approveState && (
        <div
          className="conflict-status-banner"
          style={{
            background: approveState === 'approved' ? '#ECFDF5' : approveState === 'routed' ? '#EEF2FF' : '#FEF2F2',
            borderColor: approveState === 'approved' ? '#A7F3D0' : approveState === 'routed' ? '#C7D2FE' : '#FECACA',
            marginBottom: '16px',
          }}
        >
          <span style={{
            fontSize: '12px',
            color: approveState === 'approved' ? '#065F46' : approveState === 'routed' ? '#3730A3' : '#991B1B',
            fontWeight: 600,
          }}>
            {approveState === 'approved' && '✓ Replacement text approved. Asset queued for re-clearance.'}
            {approveState === 'routed' && '↗ Asset routed to Legal Arbiter team. Ref: LA-2026-0417.'}
            {approveState === 'disputed' && '⚠ AI Decision disputed. Flagged for manual compliance review. Ref: MR-2026-0189.'}
          </span>
        </div>
      )}

      <div className="remediation-split">
        {/* ---- Left: The Violation ---- */}
        <div className="card panel-left">
          <div className="card-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="panel-label violation">⛔ The Violation</span>
              <span style={{ fontSize: '11px', color: '#6B7280' }}>5 infractions detected</span>
            </div>
            <span className="badge badge-interdicted">● Interdicted</span>
          </div>
          <div className="panel-scroll">
            {/* Violation text */}
            <div className="violation-text" style={{ position: 'relative' }}>
              {VIOLATION_PARTS.map((part, i) => {
                if (!part.highlight) {
                  return (
                    <span key={i} style={{ whiteSpace: 'pre-line' }}>{part.text}</span>
                  );
                }
                return (
                  <span
                    key={i}
                    className="highlight-red"
                    title={part.rule}
                    onMouseEnter={() => setTooltipVisible(i)}
                    onMouseLeave={() => setTooltipVisible(null)}
                    style={{ cursor: 'pointer' }}
                  >
                    {part.text}
                    {tooltipVisible === i && (
                      <span style={{
                        position: 'absolute',
                        bottom: '110%',
                        left: '0',
                        background: '#1F2937',
                        color: '#F9FAFB',
                        fontSize: '10px',
                        padding: '6px 10px',
                        borderRadius: '6px',
                        width: '240px',
                        lineHeight: '1.5',
                        zIndex: 100,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                        pointerEvents: 'none',
                      }}>
                        {part.rule}
                      </span>
                    )}
                  </span>
                );
              })}
            </div>

            {/* AI Reasoning Trail */}
            <div className="ai-reasoning">
              <div className="reasoning-title">
                <Brain size={12} />
                AI Reasoning Trail & Deep Citations
              </div>
              {REASONING_ITEMS.map((item, i) => (
                <div className="reasoning-item" key={i} style={{ flexDirection: 'column', gap: '6px', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div className="reasoning-dot" style={{ marginTop: 0 }} />
                    <span className="reasoning-cite">{item.cite}</span>
                    <span style={{ fontSize: '10px', color: '#6B7280' }}>
                      {item.circular} · <span style={{ color: '#059669', fontWeight: 600 }}>{item.date}</span>
                    </span>
                  </div>
                  <div className="reasoning-text" style={{ paddingLeft: '14px' }}>
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ---- Right: The Crucible ---- */}
        <div className="card panel-right">
          <div className="card-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="panel-label crucible">✦ The Crucible</span>
              <span style={{ fontSize: '11px', color: '#6B7280' }}>AI-generated safe replacement</span>
            </div>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '10px', color: '#059669', fontWeight: 600 }}>
              <Zap size={10} /> Generated in 1.2s
            </span>
          </div>
          <div className="panel-scroll">
            <div style={{ marginBottom: '12px' }}>
              <div style={{ fontSize: '10px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                Safe Replacement Language
              </div>
              <div className="safe-text-area" style={{ whiteSpace: 'pre-line' }}>
                {SAFE_TEXT}
              </div>
            </div>

            {/* Compliance score */}
            <div style={{
              padding: '10px 14px',
              background: '#F0FDF4',
              border: '1px solid #A7F3D0',
              borderRadius: '8px',
              marginBottom: '12px',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontSize: '10px', fontWeight: 600, color: '#065F46', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Predicted Compliance Score
                </span>
                <span style={{ fontSize: '16px', fontWeight: 800, color: '#059669' }}>97/100</span>
              </div>
              <div style={{ background: '#D1FAE5', borderRadius: '4px', height: '6px', overflow: 'hidden' }}>
                <div style={{ width: '97%', height: '100%', background: '#059669', borderRadius: '4px' }} />
              </div>
              <div style={{ fontSize: '10px', color: '#6B7280', marginTop: '5px' }}>
                Residual risk: Low · All FCCPA/CBN/NDPC provisions satisfied
              </div>
            </div>

            {/* Comparison diff */}
            <div style={{ fontSize: '10px', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600, marginBottom: '6px' }}>
              Infractions Resolved
            </div>
            {REASONING_ITEMS.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '6px' }}>
                <CheckCircle size={12} style={{ color: '#059669', marginTop: '2px', flexShrink: 0 }} />
                <span style={{ fontSize: '11px', color: '#374151' }}>
                  <span className="text-mono" style={{ fontSize: '10px', color: '#1A56DB', background: '#EEF2FF', padding: '1px 4px', borderRadius: '3px' }}>{item.cite}</span>
                  {' '}resolved
                </span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button
              className="btn btn-success"
              id="approve-replacement-btn"
              onClick={() => setApproveState('approved')}
            >
              <CheckCircle size={13} />
              Approve Replacement Text
            </button>
            <button
              className="btn btn-secondary"
              id="route-legal-btn"
              onClick={() => setApproveState('routed')}
            >
              <Scale size={13} />
              Route to Legal Arbiter
            </button>
            <button
              className="btn btn-danger"
              id="dispute-ai-btn"
              onClick={() => setApproveState('disputed')}
            >
              <XCircle size={13} />
              Dispute / Override AI Decision
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
