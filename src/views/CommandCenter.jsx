import React, { useState, useMemo } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine, PieChart, Pie, Cell, Legend
} from 'recharts';
import {
  TrendingUp, Shield, AlertOctagon, FileSearch,
  ChevronUp, ChevronDown, ChevronsUpDown, Activity,
  Zap, Eye, Database, Info
} from 'lucide-react';

/* ---- Data ---- */
const COMPLAINT_DATA = [
  { day: 'Jun 1',  complaints: 28, },
  { day: 'Jun 3',  complaints: 31, },
  { day: 'Jun 5',  complaints: 25, },
  { day: 'Jun 7',  complaints: 42, },
  { day: 'Jun 9',  complaints: 38, },
  { day: 'Jun 11', complaints: 35, },
  { day: 'Jun 13', complaints: 29, },
  { day: 'Jun 15', complaints: 47, },
  { day: 'Jun 17', complaints: 53, },
  { day: 'Jun 19', complaints: 61, },
  { day: 'Jun 21', complaints: 149, anomaly: true },
  { day: 'Jun 23', complaints: 112, },
  { day: 'Jun 25', complaints: 78, },
  { day: 'Jun 27', complaints: 65, },
  { day: 'Jun 29', complaints: 58, },
  { day: 'Jun 30', complaints: 54, },
];

const CLEARANCE_DATA = [
  { name: 'Absolved',    value: 85, color: '#059669' },
  { name: 'Interdicted', value: 10, color: '#DC2626' },
  { name: 'Escalated',   value: 5,  color: '#D97706' },
];

const DETECTION_DATA = [
  { name: 'AI Reasoning', value: 73, color: '#3B82F6' },
  { name: 'Manual Rules', value: 27, color: '#8B5CF6' },
];

const AGENCY_BREACHES_DATA = [
  { name: 'FCCPC', value: 142, color: '#059669' },
  { name: 'CBN', value: 89, color: '#1A56DB' },
  { name: 'NDPC', value: 34, color: '#D97706' },
  { name: 'SEC', value: 12, color: '#7E22CE' },
];

const PIPELINE_DATA = [
  {
    id: 'AST-00412',
    name: 'Q3 WhatsApp Loan Script',
    channel: 'WhatsApp Broadcast',
    verdict: 'interdicted',
    codex: 'FCCPA 2018 Sec 17',
    ts: '2026-06-17 14:02',
  },
  {
    id: 'AST-00411',
    name: 'Zenith Credit Rewards Email',
    channel: 'Email Campaign',
    verdict: 'absolved',
    codex: 'CBN CPS 2021 §4.2',
    ts: '2026-06-17 13:47',
  },
  {
    id: 'AST-00410',
    name: 'BNPL Offer SMS Blast',
    channel: 'SMS',
    verdict: 'escalated',
    codex: 'NDPC Act 2023 Sec 8',
    ts: '2026-06-17 13:31',
  },
  {
    id: 'AST-00409',
    name: 'VIP Loan Restructuring Push',
    channel: 'Push Notification',
    verdict: 'absolved',
    codex: 'FCCPA 2018 Sec 9',
    ts: '2026-06-17 12:55',
  },
  {
    id: 'AST-00408',
    name: 'Overdraft Activation Banner',
    channel: 'In-App',
    verdict: 'interdicted',
    codex: 'CBN CPS 2021 §7.1',
    ts: '2026-06-17 12:20',
  },
  {
    id: 'AST-00407',
    name: 'Q2 Micro-Insurance Upsell',
    channel: 'Email Campaign',
    verdict: 'pending',
    codex: 'NAICOM Circ. 2022-04',
    ts: '2026-06-17 11:58',
  },
  {
    id: 'AST-00406',
    name: 'Agent Network Commission Flyer',
    channel: 'Social Media',
    verdict: 'absolved',
    codex: 'CBN AMLD 2022 §3',
    ts: '2026-06-17 11:30',
  },
  {
    id: 'AST-00405',
    name: 'Emergency Salary Loan Script',
    channel: 'WhatsApp Broadcast',
    verdict: 'interdicted',
    codex: 'FCCPA 2018 Sec 17',
    ts: '2026-06-17 10:44',
  },
];

