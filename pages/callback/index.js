import { useEffect } from 'react';
import { useRouter } from 'next/router'

const Authorize = () => {
  const router = useRouter();
  const expected_state = '125';

  const getHashValue = (key) => {
    var matches = location.hash.match(new RegExp(key+'=([^&]*)'));
    return matches ? matches[1] : null;
  }

  useEffect(() => {        
    const accessToken = getHashValue('access_token')
    if ((expected_state === getHashValue('state')) && accessToken) {
      router.replace({ pathname: '/stats', query: { accessToken: accessToken }});
    } else {
      router.push('/');
    }
  }, [])

  return null;
}

export default Authorize