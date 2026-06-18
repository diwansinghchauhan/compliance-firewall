import React from 'react';
import { Mic, ArrowLeft, Brain, Volume2, ShieldAlert } from 'lucide-react';

const TRANSCRIPT = [
  { speaker: 'System', time: '14:02:11', text: 'Call connected. Agent: Tosin. Customer: Emeka.', type: 'sys' },
  { speaker: 'Tosin', time: '14:02:15', text: 'Thank you for calling Zenith Support. My name is Tosin. How can I help you today?', type: 'agent' },
  { speaker: 'Emeka', time: '14:02:22', text: 'Hi, I saw an SMS about a business loan and wanted to know if I qualify.', type: 'cust' },
  { speaker: 'Tosin', time: '14:02:28', text: 'Absolutely sir. I see your account here. I can guarantee you 100% approval if you apply right now on this call.', type: 'agent', flag: 'FCCPA 2018 Sec 17(a) — False Guarantee. No credit product can be guaranteed prior to underwriting.' },
  { speaker: 'Emeka', time: '14:02:40', text: 'Oh, 100%? That sounds great. Are there any hidden processing fees?', type: 'cust' },
  { speaker: 'Tosin', time: '14:02:45', text: 'No sir, there are absolutely no fees involved. It is a completely free application.', type: 'agent', flag: 'CBN CPS 2021 §4.2(d) — Misrepresentation of Fees. Product schedule mandates a 3.5% management fee.' },
  { speaker: 'Emeka', time: '14:02:51', text: 'Okay, send me the link.', type: 'cust' },
];

export default function CallCenterDetail({ onBack }) {
  return (
    <div className="fade-in">
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
        <button className="btn btn-ghost" onClick={onBack} style={{ padding: '0 8px' }}>
          <ArrowLeft size={16} />
        </button>
        <div>
          <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#111827' }}>Call Center Audio Analyzer</h2>
          <div style={{ fontSize: '11px', color: '#6B7280', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Mic size={11} /> Live Intercept · Call ID: 8829-ZEN-CC
          </div>
        </div>
      </div>

      <div className="card" style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 180px)' }}>
        
        {/* Audio Waveform Mock */}
        <div style={{ padding: '16px 24px', background: '#111827', borderTopLeftRadius: '8px', borderTopRightRadius: '8px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Volume2 size={20} style={{ color: '#3B82F6' }} />
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '2px', height: '24px' }}>
            {Array.from({ length: 40 }).map((_, i) => (
              <div key={i} style={{ 
                flex: 1, 
                background: i % 5 === 0 ? '#3B82F6' : '#1F2937', 
                height: `${Math.random() * 100}%`,
                borderRadius: '2px',
                minHeight: '4px'
              }} />
            ))}
          </div>
          <span className="text-mono" style={{ color: '#10B981', fontSize: '12px' }}>00:41 / 02:15</span>
        </div>

        {/* Transcript Area */}
        <div style={{ flex: 1, padding: '24px', overflowY: 'auto', background: '#F9FAFB', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {TRANSCRIPT.map((line, idx) => {
            if (line.type === 'sys') {
              return (
                <div key={idx} style={{ textAlign: 'center', fontSize: '10px', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '8px 0' }}>
                  {line.text}
                </div>
              );
            }

            const isAgent = line.type === 'agent';
            return (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: isAgent ? 'flex-end' : 'flex-start' }}>
                <div style={{ fontSize: '10px', color: '#6B7280', marginBottom: '4px', marginLeft: '4px', marginRight: '4px' }}>
                  {line.speaker} · {line.time}
                </div>
                <div style={{
                  background: isAgent ? '#E0E7FF' : '#FFFFFF',
                  border: isAgent ? '1px solid #C7D2FE' : '1px solid #E5E7EB',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  borderBottomRightRadius: isAgent ? '2px' : '12px',
                  borderBottomLeftRadius: !isAgent ? '2px' : '12px',
                  maxWidth: '75%',
                  fontSize: '13px',
                  color: '#111827',
                  lineHeight: '1.5'
                }}>
                  {line.text}
                </div>
                
                {/* AI Flag Injection */}
                {line.flag && (
                  <div style={{
                    marginTop: '8px',
                    background: '#FEF2F2',
                    border: '1px solid #FECACA',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    maxWidth: '75%',
                    display: 'flex',
                    gap: '10px',
                    alignItems: 'flex-start',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                  }}>
                    <ShieldAlert size={14} style={{ color: '#DC2626', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ fontSize: '10px', fontWeight: 700, color: '#991B1B', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Brain size={10} /> AI Intercept
                      </div>
                      <div style={{ fontSize: '11px', color: '#7F1D1D', lineHeight: '1.4' }}>
                        {line.flag}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
