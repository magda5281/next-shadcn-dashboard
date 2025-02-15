# ShadCN UI Dashboard in Next.js

In this small project, I learned how to implement the [ShadCN UI](https://ui.shadcn.com/) ui components in [Next.js](https://nextjs.org/). I explored the available components in ShadCN, used the CLI to add them to the app, and built an example dashboard using these components.

This project is deployed to [Vercel](https://vercel.com/).

## Features Implemented

### 🔹 ShadCN UI Integration
- Looked at various components provided by ShadCN.
- Used the ShadCN CLI to add components to the app.
- Built an example dashboard using ShadCN components.

### 🎨 Theming with `next-themes`
- Implemented both **light/dark and custom themes**.
- Extended the theme using **CSS variables** to bring in additional customization options.

### 📌 Dashboard UI Implementation
- Created a **dashboard page** using ShadCN components.
- Added **MainNav** to the dashboard.
- Used `cn` function from ShadCN to handle Tailwind classes dynamically.
- Installed [`clsx`](https://github.com/lukeed/clsx) to conditionally join class names.
- Used [`twMerge`](https://github.com/dcastil/twMerge) to merge Tailwind classes and prevent conflicts (`twMerge(clsx(inputs))`).

## Getting Started

### 🛠️ Installation
First, install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 🚀 Running the Development Server
To start the project, run:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Then, open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment
The easiest way to deploy a Next.js app is with [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

---
### 📚 Learn More
To learn more about Next.js and ShadCN UI:
- [Next.js Documentation](https://nextjs.org/docs)
- [ShadCN UI](https://ui.shadcn.com/)
- [next-themes](https://github.com/pacocoursey/next-themes)

