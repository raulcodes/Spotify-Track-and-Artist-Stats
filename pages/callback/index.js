import { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';

const Authorize = () => {
  const router = useRouter();
  const expectedState = '246';

  Router.onRouteChangeStart = () => {
    NProgress.start();
  };

  Router.onRouteChangeComplete = () => {
    NProgress.done();
  };

  Router.onRouteChangeError = () => {
    NProgress.done();
  };

  const getHashValue = (key) => {
    var matches = location.hash.match(new RegExp(key + '=([^&]*)'));
    return matches ? matches[1] : null;
  };

  useEffect(() => {
    const accessToken = getHashValue('access_token');
    if (accessToken && getHashValue('state') === expectedState) {
      router.replace({
        pathname: '/stats',
        query: {
          accessToken: accessToken,
        },
      });
    } else {
      router.push('/');
    }
  }, []);

  return null;
};

export default Authorize;
