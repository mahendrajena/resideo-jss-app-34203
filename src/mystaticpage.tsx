import Head from 'next/head';

/**
 * Rendered in case if we have mystaticpage error
 */
const mystaticpage = (): JSX.Element => (
  <>
    <Head>
      <title>mystaticpage</title>
    </Head>
    <div style={{ padding: 10 }}>
      <h1>My static page</h1>
      <p>Page Generated @ {`${new Date().toLocaleString()}`}</p>
      <a href="/">Go to the Home page</a>
    </div>
  </>
);

export default mystaticpage;