/* ---- Custom Tooltip ---- */
const ComplaintTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  const v = payload[0].value;
  const isAnomaly = v > 100;
  return (
    <div className="custom-tooltip">
      <div className="tooltip-label">{label}</div>
      <div className="tooltip-row">
        <div className="tooltip-dot" style={{ background: isAnomaly ? '#F87171' : '#1A56DB' }} />
        <span>{v} complaints</span>
        {isAnomaly && (
          <span style={{ color: '#F87171', fontSize: '10px', fontWeight: 700, marginLeft: 4 }}>
            ⚠ ANOMALY
          </span>
        )}
      </div>
    </div>
  );
};

const DonutTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  const { name, value } = payload[0];
  return (
    <div className="custom-tooltip">
      <div className="tooltip-label">{name}</div>
      <div className="tooltip-row">
        <div className="tooltip-dot" style={{ background: payload[0].payload.color }} />
        <span style={{ fontWeight: 700 }}>{value}%</span>
      </div>
    </div>
  );
};

/* ---- Badge ---- */
const VerdictBadge = ({ verdict }) => {
  const cfg = {
    absolved:    { cls: 'badge-absolved',    label: '● Absolved' },
    interdicted: { cls: 'badge-interdicted', label: '● Interdicted' },
    escalated:   { cls: 'badge-escalated',   label: '● Escalated' },
    pending:     { cls: 'badge-pending',     label: '● Pending' },
  };
  const { cls, label } = cfg[verdict] || cfg.pending;
  return <span className={`badge ${cls}`}>{label}</span>;
};

