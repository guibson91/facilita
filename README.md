# Facilita

<p align="center">
  <img src="assets/logo.png" alt="Facilita Logo" width="200"/>
</p>

<p align="center">
  <a href="#"><img src="https://img.shields.io/badge/version-1.0.0-blue.svg" alt="Version 1.0.0"></a>
  <a href="#"><img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License MIT"></a>
</p>

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Setup](#environment-setup)
- [Running the Application](#running-the-application)
  - [Development Mode](#development-mode)
  - [Production Build](#production-build)
- [Deployment](#deployment)
- [API Documentation](#api-documentation)
- [Authentication](#authentication)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 🚀 Overview

Facilita is a comprehensive system built with **Ionic 4, Angular, and Firebase**, designed to
enhance customer service, delivery operations, relationship management, and financial services for
establishments that utilize menu-based product offerings.

## ✨ Features

- **Customer Management**: Track and manage customer information and preferences
- **Order Processing**: Streamlined order creation, tracking, and fulfillment
- **Menu Management**: Easy-to-update digital menus with categories and customizations
- **Delivery Tracking**: Real-time monitoring of delivery status
- **Financial Reports**: Comprehensive sales and revenue analytics
- **Push Notifications**: Instant updates for customers and staff
- **User Authentication**: Secure login via email, Facebook, and Google

## 🏛️ Architecture

Facilita follows a modern client-server architecture with Firebase as the backend:

```
┌─────────────┐      ┌─────────────┐      ┌─────────────┐
│   Ionic 4   │      │   Firebase  │      │  External   │
│   Angular   │◄────►│   Services  │◄────►│   Services  │
│    Front    │      │  Back-end   │      │ (Payment,   │
│     End     │      │             │      │  Maps, etc) │
└─────────────┘      └─────────────┘      └─────────────┘
```

## 🛠️ Tech Stack

- **Frontend**:

  - Ionic 4
  - Angular
  - TypeScript
  - SCSS

- **Backend**:

  - Firebase Firestore
  - Firebase Authentication
  - Firebase Cloud Functions
  - Firebase Hosting

- **Notifications**:

  - OneSignal

- **Authentication**:
  - Firebase Authentication
  - Facebook Login
  - Google Login

## 🏁 Getting Started

### Prerequisites

- Node.js (v16)
- npm (v8+) or yarn
- Ionic CLI (`npm install -g @ionic/cli`)
- Angular CLI (`npm install -g @angular/cli`)
- Firebase CLI (`npm install -g firebase-tools`)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/facilita.git

# Navigate to project directory
cd facilita

# Install dependencies
npm install
```

### Environment Setup

1. Create a `.env` file in the root directory based on `.env.example`
2. Set up Firebase project and update configuration
3. Configure authentication providers (Firebase, Facebook, Google)

### Environment Compatibility

#### For Mac with Apple Silicon (M1/M2/M3)

```bash
# Use Node.js v16 with NVM
nvm use 16

# If using node-sass, you may experience compatibility issues
# Recommended to use Dart Sass instead:
npm uninstall node-sass
npm install sass --save-dev

# For TypeScript type definition issues
npm install --save-dev @types/minimatch
```

## 🖥️ Running the Application

### Development Mode

```bash
# Start the development server
ionic serve
```

### Production Build

```bash
# Generate production build
ionic build --prod
```

## 📦 Deployment

Facilita supports multi-site deployment with Firebase Hosting:

### Multiple Hosting Configuration

- **Target**: 'coca'
- **Site ID**: 'mobiup-konnect-consumidor'
- **URL**: https://mobiup-konnect-consumidor.web.app

### Deployment Commands

```bash
# Deploy to specific target
firebase deploy --only hosting:TARGET_NAME

# Create a new site ID
firebase hosting:sites:create mobiup-konnect-consumidor

# Apply hosting target
firebase target:apply hosting coca mobiup-konnect-consumidor
```

For more information, visit the
[Firebase multi-site hosting documentation](https://firebase.google.com/docs/hosting/multisites)

## 📚 API Documentation

API documentation is available at `/docs` when running the development server, or you can view the
[online API documentation](https://example.com/api-docs).

## 🔐 Authentication

### Facebook Login

Facebook authentication is configured under the
[Facebook Apps console](https://developers.facebook.com/apps) using the account:
guibson1991@gmail.com

### Google Login

Google authentication is configured under the
[Google Developer Console](https://console.developers.google.com/) using the account:
developer@nanocode.com.br

## 📱 OneSignal Integration

Push notifications are managed through OneSignal under the account: contato@nanocode.com.br

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run end-to-end tests
npm run e2e
```

## 📂 Project Structure

```
facilita/
├── src/                  # Source code
│   ├── app/              # App components
│   ├── assets/           # Static assets
│   ├── environments/     # Environment configurations
│   └── theme/            # Global styles
├── e2e/                  # End-to-end tests
├── firebase/             # Firebase functions and config
├── config/               # Build configurations
└── resources/            # App resources (icons, splash screens)
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

Developed by Nanocode - [developer@nanocode.com.br](mailto:developer@nanocode.com.br)

---

<p align="center">
  Made with ❤️ by the Facilita Team
</p>
