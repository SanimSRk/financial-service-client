import { useQuery } from '@tanstack/react-query';
import useAxiosPublice from '../../Hooks/useAxiosPublice';
import useUser from '../../Hooks/useUser';

const TransactionManagement = () => {
  const { userData, refetch } = useUser();
  const axiosPublic = useAxiosPublice();

  const { data } = useQuery({
    queryKey: [userData?.email, 'transaction-hostry'],
    queryFn: async () => {
      const { data } = await axiosPublic.get(
        `/transactions-management?email=${userData?.number}`
      );
      return data;
    },
  });

  const handileClickeManagement = (id, email, money) => {
    const moneyInfo = {
      money,
    };
    axiosPublic
      .patch(`/userBalance-update?email=${email}`, moneyInfo)
      .then(res => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          axiosPublic
            .patch(`/agentBalance-update?email=${userData?.email}`, moneyInfo)
            .then(res => {
              console.log(res.data);
              if (res.data.modifiedCount) {
                axiosPublic.put(`/request-mamagement/${id}`).then(res => {
                  console.log(res.data);
                  const paymentInfo = {
                    useremail: email,
                    email: userData.email,
                    money,
                    paymentStatus: 'cash-out',
                    date: new Date(),
                  };

                  axiosPublic
                    .post('/send-payment-history', paymentInfo)
                    .then(res => {
                      console.log(res.data);
                      refetch();
                    });
                });
              }
            });
        }
      });
  };

  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold text-green-400 text-center mt-8">
          Transaction Management
        </h2>
        <div>
          <div className="overflow-x-auto mt-4">
            <table className="table">
              {/* head */}
              <thead className="bg-green-400 font-semibold text-white ">
                <tr>
                  <th></th>
                  <th>User-Email</th>
                  <th>Payment amount</th>
                  <th>My Number</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              {data?.map((item, index) => (
                <tbody key={item._id}>
                  {/* row 1 */}
                  <tr>
                    <th>{index + 1}</th>
                    <td>{item?.email}</td>
                    <td>{item?.money}$</td>
                    <td>{item?.numbers}</td>
                    <td>{item?.status}</td>
                    <td>{item?.date}</td>
                    <td>
                      <button
                        onClick={() =>
                          handileClickeManagement(
                            item?._id,
                            item?.email,
                            item?.money
                          )
                        }
                        className="btn bg-green-500 text-white"
                      >
                        Approbe
                      </button>
                    </td>
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

export default TransactionManagement;