/* ---- Main Component ---- */
export default function CommandCenter() {
  const [sortCol, setSortCol] = useState('ts');
  const [sortDir, setSortDir] = useState('desc');

  const sorted = useMemo(() => {
    return [...PIPELINE_DATA].sort((a, b) => {
      const av = a[sortCol] ?? '';
      const bv = b[sortCol] ?? '';
      if (av < bv) return sortDir === 'asc' ? -1 : 1;
      if (av > bv) return sortDir === 'asc' ? 1 : -1;
      return 0;
    });
  }, [sortCol, sortDir]);

  const handleSort = (col) => {
    if (sortCol === col) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    else { setSortCol(col); setSortDir('asc'); }
  };

  const SortIcon = ({ col }) => {
    if (sortCol !== col) return <ChevronsUpDown size={10} style={{ opacity: 0.3, marginLeft: 3 }} />;
    return sortDir === 'asc'
      ? <ChevronUp size={10} style={{ color: '#1A56DB', marginLeft: 3 }} />
      : <ChevronDown size={10} style={{ color: '#1A56DB', marginLeft: 3 }} />;
  };

  return (
    <div>
      <div className="view-header">
        <h1 className="view-title">Command &amp; Intelligence Dashboard</h1>
        <p className="view-subtitle">
          Real-time compliance oversight · Workspace: Zenith Fintech · Refreshed 18s ago
        </p>
      </div>

      {/* Codex Sync Ticker */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#ECFDF5', border: '1px solid #A7F3D0', padding: '8px 14px', borderRadius: '8px', marginBottom: '20px' }}>
        <Database size={14} style={{ color: '#059669' }} />
        <span style={{ fontSize: '11px', color: '#065F46', fontWeight: 600 }}>Codex Sync:</span>
        <span style={{ fontSize: '11px', color: '#065F46' }}>
          Latest ingestion: <strong>CBN/DIR/2026/05</strong> (2 hours ago). AI processing complete, human QA pending. 
        </span>
        <span style={{ marginLeft: 'auto', fontSize: '10px', color: '#059669', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 700, textTransform: 'uppercase' }}>
          <div className="status-dot live" style={{ width: 6, height: 6 }} /> SLA: 24-48hr
        </span>
      </div>

      {/* Metrics Row */}
      <div className="metrics-row">
        {/* Risk Score */}
        <div className="metric-card risk">
          <div className="metric-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Shield size={12} />
            Institutional Risk Score
            <span title="Aggregate compliance health index based on real-time violation frequency, systemic anomalies, and unresolved legal conflicts.">
              <Info size={12} style={{ color: '#9CA3AF', cursor: 'help' }} />
            </span>
          </div>
          <div className="metric-value blue">92<span style={{ fontSize: 18, fontWeight: 500, color: '#9CA3AF' }}>/100</span></div>
          <div className="metric-sub">
            <span className="metric-delta delta-up">▲ +3pts</span>
            vs. last 30 days
          </div>
          <div className="metric-icon-bg">🛡</div>
        </div>

        {/* Scanned */}
        <div className="metric-card scanned">
          <div className="metric-label">
            <FileSearch size={12} />
            Assets Scanned Today
          </div>
          <div className="metric-value green">1,245</div>
          <div className="metric-sub">
            <span className="metric-delta delta-down">▼ −12</span>
            vs. yesterday (1,257)
          </div>
          <div className="metric-icon-bg">📋</div>
        </div>

        {/* Interdicted */}
        <div className="metric-card interdicted">
          <div className="metric-label">
            <AlertOctagon size={12} />
            Assets Interdicted
          </div>
          <div className="metric-value red">34</div>
          <div className="metric-sub">
            <span className="metric-delta delta-up">▲ +9</span>
            vs. yesterday (25)
          </div>
          <div className="metric-icon-bg">🚫</div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="charts-row" style={{ display: 'flex', gap: '20px' }}>
        {/* Line chart */}
        <div className="card" style={{ flex: 2 }}>
          <div className="card-header">
            <span className="card-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Activity size={12} style={{ color: '#6B7280' }} />
              Consumer Complaint Trajectory
              <span style={{ fontSize: '10px', background: '#FEF2F2', color: '#DC2626', padding: '2px 6px', borderRadius: '4px', fontWeight: 700, border: '1px solid #FCA5A5' }}>
                ⚠ Systemic Anomaly Detected
              </span>
            </span>
            <div className="status-indicator">
              <div className="status-dot live" />
              <span style={{ fontSize: '10px', color: '#6B7280' }}>Live stream</span>
            </div>
          </div>
          <div className="card-body" style={{ padding: '14px 18px 18px' }}>
            <ResponsiveContainer width="100%" height={210}>
              <LineChart data={COMPLAINT_DATA} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F0F0F0" />
                <XAxis
                  dataKey="day"
                  tick={{ fontSize: 10, fill: '#9CA3AF' }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 10, fill: '#9CA3AF' }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip content={<ComplaintTooltip />} />
                <ReferenceLine
                  x="Jun 21"
                  stroke="#DC2626"
                  strokeDasharray="4 3"
                  strokeWidth={1.5}
                  label={{
                    value: '⚠ Volume Anomaly Detected',
                    position: 'insideTopRight',
                    fill: '#DC2626',
                    fontSize: 10,
                    fontWeight: 700,
                    offset: 8,
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="complaints"
                  stroke="#1A56DB"
                  strokeWidth={2}
                  dot={(props) => {
                    const { cx, cy, payload } = props;
                    const isAnomaly = payload.complaints > 100;
                    return (
                      <circle
                        key={`dot-${payload.day}`}
                        cx={cx} cy={cy}
                        r={isAnomaly ? 5 : 3}
                        fill={isAnomaly ? '#DC2626' : '#1A56DB'}
                        stroke={isAnomaly ? '#FCA5A5' : '#BFDBFE'}
                        strokeWidth={2}
                      />
                    );
                  }}
                  activeDot={{ r: 6, fill: '#1A56DB', stroke: '#fff', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: 1 }}>
          {/* Donut chart 1 */}
          <div className="card" style={{ flex: 1 }}>
          <div className="card-header">
            <span className="card-title">Clearance Status</span>
          </div>
          <div className="card-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px' }}>
            <ResponsiveContainer width="100%" height={100}>
              <PieChart>
                <Pie
                  data={CLEARANCE_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={35}
                  outerRadius={45}
                  paddingAngle={3}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                >
                  {CLEARANCE_DATA.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
                <Tooltip content={<DonutTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="donut-legend" style={{ width: '100%' }}>
              {CLEARANCE_DATA.map(({ name, value, color }) => (
                <div className="legend-item" key={name}>
                  <div className="legend-dot" style={{ background: color }} />
                  <span className="legend-label">{name}</span>
                  <span className="legend-value">{value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Donut chart 2: Detection Source */}
        <div className="card" style={{ flex: 1 }}>
          <div className="card-header">
            <span className="card-title">Detection Source</span>
          </div>
          <div className="card-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px' }}>
            <ResponsiveContainer width="100%" height={100}>
              <PieChart>
                <Pie
                  data={DETECTION_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={35}
                  outerRadius={45}
                  paddingAngle={3}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                >
                  {DETECTION_DATA.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
                <Tooltip content={<DonutTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="donut-legend" style={{ width: '100%', marginTop: '8px' }}>
              {DETECTION_DATA.map(({ name, value, color }) => (
                <div className="legend-item" key={name}>
                  <div className="legend-dot" style={{ background: color }} />
                  <span className="legend-label" style={{ fontSize: '10px' }}>{name}</span>
                  <span className="legend-value" style={{ fontSize: '11px' }}>{value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Agency Breaches Row */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <div className="card" style={{ flex: 1 }}>
          <div className="card-header">
            <span className="card-title" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Shield size={12} style={{ color: '#6B7280' }} />
              Interdictions by Agency (Last 30 Days)
              <span title="Breakdown of automated compliance blocks triggered by specific regulatory rulesets (e.g., a blocked SMS triggering an FCCPC flag).">
                <Info size={12} style={{ color: '#9CA3AF', cursor: 'help' }} />
              </span>
            </span>
          </div>
          <div className="card-body" style={{ padding: '16px 24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
              {AGENCY_BREACHES_DATA.map(agency => {
                const totalBreaches = AGENCY_BREACHES_DATA.reduce((acc, curr) => acc + curr.value, 0);
                const pct = Math.round((agency.value / totalBreaches) * 100);
                return (
                  <div key={agency.name} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '48px', fontSize: '13px', fontWeight: 600, color: '#4B5563' }}>{agency.name}</div>
                    <div style={{ flex: 1, background: '#F3F4F6', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ width: `${pct}%`, background: agency.color, height: '100%' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', width: '36px' }}>
                      <span style={{ fontSize: '13px', fontWeight: 700, color: '#111827' }}>{agency.value}</span>
                      <span style={{ fontSize: '10px', color: '#6B7280', fontWeight: 500 }}>{pct}%</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Pipeline Table */}
      <div className="card">
        <div className="card-header">
          <span className="card-title">
            <Zap size={12} style={{ display: 'inline', marginRight: 5 }} />
            Pre-Clearance Pipeline
          </span>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '11px', color: '#6B7280' }}>{PIPELINE_DATA.length} assets</span>
            <button className="btn btn-ghost" style={{ height: '28px', fontSize: '11px' }}>
              <Eye size={11} /> View All
            </button>
          </div>
        </div>
        <div className="card-body" style={{ padding: 0 }}>
          <div className="data-table-wrap">
            <table className="data-table" id="pipeline-table">
              <thead>
                <tr>
                  <th onClick={() => handleSort('id')} className={sortCol === 'id' ? 'sort-active' : ''}>
                    Asset ID <SortIcon col="id" />
                  </th>
                  <th onClick={() => handleSort('name')} className={sortCol === 'name' ? 'sort-active' : ''}>
                    Asset Name <SortIcon col="name" />
                  </th>
                  <th onClick={() => handleSort('channel')} className={sortCol === 'channel' ? 'sort-active' : ''}>
                    Channel <SortIcon col="channel" />
                  </th>
                  <th onClick={() => handleSort('verdict')} className={sortCol === 'verdict' ? 'sort-active' : ''}>
                    AI Verdict <SortIcon col="verdict" />
                  </th>
                  <th onClick={() => handleSort('codex')} className={sortCol === 'codex' ? 'sort-active' : ''}>
                    Regulatory Codex Flag <SortIcon col="codex" />
                  </th>
                  <th onClick={() => handleSort('ts')} className={sortCol === 'ts' ? 'sort-active' : ''}>
                    Timestamp <SortIcon col="ts" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {sorted.map(row => (
                  <tr key={row.id}>
                    <td><span className="td-id">{row.id}</span></td>
                    <td><span className="td-asset-name">{row.name}</span></td>
                    <td style={{ color: '#4B5563', fontSize: '12px' }}>{row.channel}</td>
                    <td><VerdictBadge verdict={row.verdict} /></td>
                    <td><span className="td-codex">{row.codex}</span></td>
                    <td><span className="timestamp-cell">{row.ts}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
