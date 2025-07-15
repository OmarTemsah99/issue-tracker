<h1 align="center">🐛 Issue Tracker</h1>

<p align="center">
  A modern issue tracking app built with the latest Next.js, TypeScript, Prisma, and more.<br>
  Based on <strong>Mosh Hamedani's</strong> project, refactored with current best practices.
</p>

<p align="center">
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-15-blue?logo=next.js" alt="Next.js"></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-4.9+-blue?logo=typescript" alt="TypeScript"></a>
  <a href="https://www.prisma.io/"><img src="https://img.shields.io/badge/Prisma-ORM-informational?logo=prisma" alt="Prisma"></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/TailwindCSS-3.x-06b6d4?logo=tailwindcss" alt="Tailwind CSS"></a>
  <a href="https://vercel.com/"><img src="https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel" alt="Vercel"></a>
</p>

---

<h2>🎥 Demo</h2>

<p>
  👉 <a href="https://drive.google.com/file/d/1WCVShLoFuvfw1kPVX1HYi44whKzlDJiX/view?usp=sharing" target="_blank">
    Watch the live demo video on Google Drive
  </a>
</p>

---

<h2>📋 Table of Contents</h2>

<ul>
  <li><a href="#-features">Features</a></li>
  <li><a href="#-tech-stack">Tech Stack</a></li>
  <li><a href="#-getting-started">Getting Started</a></li>
  <li><a href="#-usage">Usage</a></li>
  <li><a href="#-scripts">Scripts</a></li>
  <li><a href="#-deployment">Deployment</a></li>
  <li><a href="#-troubleshooting">Troubleshooting</a></li>
  <li><a href="#-contributors">Contributors</a></li>
  <li><a href="#-license">License</a></li>
</ul>

---

<h2>🚀 Features</h2>

<ul>
  <li>🧾 Full CRUD functionality for issues</li>
  <li>🔐 Google OAuth with NextAuth.js</li>
  <li>🧑‍🤝‍🧑 Assign issues to team members</li>
  <li>🔍 Filter & sort issues by status, priority, or assignee</li>
  <li>📈 Dashboard with real-time issue stats</li>
  <li>📝 Markdown editor for detailed descriptions</li>
  <li>⚡ Optimistic UI updates using React Query</li>
  <li>💅 Styled with Tailwind CSS and Radix UI</li>
</ul>

---

<h2>🧱 Tech Stack</h2>

<table>
  <tr><td>Frontend</td><td>Next.js 15 (App Router), React, TypeScript</td></tr>
  <tr><td>Styling</td><td>Tailwind CSS, Radix UI</td></tr>
  <tr><td>Forms</td><td>React Hook Form, Zod</td></tr>
  <tr><td>Data</td><td>Prisma ORM, PostgreSQL/MySQL</td></tr>
  <tr><td>Auth</td><td>NextAuth.js (Google Provider)</td></tr>
  <tr><td>API</td><td>Next.js API Routes</td></tr>
  <tr><td>Charts</td><td>Chart.js</td></tr>
  <tr><td>State</td><td>React Query</td></tr>
</table>

---

<h2>⚙️ Getting Started</h2>

<ol>
  <li><strong>Clone the repository</strong>
    <pre><code>git clone https://github.com/OmarTemsah99/issue-tracker.git
cd issue-tracker</code></pre>
  </li>
  <li><strong>Install dependencies</strong>
    <pre><code>npm install</code></pre>
  </li>
  <li><strong>Set up environment variables</strong>
    <pre><code>cp .env.example .env</code></pre>
    Fill in:
    <pre><code>DATABASE_URL="mysql://user:password@localhost:3306/issue_tracker"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret"
GOOGLE_CLIENT_ID="your-client-id"
GOOGLE_CLIENT_SECRET="your-client-secret"</code></pre>
  </li>
  <li><strong>Run Prisma migrations</strong>
    <pre><code>npx prisma migrate dev</code></pre>
  </li>
  <li><strong>Start the development server</strong>
    <pre><code>npm run dev</code></pre>
    Visit <a href="http://localhost:3000">http://localhost:3000</a>
  </li>
</ol>

---

<h2>📚 Usage</h2>

<ul>
  <li>Sign in with Google</li>
  <li>Create and assign issues</li>
  <li>Edit, delete, or filter issues</li>
  <li>View dashboards with charts</li>
  <li>All interactions are cached for performance</li>
</ul>

---

<h2>🛠️ Scripts</h2>

<pre><code>npm run dev        # Start dev server
npm run build      # Build for production
npm run start      # Run production server
npx prisma studio  # Open Prisma DB GUI
npx prisma migrate dev  # Apply DB migrations
</code></pre>

---

<h2>☁️ Deployment</h2>

<p>This project is optimized for <a href="https://vercel.com/">Vercel</a>. Make sure to set all required <code>.env</code> variables in your Vercel dashboard.</p>

Recommended Database Services:

- <a href="https://planetscale.com/">PlanetScale</a>
- <a href="https://neon.tech/">Neon</a>
- <a href="https://supabase.io/">Supabase</a>

---

<h2>🧯 Troubleshooting</h2>

<ul>
  <li><strong>Auth issues</strong>: Check Google credentials and <code>NEXTAUTH_SECRET</code></li>
  <li><strong>Prisma errors</strong>: Validate your <code>DATABASE_URL</code></li>
  <li><strong>Build fails</strong>: Clear <code>.next</code> and try rebuilding</li>
</ul>

---

<h2>👨‍💻 Contributors</h2>

<ul>
  <li><strong>Omar Temsah</strong> – project refactor, modernization</li>
  <li>Based on <a href="https://codewithmosh.com/">Mosh Hamedani</a>’s issue tracker course</li>
</ul>

---

<h2>📄 License</h2>

<p>Licensed under the <strong>MIT License</strong>.</p>

---

<h2>📘 Learn More</h2>

<ul>
  <li><a href="https://nextjs.org/docs">Next.js Documentation</a></li>
  <li><a href="https://www.prisma.io/docs">Prisma Docs</a></li>
  <li><a href="https://next-auth.js.org/">NextAuth.js Docs</a></li>
  <li><a href="https://codewithmosh.com/p/nextjs-projects-issue-tracker">Mosh's Issue Tracker Course</a></li>
</ul>

---

<p align="center">Built with ❤️ and modern web technologies</p>
