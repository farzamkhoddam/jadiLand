import type { AppProps } from 'next/app';
import { MenuProvider } from '../contexts/MenuContext';
import '../styles/global.scss';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MenuProvider>
        <Component {...pageProps} />
      </MenuProvider>
    </>
  );
}
