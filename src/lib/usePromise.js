import { useState, useEffect } from 'react';

export default function usePromise(promiseCreator, deps) {
  const [loading, setLoading] = useState(false);
  const [resloved, setResolved] = useState(null);
  const [err, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const reslove = await promiseCreator();
        setResolved(reslove);
      } catch(e) {
        setError(e);
      }
      setLoading(false);
    };
    process();
    //  eslint-disable-next-line
  }, deps);
  
  return [loading, resloved, err];
};