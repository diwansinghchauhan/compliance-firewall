import React, { useState } from 'react';
import { AlertTriangle, ArrowRight, Users, BookOpen, Scale, ChevronRight } from 'lucide-react';

const CONFLICTS = [
  {
    id: 'CFR-001',
    status: 'Unresolved',
    asset: 'AST-00410',
    assetName: 'BNPL Offer SMS Blast',
    sideA: {
      authority: 'CBN',
      label: 'CBN Requirement',
      statute: 'CBN Data Management Policy, 2021 — Section 12(b)',
      mandate: 'RETAIN',
      full: 'Financial institutions shall retain all consumer transaction data, communications, and consent logs for a minimum period of seven (7) years from the date of the last customer interaction. This obligation exists to facilitate regulatory examination, anti-money laundering audits, and dispute resolution under the AMLD Framework (2022).',
      impact: 'Deletion of any customer data record within the 7-year window constitutes a material regulatory breach and attracts a minimum administrative sanction of ₦50,000,000.',
      color: '#1D4ED8',
      bg: '#EFF6FF',
      borderColor: '#BFDBFE',
    },
    sideB: {
      authority: 'NDPC',
      label: 'NDPC Requirement',
      statute: 'Nigeria Data Protection Act, 2023 — Section 34(1)(c)',
      mandate: 'DELETE',
      full: 'Upon a valid and verified data erasure request from a data subject, the data controller shall cause the complete and irreversible deletion of all personal data pertaining to that subject within thirty (30) calendar days. No retention may be claimed on commercial grounds alone.',
      impact: 'Failure to action a valid erasure request within the stipulated 30-day period constitutes a violation of the data subject\'s fundamental rights and attracts regulatory sanction of up to 2% of annual gross revenue.',
      color: '#7E22CE',
      bg: '#FDF4FF',
      borderColor: '#E9D5FF',
    },
  },
  {
    id: 'CFR-002',
    status: 'Escalated',
    asset: 'AST-00408',
    assetName: 'Overdraft Activation Banner',
    sideA: {
      authority: 'CBN',
      label: 'CBN Requirement',
      statute: 'CBN Consumer Protection Framework, 2022 — §5.3',
      mandate: 'DISCLOSE',
      full: 'All consumer-facing credit communications must prominently display the Annual Percentage Rate (APR), total cost of credit, and any associated charges in the body of the communication prior to any call-to-action.',
      impact: 'Non-disclosure constitutes an unfair commercial practice and attracts immediate product suspension by the CBN Consumer Protection Department.',
      color: '#1D4ED8',
      bg: '#EFF6FF',
      borderColor: '#BFDBFE',
    },
    sideB: {
      authority: 'NDPC',
      label: 'NDPC Requirement',
      statute: 'NDPC Marketing Guidelines, 2024 — Sec 7',
      mandate: 'MINIMISE',
      full: 'Marketing communications must adhere to data minimisation principles. Pre-populating financial product offers with inferred consumer risk profiles (e.g., "You qualify for ₦X") without explicit prior consent for profiling is prohibited.',
      impact: 'Profiling-based personalisation in financial marketing without documented consent basis attracts immediate investigation and potential deregistration as a data processor.',
      color: '#7E22CE',
      bg: '#FDF4FF',
      borderColor: '#E9D5FF',
    },
  },
  {
    id: 'CFR-003',
    status: 'Pending',
    asset: 'AST-00406',
    assetName: 'Agent Network Commission Flyer',
    sideA: {
      authority: 'CBN',
      label: 'CBN Requirement',
      statute: 'CBN Agent Banking Guidelines, 2023 — Clause 9.1',
      mandate: 'PUBLISH',
      full: 'All agent commission structures, incentive schemes, and performance bonuses must be published in customer-accessible formats. Agents must display current fee schedules at physical points of service.',
      impact: 'Non-publication of commission structures is classified as misleading conduct and attracts administrative fines and potential agent network suspension.',
      color: '#1D4ED8',
      bg: '#EFF6FF',
      borderColor: '#BFDBFE',
    },
    sideB: {
      authority: 'NDPC',
      label: 'NDPC Requirement',
      statute: 'NDPC Act 2023 Sec 25 — Third Party Data Sharing',
      mandate: 'RESTRICT',
      full: 'Sharing customer transaction data with third-party agent networks for commission calculation purposes requires a lawful processing basis. Consent must be granular, specific, and revocable.',
      impact: 'Unauthorised sharing of personal data with agent networks for commission processing constitutes a data breach under Section 43 and triggers mandatory breach notification to the NDPC.',
      color: '#7E22CE',
      bg: '#FDF4FF',
      borderColor: '#E9D5FF',
    },
  },
];

const StatusBadge = ({ status }) => {
  const cfg = {
    'Unresolved': { cls: 'badge-interdicted' },
    'Escalated':  { cls: 'badge-escalated' },
    'Pending':    { cls: 'badge-pending' },
  };
  return <span className={`badge ${cfg[status]?.cls || 'badge-pending'}`}>● {status}</span>;
};

