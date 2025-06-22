import { Metadata } from 'next';
import HomePage from '@/components/Homepage';

export const metadata: Metadata = {
  title: 'Bluelakes Enterprises Limited - Home',
  description: 'Welcome to Bluelakes Enterprises Limited, your trusted partner for property investment and development in England.',
};

export default function Home() {
  return <HomePage />;
}