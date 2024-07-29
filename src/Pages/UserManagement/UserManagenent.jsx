import { useQuery } from '@tanstack/react-query';
import useAxiosPublice from '../../Hooks/useAxiosPublice';

const UserManagenent = () => {
  const axiosPublic = useAxiosPublice();
  const { data } = useQuery({
    queryKey: ['users-management'],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/users-management`);
      return data;
    },
  });

  const handileClickAcetiveAccount = (id, role) => {
    axiosPublic.patch(`/active-account/:${id}`).then(res => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        if (role === 'user') {
          axiosPublic.patch(`/userBalance-updates/:${id}`).then(res => {
            console.log(res.data);
          });
          return;
        } else if (role === 'agent') {
          axiosPublic.patch(`/agentsBalance-updates/:${id}`).then(res => {
            console.log(res.data);
          });
          return;
        }
      }
    });
  };

  const handileClickBlockAccount = id => {
    axiosPublic.patch(`/block-account/:${id}`).then(res => {
      console.log(res.data);
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-green-400 text-center mt-8">
        User Management
      </h2>
      <div className="mt-8">
        <form>
          <div className="flex justify-center">
            <input
              type="text"
              className="input w-full md:w-2/3  border-green-500 lg:w-1/3 input-bordered rounded-r-none"
            />
            <button
              className="btn rounded-l-none bg-green-500 text-white"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div>
        <div>
          <div className="overflow-x-auto mt-4">
            <table className="table">
              {/* head */}
              <thead className="bg-green-400 font-semibold text-white ">
                <tr>
                  <th></th>
                  <th>User Name</th>
                  <th>User Email</th>
                  <th>User Number</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Activate</th>
                  <th>Block</th>
                </tr>
              </thead>
              {data?.map((item, index) => (
                <tbody key={item._id}>
                  {/* row 1 */}
                  <tr>
                    <th>{index + 1}</th>
                    <td>{item?.fullName}</td>
                    <td>{item?.email}$</td>
                    <td>{item?.number}</td>
                    <td>{item?.role}</td>
                    <td>{item?.status}</td>
                    <td>
                      <button
                        onClick={() =>
                          handileClickAcetiveAccount(item?._id, item?.role)
                        }
                        className="btn bg-red-500 text-white"
                      >
                        Active
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handileClickBlockAccount(item?._id)}
                        className="btn bg-red-500 text-white"
                      >
                        Block
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

export default UserManagenent;
