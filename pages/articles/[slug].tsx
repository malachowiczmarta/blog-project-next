import Layout from 'components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { getListOfArticles, getArticle } from 'services/articles';
import { Article } from '..';

interface ArticleReq {
  params: { slug: string };
  locales: string | undefined;
  locale: string | undefined;
  defaultLocale: string | undefined;
}

export const getStaticPaths = async () => {
  const articles = getListOfArticles();
  return {
    paths: articles.map((art) => ({ params: { slug: art.slug } })),
    fallback: false
  };
};

export const getStaticProps = async (req: ArticleReq) => {
  const { slug } = req.params;
  const article = await getArticle(slug);

  return { props: { article } };
};

interface ArticleProps {
  article: Article;
}

function Article({ article }: ArticleProps) {
  return (
    <Layout>
      <Head>
        <title>{article.title}</title>
        <link href="https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css" rel="stylesheet" />
      </Head>
      <div className="p-5">
        <div>
          <Link href={'/'} className="text-gray-800 hover:text-blue-600">
            Back
          </Link>
          <h1 className="text-center text-3xl mb-10">{article.title}</h1>
        </div>
        <div
          className="max-w-3xl mx-auto articleBody"
          dangerouslySetInnerHTML={{ __html: article.content ?? '' }}
        />
      </div>
    </Layout>
  );
}

export default Article;
