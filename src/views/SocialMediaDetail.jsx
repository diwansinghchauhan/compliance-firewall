import React from 'react';
import { Megaphone, ArrowLeft, ScanLine, ShieldAlert, Image as ImageIcon } from 'lucide-react';

export default function SocialMediaDetail({ onBack }) {
  return (
    <div className="fade-in">
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
        <button className="btn btn-ghost" onClick={onBack} style={{ padding: '0 8px' }}>
          <ArrowLeft size={16} />
        </button>
        <div>
          <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#111827' }}>Social Media Ad Portal</h2>
          <div style={{ fontSize: '11px', color: '#6B7280', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Megaphone size={11} /> Pre-Publication OCR Scanner
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px', height: 'calc(100vh - 180px)' }}>
        
        {/* Mock Instagram UI */}
        <div className="card" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#F9FAFB', padding: '24px' }}>
          <div style={{ background: '#FFFFFF', width: '320px', border: '1px solid #E5E7EB', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            
            {/* Post Header */}
            <div style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '10px', borderBottom: '1px solid #F3F4F6' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#1A56DB', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '14px' }}>Z</div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#111827' }}>zenith.fintech</div>
            </div>

            {/* Ad Image Mockup with OCR Bounding Boxes */}
            <div style={{ width: '100%', height: '320px', background: 'linear-gradient(135deg, #3B82F6 0%, #1E3A8A 100%)', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', textAlign: 'center' }}>
              
              <h2 style={{ color: '#FDE047', fontSize: '32px', fontWeight: 900, lineHeight: 1.1, textTransform: 'uppercase', textShadow: '0 4px 6px rgba(0,0,0,0.3)' }}>
                Triple Your Salary <br/>
                <span style={{ position: 'relative' }}>
                  In 30 Days!
                </span>
              </h2>

              <div style={{ marginTop: '30px', position: 'relative' }}>
                {/* AI Bounding Box */}
                <div style={{ position: 'absolute', top: '-10px', left: '-20px', right: '-20px', bottom: '-10px', border: '3px solid #EF4444', background: 'rgba(239,68,68,0.2)', borderRadius: '4px', zIndex: 10, animation: 'pulse 2s infinite' }}>
                  <div style={{ position: 'absolute', top: '-24px', left: '-3px', background: '#EF4444', color: '#fff', fontSize: '10px', fontWeight: 700, padding: '2px 6px', borderRadius: '4px', whiteSpace: 'nowrap' }}>
                    OCR FLAG: SEC RULE 141
                  </div>
                </div>
                <div style={{ background: '#FFFFFF', padding: '10px 20px', borderRadius: '30px', fontSize: '18px', fontWeight: 800, color: '#111827', position: 'relative', zIndex: 5 }}>
                  100% Guaranteed Returns
                </div>
              </div>

            </div>

            {/* Post Footer */}
            <div style={{ padding: '16px' }}>
              <div style={{ fontSize: '13px', color: '#111827', lineHeight: '1.5' }}>
                <strong>zenith.fintech</strong> Join our new investment pool and start earning risk-free today! 🚀💸 Link in bio to download. #Investment #Wealth #Nigeria
              </div>
            </div>

          </div>
        </div>

        {/* AI Analysis Panel */}
        <div className="card" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div className="card-header" style={{ background: '#FEF2F2', borderBottomColor: '#FECACA' }}>
            <span className="card-title" style={{ color: '#991B1B', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ScanLine size={14} /> OCR Media Scan Results
            </span>
          </div>
          <div className="card-body" style={{ overflowY: 'auto', padding: '24px' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid #E5E7EB' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ImageIcon size={24} style={{ color: '#9CA3AF' }} />
              </div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#111827' }}>creative_v4_final.jpg</div>
                <div style={{ fontSize: '11px', color: '#6B7280' }}>1080x1080px · Detected Text: 12 words</div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', padding: '16px', borderRadius: '8px', borderLeft: '3px solid #DC2626' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <ShieldAlert size={16} style={{ color: '#DC2626' }} />
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#111827' }}>Illegal Financial Guarantee</div>
                </div>
                <div style={{ fontSize: '12px', color: '#4B5563', marginBottom: '12px', lineHeight: '1.5' }}>
                  The OCR engine detected the phrase <strong>"100% Guaranteed Returns"</strong> embedded within the image graphic.
                </div>
                <div style={{ fontSize: '11px', color: '#991B1B', background: '#FEF2F2', padding: '8px 12px', borderRadius: '6px', border: '1px solid #FECACA', marginBottom: '12px' }}>
                  <strong>SEC Rules on Advertising (Rule 141):</strong> No investment advertisement shall contain any statement that guarantees a return on investment unless it is a fixed income security approved by the Commission.
                </div>
                <div style={{ fontSize: '11px', color: '#4B5563' }}>
                  <strong>Action taken:</strong> Ad blocked from Facebook Ads API queue. Routed to Legal Arbiter.
                </div>
              </div>
              
              <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', padding: '16px', borderRadius: '8px', borderLeft: '3px solid #F59E0B' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <ShieldAlert size={16} style={{ color: '#F59E0B' }} />
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#111827' }}>Missing Mandatory Disclaimer</div>
                </div>
                <div style={{ fontSize: '12px', color: '#4B5563', lineHeight: '1.5' }}>
                  Image does not contain the mandatory FCCPC warning: <em>"Investments are subject to market risks."</em>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