export default function ConflictResolution() {
  const [selected, setSelected] = useState(0);
  const [escalated, setEscalated] = useState({});

  const conflict = CONFLICTS[selected];

  const handleEscalate = () => {
    setEscalated(prev => ({ ...prev, [conflict.id]: true }));
  };

  return (
    <div>
      <div className="view-header">
        <h1 className="view-title">Regulatory Conflict Resolution</h1>
        <p className="view-subtitle">
          3 active regulatory conflicts · Requires human arbitration
        </p>
      </div>

      {/* Conflict selector */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        {CONFLICTS.map((c, i) => (
          <button
            key={c.id}
            className={`btn ${selected === i ? 'btn-primary' : 'btn-ghost'}`}
            id={`conflict-tab-${c.id}`}
            onClick={() => setSelected(i)}
            style={{ fontSize: '11px' }}
          >
            <AlertTriangle size={11} />
            {c.id}
            <StatusBadge status={c.status} />
          </button>
        ))}
      </div>

      {/* Asset info */}
      <div className="conflict-status-banner">
        <AlertTriangle size={15} style={{ color: '#D97706', flexShrink: 0 }} />
        <div>
          <div style={{ fontSize: '12px', fontWeight: 700, color: '#92400E' }}>
            Irreconcilable Regulatory Conflict Detected
          </div>
          <div className="conflict-status-text" style={{ marginTop: '2px' }}>
            Asset <span className="text-mono" style={{ color: '#1A56DB', fontWeight: 700 }}>{conflict.asset}</span> "{conflict.assetName}" cannot be auto-resolved.
            Two directly contradictory regulatory obligations prevent automated clearance.
          </div>
        </div>
      </div>

      {/* Side by side conflict */}
      <div className="conflict-grid" style={{ marginBottom: '16px' }}>
        {/* Side A */}
        <div className="conflict-card" style={{ border: `1px solid ${conflict.sideA.borderColor}` }}>
          <div className="conflict-card-header cbn" style={{
            background: conflict.sideA.bg,
            color: conflict.sideA.color,
            borderBottom: `2px solid ${conflict.sideA.borderColor}`,
          }}>
            <BookOpen size={13} />
            {conflict.sideA.label}
            <span style={{
              marginLeft: 'auto',
              background: conflict.sideA.color,
              color: '#fff',
              fontSize: '9px',
              fontWeight: 800,
              padding: '2px 7px',
              borderRadius: '4px',
              letterSpacing: '0.06em',
            }}>
              {conflict.sideA.mandate}
            </span>
          </div>
          <div className="conflict-card-body">
            <div className="reg-rule">
              <div className="reg-rule-label">Statute</div>
              <div className="reg-rule-cite">{conflict.sideA.statute}</div>
            </div>
            <div className="reg-rule">
              <div className="reg-rule-label">Regulatory Mandate</div>
              <div className="reg-rule-value">{conflict.sideA.full}</div>
            </div>
            <div className="reg-rule" style={{ marginBottom: 0 }}>
              <div className="reg-rule-label">Non-Compliance Impact</div>
              <div style={{
                fontSize: '11px',
                color: conflict.sideA.color,
                background: conflict.sideA.bg,
                padding: '8px',
                borderRadius: '6px',
                lineHeight: '1.6',
                marginTop: '4px',
              }}>
                {conflict.sideA.impact}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="conflict-divider">
          <div className="conflict-line" />
          <div className="vs-badge">VS</div>
          <div className="conflict-line" />
          <ArrowRight size={14} style={{ color: '#9CA3AF' }} />
        </div>

        {/* Side B */}
        <div className="conflict-card" style={{ border: `1px solid ${conflict.sideB.borderColor}` }}>
          <div className="conflict-card-header ndpc" style={{
            background: conflict.sideB.bg,
            color: conflict.sideB.color,
            borderBottom: `2px solid ${conflict.sideB.borderColor}`,
          }}>
            <BookOpen size={13} />
            {conflict.sideB.label}
            <span style={{
              marginLeft: 'auto',
              background: conflict.sideB.color,
              color: '#fff',
              fontSize: '9px',
              fontWeight: 800,
              padding: '2px 7px',
              borderRadius: '4px',
              letterSpacing: '0.06em',
            }}>
              {conflict.sideB.mandate}
            </span>
          </div>
          <div className="conflict-card-body">
            <div className="reg-rule">
              <div className="reg-rule-label">Statute</div>
              <div className="reg-rule-cite">{conflict.sideB.statute}</div>
            </div>
            <div className="reg-rule">
              <div className="reg-rule-label">Regulatory Mandate</div>
              <div className="reg-rule-value">{conflict.sideB.full}</div>
            </div>
            <div className="reg-rule" style={{ marginBottom: 0 }}>
              <div className="reg-rule-label">Non-Compliance Impact</div>
              <div style={{
                fontSize: '11px',
                color: conflict.sideB.color,
                background: conflict.sideB.bg,
                padding: '8px',
                borderRadius: '6px',
                lineHeight: '1.6',
                marginTop: '4px',
              }}>
                {conflict.sideB.impact}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action bar */}
      <div className="conflict-action-bar">
        <Scale size={16} style={{ color: '#D97706' }} />
        <div className="conflict-action-label">
          {escalated[conflict.id]
            ? <span style={{ color: '#059669', fontWeight: 600 }}>
                ✓ Escalated to Human Resolution — Ref: HR-{conflict.id}-2026. Assigned to Senior Compliance Counsel.
              </span>
            : <>
                This conflict requires a qualified legal opinion.
                Automated systems cannot resolve directly opposing legal obligations.
                A Senior Compliance Officer or external Counsel must arbitrate.
              </>
          }
        </div>
        <button
          className="btn btn-warning"
          id={`escalate-btn-${conflict.id}`}
          onClick={handleEscalate}
          disabled={!!escalated[conflict.id]}
          style={{ opacity: escalated[conflict.id] ? 0.6 : 1 }}
        >
          <Users size={13} />
          Escalate to Human Resolution
          <ChevronRight size={12} />
        </button>
      </div>
    </div>
  );
}
