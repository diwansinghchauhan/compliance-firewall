import React from 'react';
import { Server, ArrowLeft, ShieldAlert, CheckCircle, Ticket, User, Cloud, Layout, CheckSquare, Briefcase } from 'lucide-react';

export default function CrmSyncDetail({ type, onBack }) {
  
  // Base Sentinel Data for the left side
  const sentinelData = {
    title: 'Enterprise Outbound Sync',
    platform: type === 'zendesk' ? 'Zendesk Support API Integration' : 
              type === 'salesforce' ? 'Salesforce Service Cloud Integration' : 
              'Jira Software API Integration',
    violation: '"If you do not pay this balance by 5 PM, we will call your employer and everyone on your contact list to expose you as a thief."',
    rule: 'FCCPC Limited Interim Regulatory Framework (2022)'
  };

  // Renders the Zendesk UI mock
  const renderZendesk = () => (
    <div className="card" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div className="card-header" style={{ background: '#03363D', color: '#fff', border: 'none', display: 'flex', justifyContent: 'space-between' }}>
        <span className="card-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Ticket size={16} /> Zendesk Support Agent Workspace
        </span>
        <span style={{ fontSize: '12px', color: '#A0D8D4' }}>Status: New</span>
      </div>
      <div className="card-body" style={{ flex: 1, background: '#F8F9F9', padding: '24px', overflowY: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid #E5E7EB', paddingBottom: '16px', marginBottom: '16px' }}>
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>
              [URGENT] Compliance Escalation: Unlawful Debt Recovery
            </h3>
            <div style={{ display: 'flex', gap: '12px', fontSize: '12px', color: '#6B7280' }}>
              <span style={{ background: '#FEF2F2', color: '#991B1B', padding: '2px 8px', borderRadius: '12px', fontWeight: 600 }}>Priority: High</span>
              <span>Ticket #4492</span>
              <span>Created by: Vanguard AI System</span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '24px' }}>
          <div style={{ flex: 2, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '12px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '4px', background: '#1A56DB', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>S</div>
              <div style={{ flex: 1, background: '#fff', border: '1px solid #E5E7EB', borderRadius: '8px', padding: '16px' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#111827', marginBottom: '12px' }}>Vanguard Automation <span style={{ color: '#6B7280', fontWeight: 400 }}>· Just now</span></div>
                <p style={{ fontSize: '13px', color: '#4B5563', lineHeight: '1.5', marginBottom: '12px' }}>
                  <strong>Automated Alert:</strong> A severe compliance violation was detected during a live call center interaction.
                </p>
                <div style={{ background: '#F3F4F6', padding: '12px', borderRadius: '6px', fontSize: '12px', fontFamily: 'monospace', color: '#111827', marginBottom: '12px' }}>
                  {sentinelData.violation}
                </div>
                <ul style={{ fontSize: '13px', color: '#4B5563', lineHeight: '1.6', paddingLeft: '20px', margin: 0 }}>
                  <li><strong>Agent ID:</strong> 8892-Tosin</li>
                  <li><strong>Customer ID:</strong> CUST-992-EMK</li>
                  <li><strong>Regulation Violated:</strong> FCCPC Debt Recovery Guidelines</li>
                </ul>
              </div>
            </div>
          </div>
          <div style={{ flex: 1, background: '#fff', border: '1px solid #E5E7EB', borderRadius: '8px', padding: '16px', alignSelf: 'flex-start' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#111827', textTransform: 'uppercase', marginBottom: '16px', borderBottom: '1px solid #F3F4F6', paddingBottom: '8px' }}>Customer Profile</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#EEF2FF', color: '#1A56DB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>EO</div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#111827' }}>Emeka Okoro</div>
                <div style={{ fontSize: '11px', color: '#6B7280' }}>CUST-992-EMK</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Renders the Salesforce UI mock
  const renderSalesforce = () => (
    <div className="card" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div className="card-header" style={{ background: '#00A1E0', color: '#fff', border: 'none', display: 'flex', justifyContent: 'space-between' }}>
        <span className="card-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Cloud size={16} /> Salesforce Service Cloud
        </span>
      </div>
      <div className="card-body" style={{ flex: 1, background: '#F4F6F9', padding: '16px', overflowY: 'auto' }}>
        <div style={{ background: '#fff', border: '1px solid #DDDBDA', borderRadius: '4px', padding: '16px', marginBottom: '16px', display: 'flex', gap: '16px', alignItems: 'center' }}>
          <div style={{ width: '48px', height: '48px', background: '#7F8DE1', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Briefcase size={24} color="#fff" />
          </div>
          <div>
            <div style={{ fontSize: '12px', color: '#444444' }}>Case</div>
            <div style={{ fontSize: '18px', fontWeight: 700, color: '#080707' }}>00014492: Harassment Compliance Alert</div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px' }}>
          <div style={{ flex: 2 }}>
            <div style={{ background: '#fff', border: '1px solid #DDDBDA', borderRadius: '4px', borderTop: '3px solid #00A1E0' }}>
              <div style={{ borderBottom: '1px solid #DDDBDA', padding: '12px 16px', fontSize: '14px', fontWeight: 700, color: '#080707' }}>Details</div>
              <div style={{ padding: '16px', display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                <div style={{ width: '45%' }}>
                  <div style={{ fontSize: '11px', color: '#444444', marginBottom: '4px' }}>Contact Name</div>
                  <div style={{ fontSize: '13px', color: '#006DCC', cursor: 'pointer' }}>Emeka Okoro</div>
                </div>
                <div style={{ width: '45%' }}>
                  <div style={{ fontSize: '11px', color: '#444444', marginBottom: '4px' }}>Priority</div>
                  <div style={{ fontSize: '13px', color: '#080707' }}>High</div>
                </div>
                <div style={{ width: '45%' }}>
                  <div style={{ fontSize: '11px', color: '#444444', marginBottom: '4px' }}>Vanguard Flag</div>
                  <div style={{ fontSize: '13px', color: '#080707', background: '#FDECEC', color: '#C23934', padding: '2px 6px', display: 'inline-block', borderRadius: '4px' }}>FCCPC Violation</div>
                </div>
                <div style={{ width: '100%', marginTop: '8px' }}>
                  <div style={{ fontSize: '11px', color: '#444444', marginBottom: '4px' }}>Description</div>
                  <div style={{ fontSize: '13px', color: '#080707', lineHeight: '1.5' }}>
                    Automated case generation via Vanguard API. Agent 8892-Tosin engaged in coercive debt recovery: <br/><br/>
                    <em>{sentinelData.violation}</em>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Renders the Jira UI mock
  const renderJira = () => (
    <div className="card" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div className="card-header" style={{ background: '#0052CC', color: '#fff', border: 'none', display: 'flex', justifyContent: 'space-between' }}>
        <span className="card-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Layout size={16} /> Jira Software
        </span>
      </div>
      <div className="card-body" style={{ flex: 1, background: '#FFFFFF', padding: '24px', overflowY: 'auto' }}>
        <div style={{ fontSize: '12px', color: '#6B778C', marginBottom: '8px' }}>Vanguard Automation / VAN-1042</div>
        <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#172B4D', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <CheckSquare size={20} color="#4FADE6" /> Automated Issue: Harassment Alert
        </h3>

        <div style={{ display: 'flex', gap: '32px' }}>
          <div style={{ flex: 2 }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#172B4D', marginBottom: '12px' }}>Description</div>
            <div style={{ fontSize: '14px', color: '#172B4D', lineHeight: '1.6' }}>
              <p>This issue was automatically created by the <strong>Vanguard Engine</strong> via API webhook.</p>
              <div style={{ background: '#F4F5F7', padding: '12px', borderRadius: '3px', borderLeft: '2px solid #FF5630', margin: '16px 0' }}>
                {sentinelData.violation}
              </div>
              <p><strong>Rule Violated:</strong> {sentinelData.rule}</p>
            </div>
          </div>
          
          <div style={{ flex: 1 }}>
            <div style={{ border: '1px solid #DFE1E6', borderRadius: '3px', padding: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#6B778C', marginBottom: '4px' }}>Assignee</div>
                  <div style={{ fontSize: '14px', color: '#172B4D', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#FF5630', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>CA</div>
                    Compliance Admin
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#6B778C', marginBottom: '4px' }}>Priority</div>
                  <div style={{ fontSize: '14px', color: '#FF5630', fontWeight: 600 }}>Highest</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#6B778C', marginBottom: '4px' }}>Labels</div>
                  <div style={{ display: 'inline-block', background: '#DFE1E6', fontSize: '12px', padding: '2px 6px', borderRadius: '3px', color: '#42526E' }}>fccpc-violation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fade-in">
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
        <button className="btn btn-ghost" onClick={onBack} style={{ padding: '0 8px' }}>
          <ArrowLeft size={16} />
        </button>
        <div>
          <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#111827' }}>Enterprise Outbound Sync</h2>
          <div style={{ fontSize: '11px', color: '#6B7280', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Server size={11} /> {sentinelData.platform}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px', height: 'calc(100vh - 180px)' }}>
        
        {/* Left: Sentinel AI Intercept */}
        <div className="card" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div className="card-header" style={{ background: '#111827', color: '#fff', border: 'none' }}>
            <span className="card-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldAlert size={16} style={{ color: '#3B82F6' }} /> Vanguard Engine
            </span>
          </div>
          <div className="card-body" style={{ padding: '24px', background: '#1F2937', color: '#F3F4F6', flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ fontSize: '12px', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Event Triggered: Live Call Center Analysis</div>
            
            <div style={{ background: '#374151', padding: '16px', borderRadius: '8px', borderLeft: '4px solid #EF4444' }}>
              <div style={{ fontSize: '11px', color: '#9CA3AF', marginBottom: '8px' }}>Transcript Excerpt — 14:02:11</div>
              <div style={{ fontSize: '14px', lineHeight: '1.5', color: '#E5E7EB' }}>
                "If you do not pay this balance by 5 PM, <strong style={{ color: '#FCA5A5' }}>we will call your employer and everyone on your contact list to expose you as a thief.</strong>"
              </div>
            </div>

            <div style={{ background: '#7F1D1D', padding: '12px', borderRadius: '8px', border: '1px solid #991B1B' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#FECACA', marginBottom: '4px' }}>VIOLATION DETECTED</div>
              <div style={{ fontSize: '13px', color: '#fff' }}>{sentinelData.rule}</div>
              <div style={{ fontSize: '12px', color: '#FCA5A5', marginTop: '4px' }}>Unlawful Debt Recovery Tactics / Harassment</div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#065F46', padding: '12px', borderRadius: '8px', marginTop: 'auto' }}>
              <CheckCircle size={16} style={{ color: '#34D399' }} />
              <div style={{ fontSize: '12px', color: '#D1FAE5' }}>Webhook fired to {type.charAt(0).toUpperCase() + type.slice(1)} API (Success: 201 Created)</div>
            </div>
          </div>
        </div>

        {/* Right: Simulated CRM UI */}
        {type === 'zendesk' && renderZendesk()}
        {type === 'salesforce' && renderSalesforce()}
        {type === 'jira' && renderJira()}

      </div>
    </div>
  );
}
