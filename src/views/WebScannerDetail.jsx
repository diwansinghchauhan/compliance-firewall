import React from 'react';
import { Globe, ArrowLeft, ShieldAlert, ScanLine } from 'lucide-react';

export default function WebScannerDetail({ onBack }) {
  return (
    <div className="fade-in">
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
        <button className="btn btn-ghost" onClick={onBack} style={{ padding: '0 8px' }}>
          <ArrowLeft size={16} />
        </button>
        <div>
          <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#111827' }}>Continuous Website Scanner</h2>
          <div style={{ fontSize: '11px', color: '#6B7280', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Globe size={11} /> URL: zenithfintech.ng/loans/turbo-cash
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px', height: 'calc(100vh - 180px)' }}>
        
        {/* Mock Browser Window */}
        <div className="card" style={{ flex: 3, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          {/* Browser Bar */}
          <div style={{ background: '#E5E7EB', padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid #D1D5DB' }}>
            <div style={{ display: 'flex', gap: '6px' }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#EF4444' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#F59E0B' }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#10B981' }} />
            </div>
            <div style={{ background: '#FFFFFF', padding: '4px 12px', borderRadius: '4px', fontSize: '11px', color: '#4B5563', flex: 1, marginLeft: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Globe size={10} /> https://zenithfintech.ng/loans/turbo-cash
            </div>
          </div>
          
          {/* Mock Web Page */}
          <div style={{ flex: 1, background: '#FFFFFF', padding: '40px', position: 'relative', overflowY: 'auto' }}>
            {/* Scanning Overlay Effect */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '100%', background: 'linear-gradient(180deg, rgba(59,130,246,0) 0%, rgba(59,130,246,0.05) 50%, rgba(59,130,246,0) 100%)', pointerEvents: 'none', zIndex: 10 }} />
            
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
              <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#111827', marginBottom: '16px', fontFamily: 'sans-serif' }}>
                Get Your Turbo Cash Today. <span style={{ color: '#1A56DB' }}>Zero Interest.*</span>
              </h1>
              <p style={{ fontSize: '16px', color: '#4B5563', lineHeight: '1.6', marginBottom: '32px' }}>
                Join over 100,000 Nigerians who trust Zenith for instant liquidity. No collateral required. Funds disbursed in 5 minutes.
              </p>
              <button style={{ background: '#1A56DB', color: '#fff', border: 'none', padding: '14px 28px', fontSize: '16px', fontWeight: 700, borderRadius: '8px', cursor: 'pointer', marginBottom: '80px' }}>
                Apply Now
              </button>

              {/* Problematic Fine Print */}
              <div style={{ position: 'relative' }}>
                {/* AI Bounding Box */}
                <div style={{ position: 'absolute', top: '-8px', left: '-8px', right: '-8px', bottom: '-8px', border: '2px dashed #DC2626', background: 'rgba(220,38,38,0.05)', borderRadius: '4px', zIndex: 5 }} />
                <div style={{ position: 'absolute', top: '-24px', left: '-8px', background: '#DC2626', color: '#fff', fontSize: '10px', fontWeight: 700, padding: '2px 8px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '4px', zIndex: 6 }}>
                  <ShieldAlert size={10} /> DOM STRUCTURAL VIOLATION
                </div>

                <p style={{ fontSize: '10px', color: '#9CA3AF', lineHeight: '1.4', position: 'relative', zIndex: 2 }}>
                  *Zero interest applies only to the first 3 days of the loan. From day 4, a daily compounding interest rate of 1.5% (Equivalent APR 547%) applies. Late payments incur a daily penalty of ₦2,000. By applying, you consent to our agents contacting your emergency contacts in the event of a default.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* AI Analysis Panel */}
        <div className="card" style={{ flex: 2, display: 'flex', flexDirection: 'column' }}>
          <div className="card-header" style={{ background: '#FEF2F2', borderBottomColor: '#FECACA' }}>
            <span className="card-title" style={{ color: '#991B1B', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ScanLine size={14} /> Structural Analysis Report
            </span>
          </div>
          <div className="card-body" style={{ overflowY: 'auto' }}>
            
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Detected DOM Elements</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                <span className="text-mono" style={{ fontSize: '10px', background: '#F3F4F6', padding: '2px 6px', borderRadius: '4px' }}>&lt;h1&gt; Hero (font-size: 32px)</span>
                <span className="text-mono" style={{ fontSize: '10px', background: '#F3F4F6', padding: '2px 6px', borderRadius: '4px' }}>&lt;button&gt; CTA</span>
                <span className="text-mono" style={{ fontSize: '10px', background: '#FEF2F2', color: '#991B1B', border: '1px solid #FECACA', padding: '2px 6px', borderRadius: '4px' }}>&lt;p&gt; FinePrint (font-size: 10px)</span>
              </div>
            </div>

            <div style={{ fontSize: '11px', fontWeight: 700, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Compliance Violations</div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', padding: '12px', borderRadius: '8px', borderLeft: '3px solid #DC2626' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#111827', marginBottom: '4px' }}>Deceptive Visual Hierarchy</div>
                <div style={{ fontSize: '11px', color: '#4B5563', marginBottom: '8px' }}>
                  The 547% APR and late penalty fees are buried in 10px grey text, whilst the "Zero Interest" claim is in 32px bold text. This violates structural prominence rules.
                </div>
                <span className="text-mono" style={{ fontSize: '10px', color: '#1A56DB', background: '#EEF2FF', padding: '2px 6px', borderRadius: '4px' }}>
                  FCCPA 2018 Sec 17(d)
                </span>
              </div>

              <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', padding: '12px', borderRadius: '8px', borderLeft: '3px solid #DC2626' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#111827', marginBottom: '4px' }}>Unlawful Debt Recovery Tactics</div>
                <div style={{ fontSize: '11px', color: '#4B5563', marginBottom: '8px' }}>
                  The T&Cs assert the right to contact emergency contacts for debt recovery. This is explicitly banned by the FCCPC and NDPC.
                </div>
                <span className="text-mono" style={{ fontSize: '10px', color: '#1A56DB', background: '#EEF2FF', padding: '2px 6px', borderRadius: '4px' }}>
                  FCCPC Limited Interim Regulatory/Registration Framework (2022)
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
