# Compliance Firewall

A comprehensive compliance and integration management platform built with React and Vite. This application provides real-time monitoring, conflict resolution, and centralized management of multi-channel compliance operations.

## Features

- **Audit Vault** - Secure audit log management and compliance tracking
- **Command Center** - Centralized dashboard for system monitoring and control
- **Conflict Resolution** - Intelligent conflict detection and resolution workflows
- **Integrations Hub** - Unified management of multiple integration channels
- **Multi-Channel Support**:
  - Call Center Integration
  - CRM Synchronization
  - SMS Gateway Management
  - Social Media Integration
  - Web Scanner
  - Omnichannel Management
- **Live Sync** - Real-time data synchronization across platforms (Codex Live Sync)
- **Remediation Tools** - Automated remediation workflows and response handling

## Tech Stack

- **Frontend Framework**: React 19.2.6
- **Build Tool**: Vite 8.0.12
- **Charting**: Recharts 3.8.1
- **UI Icons**: Lucide React 1.20.0
- **Linting**: ESLint with React plugins

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/diwansinghchauhan/compliance-firewall.git
cd compliance-firewall
```

2. Install dependencies
```bash
npm install
```

### Development

Start the development server with hot module replacement:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Create an optimized production build:
```bash
npm run build
```

### Preview

Preview the production build locally:
```bash
npm run preview
```

### Linting

Run ESLint to check code quality:
```bash
npm run lint
```

## Project Structure

```
src/
├── views/              # Main application views
│   ├── AuditVault.jsx
│   ├── CallCenterDetail.jsx
│   ├── CodexLiveSync.jsx
│   ├── CommandCenter.jsx
│   ├── ConflictResolution.jsx
│   ├── CrmSyncDetail.jsx
│   ├── IntegrationsHub.jsx
│   ├── OmnichannelDetail.jsx
│   ├── Remediation.jsx
│   ├── SmsGatewayDetail.jsx
│   ├── SocialMediaDetail.jsx
│   └── WebScannerDetail.jsx
├── App.jsx            # Main application component
├── main.jsx           # Application entry point
└── index.css          # Global styles
```

## License

This project is proprietary and confidential.
