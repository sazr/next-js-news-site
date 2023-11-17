import Head from 'next/head';
import Header from './header/header';
import Footer from './footer';

export const siteTitle = 'Next.js Sample Website';

export default ({ children, home }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <Header />

      <main className="max-w-screen-lg mx-auto">{children}</main>

      <Footer />

    </>
  );
}
