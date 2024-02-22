import { useQuery } from 'react-query';
import axios from 'axios';

const useFetchData = (queryKey, url, config, errorMessage, dependency, noCache) => {
  const queryFunction = async () => {
    const response = await axios.get(url, config);
    return response;
  };

  const { data, isLoading, error } = useQuery({ queryKey, queryFn: queryFunction }, {
    staleTime: noCache ? false : 3600 * 1000,
    cacheTime: noCache ? false : 3600 * 1000,
    enabled: !!dependency || true,
    onError: () => {
      console.error(errorMessage);
    },
  });

  return { data, isLoading, error };
};

export default useFetchData;
