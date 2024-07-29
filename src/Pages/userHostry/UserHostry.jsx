import { useQuery } from '@tanstack/react-query';
import useUser from '../../Hooks/useUser';
import useAxiosPublice from '../../Hooks/useAxiosPublice';

const UserHostry = () => {
  const { userData, refetch } = useUser();
  const axiosPublic = useAxiosPublice();
  const { data } = useQuery({
    queryKey: [userData?.email, 'hostry'],
    queryFn: async () => {
      const { data } = await axiosPublic.get(
        `/transactions-history?email=${userData?.email}`
      );
      return data;
    },
  });
  return (
    <div>
      <h2 className="text-2xl font-bold text-green-400 text-center mt-8">
        Transactions History
      </h2>
      <div>
        <div className="overflow-x-auto mt-4">
          <table className="table">
            {/* head */}
            <thead className="bg-green-400 font-semibold text-white ">
              <tr>
                <th></th>
                <th>Email</th>
                <th>Payment amount</th>
                <th>Payment-Status</th>
                <th>Payment Number</th>
                <th>Date</th>
              </tr>
            </thead>
            {data?.map((item, index) => (
              <tbody key={item._id}>
                {/* row 1 */}
                <tr>
                  <th>{index + 1}</th>
                  <td>{item?.email}</td>
                  <td>{item?.money}$</td>
                  <td>{item?.paymentStatus}</td>
                  <td>{item?.numbers}</td>
                  <td>{item?.date}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserHostry;
