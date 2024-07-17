import { useQuery } from '@tanstack/react-query';
import useAxiosPublice from './useAxiosPublice';

const useUser = () => {
  const axiosPublic = useAxiosPublice();
  const email = localStorage.getItem('email');
  const { data: userData, refetch } = useQuery({
    queryKey: [email, 'Users'],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/users?email=${email}`);
      return data;
    },
  });
  return { userData, refetch };
};

export default useUser;
