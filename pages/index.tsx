import Head from 'next/head';
import { Inter } from '@next/font/google';
import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { getListOfArticles } from '@/services/articles';

const inter = Inter({ subsets: ['latin'] });

export const getStaticProps = () => {
  return { props: { articles: getListOfArticles() } };
};

export interface Article {
  slug: string;
  title: string;
  tags: string[];
  description: string;
  createdAt: number;
  cover: string;
  content?: string;
}

interface HomeProps {
  articles: Article[];
}

export default function Home({ articles }: HomeProps) {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <section className="flex flex-row flex-wrap mx-auto">
        {articles.map((article, idx) => (
          <div
            key={idx}
            className="transition-all duration-150 flex w-full px-4 py-6 md:w-1/2 lg:w-1/3"
          >
            <div className="flex flex-col items-stretch min-h-full pb-4 mb-6 transition-all duration-150 bg-white rounded-lg shadow-lg hover:shadow-2xl">
              <div className="md:flex-shrink-0">
                <Image
                  src={article.cover}
                  width="490"
                  height="225"
                  alt="Blog Cover"
                  className="object-fill w-full rounded-lg rounded-b-none md:h-56"
                />
              </div>
              <div className="flex items-center justify-between px-4 py-2 overflow-hidden">
                <span className="text-xs font-medium text-blue-600 uppercase">
                  {article.tags[0]}
                </span>
                <div className="text-xs font-medium text-gray-500 flex flex-row items-center">
                  {new Date(article.createdAt).toLocaleDateString()}
                </div>
              </div>
              <hr className="border-gray-300" />
              <div className="flex flex-wrap items-center flex-1 px-4 py-1 text-center mx-auto">
                <Link href={`/articles/${article.slug}`} className="hover:underline">
                  <h2 className="text-1xl font-bold tracking-normal text-gray-800">
                    {article.title}
                  </h2>
                </Link>
              </div>
              <hr className="border-gray-300" />
              <p className="flex flex-row flex-wrap w-full px-4 py-2 overflow-hidden text-sm text-justify text-gray-700">
                {article.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}
