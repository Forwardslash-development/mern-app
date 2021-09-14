import { Router } from 'next/router';
import NProgress from 'nprogress';
import Nav from '../components/Nav';

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.start();
Router.onRouteChangeError = (url) => NProgress.start();

const Page = ({ children }) => (
  <>
    <main>
      <Nav />
      {children}
    </main>
  </>
);

export default Page;
