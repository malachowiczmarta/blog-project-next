import Head from 'next/head';
import { Inter } from '@next/font/google';
import Layout from '@/components/Layout';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
    </Layout>
  );
}
