import AppHeader from '@/components/common/app-header';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import './globals.css';

const firaCode = Fira_Code({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'JS Tips',
  description:
    'Explore the latest trends, tips, and tutorials in JavaScript and React development. Stay updated with our in-depth articles on best practices, frameworks, and tools.',
  keywords:
    'javascript, js, react, blog, nextjs, tips, js tips, javascript tips',
  robots: 'index, follow',
  applicationName: 'JS Tips',
  generator: 'Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={firaCode.className}>
        <div className='container flex min-h-screen flex-col lg:px-60'>
          <AppHeader />
          <div className='flex-1 relative'>{children}</div>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
