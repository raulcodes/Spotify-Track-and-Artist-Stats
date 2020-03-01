import { useEffect } from 'react';
import { useRouter } from 'next/router'

const Authorize = () => {
  const router = useRouter();
  // const lightModeState = '124';
  const darkModeState = '246';

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