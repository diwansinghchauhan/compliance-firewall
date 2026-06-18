import React, { useState } from 'react';
import { Globe, MessageSquare, Mic, MessageCircle, Megaphone, Link as LinkIcon, Server, ShieldCheck, Activity, CheckCircle, Database, ChevronRight } from 'lucide-react';
import CallCenterDetail from './CallCenterDetail';
import SmsGatewayDetail from './SmsGatewayDetail';
import WebScannerDetail from './WebScannerDetail';
import SocialMediaDetail from './SocialMediaDetail';
import OmnichannelDetail from './OmnichannelDetail';
import CrmSyncDetail from './CrmSyncDetail';

const INGESTION_CHANNELS = [
  {
    id: 'web',
    name: 'Continuous Website Scanner',
    desc: 'Monitors product pages, T&Cs, and landing pages for compliance drifts in real time.',
    icon: Globe,
    status: 'Active',
    metrics: '24 pages tracked · Last scan 4m ago',
    type: 'live'
  },
  {
    id: 'sms',
    name: 'SMS Gateway Pre-Deployment',
    desc: 'Intercepts bulk SMS campaigns for NCC and FCCPC compliance before broadcast.',
    icon: MessageSquare,
    status: 'Active',
    metrics: '1,420 msgs screened today',
    type: 'live'
  },
  {
    id: 'call',
    name: 'Call Center Audio Analyzer',
    desc: 'Voice-to-Text transcription and batch NLP analysis for sales scripts and support calls.',
    icon: Mic,
    status: 'Batch Mode',
    metrics: 'Syncs every 12 hours',
    type: 'batch'
  },
  {
    id: 'social',
    name: 'Social Media Ad Portal',
    desc: 'Pre-publication review queue for checking pricing claims and disclaimers on digital ads.',
    icon: Megaphone,
    status: 'Active',
    metrics: '5 ad creatives pending review',
    type: 'live'
  },
  {
    id: 'chat',
    name: 'Omnichannel API Listener',
    desc: 'Ingests WhatsApp, internal email, and Chatbot logs for consumer protection violations.',
    icon: MessageCircle,
    status: 'Active',
    metrics: 'Webhook connected',
    type: 'live'
  }
];

const OUTBOUND_INTEGRATIONS = [
  {
    name: 'Salesforce CRM',
    desc: 'Automatically links compliance infractions to customer profiles.',
    connected: true,
  },
  {
    name: 'Zendesk Support',
    desc: 'Auto-generates support tickets when high-risk customer complaints are detected.',
    connected: true,
  },
  {
    name: 'Jira Software',
    desc: 'Creates engineering epics when website T&C updates are required by law.',
    connected: true,
  },
  {
    name: 'HubSpot Marketing',
    desc: 'Pauses campaigns automatically if pre-deployment checks fail.',
    connected: false,
  }
];

