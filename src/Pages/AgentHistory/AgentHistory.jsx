import { useQuery } from '@tanstack/react-query';
import useAxiosPublice from '../../Hooks/useAxiosPublice';
import useUser from '../../Hooks/useUser';

const AgentHistory = () => {
  const { userData, refetch } = useUser();
  const axiosPublic = useAxiosPublice();
  const { data } = useQuery({
    queryKey: [userData?.email, 'agent-hostry'],
    queryFn: async () => {
      const { data } = await axiosPublic.get(
        `/agent-history?email=${userData?.email}`
      );
      return data;
    },
  });

  return (
    <div>
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
                  <th>My Email</th>
                  <th>Payment Amount</th>
                  <th>Payment Email</th>
                  <th>Date</th>
                  <th>Payment-Status</th>
                </tr>
              </thead>
              {data?.map((item, index) => (
                <tbody key={item._id}>
                  {/* row 1 */}
                  <tr>
                    <th>{index + 1}</th>
                    <td>{item?.email}</td>
                    <td>{item?.money}$</td>
                    <td>{item?.useremail}</td>
                    <td>{item?.date}</td>
                    <td>{item?.paymentStatus}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentHistory;
