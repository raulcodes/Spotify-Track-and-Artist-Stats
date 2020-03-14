import { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';

const Authorize = () => {
  const router = useRouter();
  // const lightModeState = '124';
  const darkModeState = '246';

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
    var matches = location.hash.match(new RegExp(key+'=([^&]*)'));
    return matches ? matches[1] : null;
  }

  useEffect(() => {        
    const accessToken = getHashValue('access_token')
    if (accessToken) {
      let darkMode = false;
      if (getHashValue('state') === darkModeState) {
        darkMode = true;
      }
      router.replace({ 
        pathname: '/stats', 
        query: { 
          accessToken: accessToken,
          darkMode: darkMode,
        }
      });
    } else {
      router.push('/');
    }
  }, [])

  return null;
}

export default Authorize