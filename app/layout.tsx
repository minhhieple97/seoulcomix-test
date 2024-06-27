import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { TrpcProvider } from '@/utils/trpc-provider';
import '@/app/_styles/globals.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Restaurants',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TrpcProvider>
          <div>{children}</div>
        </TrpcProvider>
      </body>
    </html>
  );
}
