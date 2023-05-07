import '@/styles/globals.css'
import {Montserrat} from "next/font/google"
import { AppProps } from 'next/app';
import Layout from '@/components/common/Layout';
const monsterrat=Montserrat({
  subsets:["latin"],
  variable:"--font-mont"
});
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <main className={`${monsterrat.variable} font-mont bg-light w-full min-h-screen`}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </main>
  );
};

export default MyApp;