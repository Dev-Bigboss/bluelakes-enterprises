import { Metadata } from 'next';
import HomePage from '@/components/Homepage';

export const metadata: Metadata = {
  title: 'Bluelake Enterprises Limited - Home',
  description: 'Welcome to Bluelake Enterprises Limited, your trusted partner for property investment and development in England.',
};

export default function Home() {
  return <HomePage />;
}