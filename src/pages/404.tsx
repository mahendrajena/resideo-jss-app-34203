import Head from 'next/head';

const Custom404 = (): JSX.Element => (
  <>
    <Head>
      <title>404: Custom404</title>
    </Head>
    <div style={{ padding: 10 }}>
      <h1>Page not found</h1>
      <p>This page does not exist.</p>
      <p>Page Generated @</p>
      <a href="/">Go to the Home page</a>
    </div>
  </>
);

export default Custom404;
