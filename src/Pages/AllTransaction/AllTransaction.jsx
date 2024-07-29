import { useQuery } from '@tanstack/react-query';
import useAxiosPublice from '../../Hooks/useAxiosPublice';

const AllTransaction = () => {
  const axiosPublic = useAxiosPublice();
  const { data } = useQuery({
    queryKey: ['all-transaction'],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/all-transactions`);
      return data;
    },
  });

  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold text-green-400 text-center mt-8">
          User Management
        </h2>
        <div>
          <div className="overflow-x-auto mt-4">
            <table className="table">
              {/* head */}
              <thead className="bg-green-400 font-semibold text-white ">
                <tr>
                  <th></th>
                  <th>User Email</th>
                  <th>Payment-Status</th>
                  <th>Payment Amount</th>
                  <th>Payment Date</th>
                </tr>
              </thead>
              {data?.map((item, index) => (
                <tbody key={item._id}>
                  {/* row 1 */}
                  <tr>
                    <th>{index + 1}</th>
                    <td>{item?.email}$</td>
                    <td>{item?.paymentStatus}</td>
                    <td>{item?.money}</td>
                    <td>{item?.date}</td>
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

export default AllTransaction;
