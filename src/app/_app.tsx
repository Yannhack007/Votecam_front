import { AppProps } from "next/app";

import RootLayout from "./layout";
import { appWithTranslation } from 'next-i18next';
import './globals.css'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'; 


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default appWithTranslation(MyApp);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getStaticProps({ locale } : any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, 'lang')),
    },
  };
}
