import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prompt Injection Attack Simulator — Test AI Prompts Against Injection Attacks',
  description: 'Simulate prompt injection techniques against your AI prompts. Get security scoring and hardening suggestions for AI application developers and security teams.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2bc559ba-43f6-4392-8ffc-9c75c4621048"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
