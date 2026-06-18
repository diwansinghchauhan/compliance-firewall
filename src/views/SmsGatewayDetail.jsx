import React from 'react';
import { MessageSquare, ArrowLeft, ShieldAlert, CheckCircle, Clock } from 'lucide-react';

const SMS_CAMPAIGNS = [
  {
    id: 'SMS-2026-991',
    audience: 'Inactive Users (30+ days)',
    status: 'Blocked by AI',
    time: 'Just now',
    texts: [
      { sender: 'Zenith', text: 'Urgent: Your pre-approved 5M Naira loan will be cancelled in exactly 1 hour. Click zen.ng/claim NOW to avoid losing your funds permanently.' }
    ],
    flags: [
      'FCCPA 2018 Sec 17(c) — Artificial Urgency ("cancelled in exactly 1 hour")',
      'FCCPA 2018 Sec 17(e) — Coercive language ("avoid losing your funds permanently")'
    ]
  },
  {
    id: 'SMS-2026-990',
    audience: 'Gold Tier Customers',
    status: 'Cleared',
    time: '2 hours ago',
    texts: [
      { sender: 'Zenith', text: 'Hi Gold Member, our new Turbo Loan is available with a 3.5% management fee. Tap zen.ng/turbo to view full terms and apply.' }
    ],
    flags: []
  },
  {
    id: 'SMS-2026-989',
    audience: 'General App Users',
    status: 'Blocked by AI',
    time: '5 hours ago',
    texts: [
      { sender: 'Zenith', text: 'Congratulations! Our AI Algorithm has selected you for a 0% interest loan. No fees, no hidden charges. Claim here: zen.ng/0perc' }
    ],
    flags: [
      'CBN CPS 2021 §4.2(d) — Misleading fee structure ("No fees, no hidden charges")',
      'NDPC Act 2023 Sec 8 — Undisclosed algorithmic profiling'
    ]
  }
];

export default function SmsGatewayDetail({ onBack }) {
  return (
    <div className="fade-in">
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
        <button className="btn btn-ghost" onClick={onBack} style={{ padding: '0 8px' }}>
          <ArrowLeft size={16} />
        </button>
        <div>
          <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#111827' }}>SMS Gateway Pre-Deployment</h2>
          <div style={{ fontSize: '11px', color: '#6B7280', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <MessageSquare size={11} /> Live Intercept · API Hook Active
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {SMS_CAMPAIGNS.map((camp) => (
          <div key={camp.id} className="card" style={{ borderLeft: camp.flags.length > 0 ? '4px solid #DC2626' : '4px solid #10B981' }}>
            <div className="card-header" style={{ padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="text-mono" style={{ fontSize: '12px', fontWeight: 600, color: '#111827' }}>{camp.id}</span>
                <span style={{ fontSize: '11px', color: '#4B5563', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Clock size={10} /> {camp.time}
                </span>
                <span style={{ fontSize: '10px', background: '#F3F4F6', padding: '2px 6px', borderRadius: '4px', color: '#4B5563' }}>
                  Audience: {camp.audience}
                </span>
              </div>
              <div>
                {camp.status === 'Blocked by AI' ? (
                  <span style={{ fontSize: '10px', fontWeight: 700, color: '#DC2626', background: '#FEF2F2', padding: '4px 8px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <ShieldAlert size={12} /> BLOCKED BEFORE DEPLOYMENT
                  </span>
                ) : (
                  <span style={{ fontSize: '10px', fontWeight: 700, color: '#059669', background: '#ECFDF5', padding: '4px 8px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <CheckCircle size={12} /> CLEARED FOR DEPLOYMENT
                  </span>
                )}
              </div>
            </div>
            
            <div className="card-body" style={{ display: 'flex', gap: '24px', padding: '16px', background: '#F9FAFB' }}>
              
              {/* Phone Mockup */}
              <div style={{ width: '240px', background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '16px', padding: '12px', flexShrink: 0, boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                <div style={{ textAlign: 'center', fontSize: '10px', color: '#9CA3AF', marginBottom: '12px', borderBottom: '1px solid #F3F4F6', paddingBottom: '8px' }}>Messages</div>
                {camp.texts.map((msg, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <div style={{ background: '#E5E7EB', padding: '10px 12px', borderRadius: '12px', borderBottomLeftRadius: '2px', fontSize: '12px', color: '#111827', lineHeight: '1.4' }}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* AI Analysis */}
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                  AI Compliance Analysis
                </div>
                {camp.flags.length > 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {camp.flags.map((flag, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', background: '#FEF2F2', padding: '10px', borderRadius: '6px', border: '1px solid #FECACA' }}>
                        <ShieldAlert size={14} style={{ color: '#DC2626', marginTop: '2px', flexShrink: 0 }} />
                        <span style={{ fontSize: '12px', color: '#991B1B', lineHeight: '1.4' }}>{flag}</span>
                      </div>
                    ))}
                    <div style={{ fontSize: '11px', color: '#4B5563', marginTop: '8px', paddingLeft: '4px' }}>
                      <strong>Action taken:</strong> API payload intercepted. Webhook sent to HubSpot to pause campaign.
                    </div>
                  </div>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#ECFDF5', padding: '12px', borderRadius: '6px', border: '1px solid #A7F3D0' }}>
                    <CheckCircle size={16} style={{ color: '#059669' }} />
                    <span style={{ fontSize: '12px', color: '#065F46' }}>No predatory language, artificial urgency, or undisclosed fees detected. Fully compliant.</span>
                  </div>
                )}
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
