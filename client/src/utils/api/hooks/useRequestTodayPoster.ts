import { useQuery } from '@tanstack/react-query';
import { requestTodayPoster } from '@utils';

export const useRequestPosterQuery = () => {
  return useQuery({
    queryKey: ['today'],
    queryFn: () => requestTodayPoster()
  });
};
