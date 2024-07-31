import { useQuery } from '@tanstack/react-query';
import useAxiosPublice from '../../Hooks/useAxiosPublice';
import { useState } from 'react';

const UserManagenent = () => {
  const axiosPublic = useAxiosPublice();
  const { data, refetch } = useQuery({
    queryKey: ['users-management'],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/users-management`);
      setSearchData(data);
      return data;
    },
  });
  const [SearchData, setSearchData] = useState([]);

  const handileClickAcetiveAccount = (id, role) => {
    axiosPublic.patch(`/active-account/${id}`).then(res => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        if (role === 'user') {
          axiosPublic.patch(`/userBalance-updates/${id}`).then(res => {
            console.log(res.data);
          });
          return;
        } else if (role === 'agent') {
          axiosPublic.patch(`/agentsBalance-updates/${id}`).then(res => {
            console.log(res.data);
            refetch();
          });
          return;
        }
      }
    });
  };

  const handileClickBlockAccount = id => {
    axiosPublic.patch(`/block-account/${id}`).then(res => {
      refetch();
      console.log(res.data);
    });
  };

  const handileClickSearch = e => {
    e.preventDefault();

    const search = e.target.searchText.value;

    axiosPublic.get(`/searcNames?search=${search}`).then(res => {
      console.log(res.data);
      setSearchData(res.data);
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-green-400 text-center mt-8">
        User Management
      </h2>
      <div className="mt-8">
        <form onSubmit={handileClickSearch}>
          <div className="flex justify-center">
            <input
              type="text"
              name="searchText"
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
              {SearchData?.map((item, index) => (
                <tbody key={item._id}>
                  {/* row 1 */}
                  <tr>
                    <th>{index + 1}</th>
                    <td>{item?.name}</td>
                    <td>{item?.email}</td>
                    <td>{item?.number}</td>
                    <td>{item?.role}</td>
                    <td>{item?.status}</td>
                    <td>
                      <button
                        onClick={() =>
                          handileClickAcetiveAccount(item?._id, item?.role)
                        }
                        className={
                          item?.status === 'actived'
                            ? 'btn bg-green-500 text-white btn-disabled'
                            : 'btn bg-green-500 text-white'
                        }
                      >
                        Active
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handileClickBlockAccount(item?._id)}
                        className={
                          item?.status === 'block'
                            ? 'btn bg-red-500 text-white btn-disabled'
                            : 'btn bg-red-500 text-white'
                        }
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
