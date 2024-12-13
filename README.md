# Proof of Identity

Proof of Identity is a Telegram Mini App that simplifies social media profile verification. Built for recruiters, hiring managers, and community administrators who need to quickly verify the authenticity of social media handles shared in Telegram groups.

## 🌟 Key Features

- **Fast Verification**: Create QR codes or links for instant social media validation.
- **Cross-Platform Compatibility**: Verify profiles on platforms like:
  - GitHub
  - Twitter (X)
  - YouTube
  - Upwork
  - LinkedIn
  - Instagram
  - And more platforms coming soon!
- **Telegram Support**: Fully integrated as a Mini App within Telegram.
- **Instant Results**: Receive verification status in real time.
- **Easy-to-Use Interface**: Designed with simplicity and usability in mind for both users and verifiers.

## 🎯 Problem It Solves

In Telegram groups and channels, people often share their social media handles for job opportunities, networking, or community participation. However, verifying the authenticity of these handles can be:

- Time-consuming
- Error-prone
- Difficult to track
- Subject to impersonation

Proof of Identity solves these issues by providing a streamlined verification process that confirms ownership of social media accounts through secure proof generation.

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- Telegram Bot Token
- Reclaim Protocol API credentials

### Installation

1. Clone the repository:

```bash
git clone https://github.com/FjrREPO/proof-of-identity
cd proof-of-identity
```

2. Install dependencies:

```bash
# Install server dependencies
pnpm i
```

3. Configure environment variables:

```bash
cp .env.example .env
```

4. Start the development server:

```bash
# Start backend
yarn run dev

```

## 🔑 Environment Variables

### Server (.env)

```
# Reclaim Tokens
VITE_PUBLIC_RECLAIM_APP_ID=<TOKEN>
VITE_PUBLIC_RECLAIM_APP_SECRET=<TOKEN>
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request