export default function IntegrationsHub() {
  const [selectedView, setSelectedView] = useState(null);

  if (selectedView === 'call') return <CallCenterDetail onBack={() => setSelectedView(null)} />;
  if (selectedView === 'sms') return <SmsGatewayDetail onBack={() => setSelectedView(null)} />;
  if (selectedView === 'web') return <WebScannerDetail onBack={() => setSelectedView(null)} />;
  if (selectedView === 'social') return <SocialMediaDetail onBack={() => setSelectedView(null)} />;
  if (selectedView === 'chat') return <OmnichannelDetail onBack={() => setSelectedView(null)} />;
  if (selectedView?.startsWith('crm-')) {
    const type = selectedView.split('-')[1];
    return <CrmSyncDetail type={type} onBack={() => setSelectedView(null)} />;
  }

  return (
    <div className="fade-in">
      <div className="view-header">
        <h1 className="view-title">Integrations &amp; Channels Hub</h1>
        <p className="view-subtitle">
          Omnichannel data ingestion and enterprise system synchronization
        </p>
      </div>

      <div style={{ display: 'flex', gap: '24px' }}>
        
        {/* Left Column: Data Ingestion */}
        <div style={{ flex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <Activity size={18} style={{ color: '#1A56DB' }} />
            <h2 style={{ fontSize: '14px', fontWeight: 700, color: '#111827' }}>Data Ingestion Channels</h2>
            <span style={{ marginLeft: 'auto', fontSize: '11px', color: '#6B7280', background: '#F3F4F6', padding: '4px 8px', borderRadius: '4px' }}>
              5 active connectors
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {INGESTION_CHANNELS.map((channel) => {
              const Icon = channel.icon;
              return (
                <div key={channel.id} className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div className="card-header" style={{ padding: '12px 16px', background: '#F9FAFB' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ background: '#EEF2FF', padding: '8px', borderRadius: '8px' }}>
                        <Icon size={16} style={{ color: '#1A56DB' }} />
                      </div>
                      <span style={{ fontSize: '13px', fontWeight: 700, color: '#111827' }}>{channel.name}</span>
                    </div>
                  </div>
                  <div className="card-body" style={{ flex: 1, padding: '16px', display: 'flex', flexDirection: 'column' }}>
                    <p style={{ fontSize: '12px', color: '#4B5563', lineHeight: '1.5', marginBottom: '16px', flex: 1 }}>
                      {channel.desc}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #E5E7EB', paddingTop: '12px', marginBottom: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        {channel.type === 'live' ? (
                          <div className="status-dot live" style={{ width: 6, height: 6 }} />
                        ) : (
                          <div className="status-dot" style={{ width: 6, height: 6, background: '#D97706' }} />
                        )}
                        <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', color: channel.type === 'live' ? '#059669' : '#D97706' }}>
                          {channel.status}
                        </span>
                      </div>
                      <span style={{ fontSize: '10px', color: '#6B7280' }}>{channel.metrics}</span>
                    </div>
                    {['call', 'sms', 'web', 'social', 'chat'].includes(channel.id) && (
                      <button 
                        className="btn btn-secondary" 
                        style={{ width: '100%', justifyContent: 'center' }}
                        onClick={() => setSelectedView(channel.id)}
                      >
                        View Live Data <ChevronRight size={12} />
                      </button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right Column: Outbound Integrations */}
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <Server size={18} style={{ color: '#7E22CE' }} />
            <h2 style={{ fontSize: '14px', fontWeight: 700, color: '#111827' }}>Enterprise Outbound Sync</h2>
          </div>

          <div className="card" style={{ borderTop: '4px solid #A855F7' }}>
            <div className="card-header">
              <span className="card-title">Connected Systems</span>
            </div>
            <div className="card-body" style={{ padding: '0' }}>
              {OUTBOUND_INTEGRATIONS.map((sys, idx) => (
                <div key={idx} style={{ padding: '16px', borderBottom: idx < OUTBOUND_INTEGRATIONS.length - 1 ? '1px solid #E5E7EB' : 'none' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <LinkIcon size={14} style={{ color: sys.connected ? '#10B981' : '#9CA3AF' }} />
                      <span style={{ fontSize: '13px', fontWeight: 600, color: sys.connected ? '#111827' : '#6B7280' }}>
                        {sys.name}
                      </span>
                    </div>
                    {sys.connected ? (
                      <span style={{ fontSize: '9px', background: '#ECFDF5', color: '#059669', padding: '2px 6px', borderRadius: '10px', fontWeight: 700, textTransform: 'uppercase' }}>
                        Active
                      </span>
                    ) : (
                      <span style={{ fontSize: '9px', background: '#F3F4F6', color: '#6B7280', padding: '2px 6px', borderRadius: '10px', fontWeight: 700, textTransform: 'uppercase' }}>
                        Disconnected
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: '11px', color: '#4B5563', lineHeight: '1.4', paddingLeft: '22px' }}>
                    {sys.desc}
                  </p>
                  
                  {/* View Live Sync Button */}
                  {sys.connected && (
                    <div style={{ marginTop: '12px', paddingLeft: '22px' }}>
                      <button 
                        className="btn btn-secondary" 
                        style={{ fontSize: '11px', padding: '6px 12px' }}
                        onClick={() => setSelectedView(`crm-${sys.name.split(' ')[0].toLowerCase()}`)}
                      >
                        <Server size={10} style={{ marginRight: '6px' }} /> View Live Sync <ChevronRight size={10} />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Data Security Banner */}
          <div style={{ display: 'flex', gap: '12px', padding: '16px', background: '#F0FDF4', border: '1px solid #A7F3D0', borderRadius: '8px', marginTop: '16px' }}>
            <ShieldCheck size={20} style={{ color: '#059669', flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#065F46', marginBottom: '4px' }}>End-to-End Encryption</div>
              <div style={{ fontSize: '11px', color: '#065F46', lineHeight: '1.5' }}>
                All webhook and API payloads are signed with 256-bit keys. No PII is stored natively unless required by NDPC mandate.
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
