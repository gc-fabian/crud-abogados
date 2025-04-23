// pages/_app.js
import '../styles/globals.css';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>
        <Link href="/abogados">Abogados</Link>{' '}|{' '}
        <Link href="/abogados/nuevo">Nuevo</Link>
      </nav>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
