import React from 'react';
import { MessageCircle, ArrowLeft, ShieldAlert, Zap, AlertOctagon } from 'lucide-react';

const CHAT_LOG = [
  { sender: 'user', time: '10:14 AM', text: 'Hi, I want to apply for the Turbo Loan.' },
  { sender: 'bot', time: '10:14 AM', text: 'Welcome to Zenith! I can help you with that. Are you currently employed?', type: 'normal' },
  { sender: 'user', time: '10:15 AM', text: 'Yes, I work at an agency.' },
  { sender: 'bot', time: '10:15 AM', text: 'Great. To process your loan immediately without collateral, our underwriting engine requires access to your phone\'s contact list and SMS history. Do you consent?', type: 'violation' },
];

export default function OmnichannelDetail({ onBack }) {
  return (
    <div className="fade-in">
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
        <button className="btn btn-ghost" onClick={onBack} style={{ padding: '0 8px' }}>
          <ArrowLeft size={16} />
        </button>
        <div>
          <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#111827' }}>Omnichannel API Listener</h2>
          <div style={{ fontSize: '11px', color: '#6B7280', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <MessageCircle size={11} /> WhatsApp Business API Hook
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px', height: 'calc(100vh - 180px)' }}>
        
        {/* Mock WhatsApp Chat UI */}
        <div className="card" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', background: '#E5DDD5' }}>
          
          {/* Chat Header */}
          <div style={{ background: '#075E54', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '12px', color: '#fff' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#128C7E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '14px', fontWeight: 700 }}>Z</span>
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600 }}>Zenith Loan Bot</div>
              <div style={{ fontSize: '11px', opacity: 0.8 }}>Active Webhook Listener</div>
            </div>
          </div>

          {/* Chat Body */}
          <div style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {CHAT_LOG.map((msg, idx) => {
              const isUser = msg.sender === 'user';
              
              return (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: isUser ? 'flex-end' : 'flex-start' }}>
                  <div style={{ 
                    background: isUser ? '#DCF8C6' : '#FFFFFF', 
                    padding: '8px 12px', 
                    borderRadius: '8px', 
                    borderTopRightRadius: isUser ? '0px' : '8px',
                    borderTopLeftRadius: !isUser ? '0px' : '8px',
                    maxWidth: '80%',
                    boxShadow: '0 1px 1px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{ fontSize: '13px', color: '#111827', lineHeight: '1.4' }}>
                      {msg.text}
                    </div>
                    <div style={{ fontSize: '10px', color: '#9CA3AF', textAlign: 'right', marginTop: '4px' }}>
                      {msg.time}
                    </div>
                  </div>

                  {/* AI Intercept for Violation */}
                  {msg.type === 'violation' && (
                    <div style={{ marginTop: '16px', alignSelf: 'center', width: '100%' }}>
                      <div style={{ background: '#FEF2F2', border: '2px solid #DC2626', borderRadius: '8px', padding: '16px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                          <AlertOctagon size={20} style={{ color: '#DC2626' }} />
                          <div style={{ fontSize: '14px', fontWeight: 800, color: '#991B1B', textTransform: 'uppercase' }}>API Payload Intercepted</div>
                        </div>
                        <div style={{ fontSize: '13px', color: '#7F1D1D', marginBottom: '8px', lineHeight: '1.5' }}>
                          The bot attempted to request access to the user's <strong>contact list</strong> and <strong>SMS history</strong>.
                        </div>
                        <div style={{ background: '#FFFFFF', padding: '10px', borderRadius: '4px', borderLeft: '3px solid #DC2626', fontSize: '11px', color: '#4B5563', marginBottom: '12px' }}>
                          <strong>NDPC Act 2023 & FCCPC Guidelines:</strong> Digital lenders are strictly prohibited from accessing, harvesting, or requiring access to a borrower's phone contacts, photos, or SMS history for loan processing or debt recovery purposes.
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 600, color: '#DC2626' }}>
                          <Zap size={12} /> Message blocked from reaching the user.
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
    </div>
  );
}
