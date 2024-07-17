import useUser from '../../Hooks/useUser';

const OwerView = () => {
  const { userData, refetch } = useUser();

  return (
    <div className="w-2/3 mx-auto   p-8 rounded-lg shadow-lg mt-12 border border-green-500">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        User Overview
      </h1>
      <img
        className="w-40 h-40 rounded-full mx-auto border-2 border-green-500 p-4"
        src={userData?.image}
        alt=""
      />
      <div className="space-y-4 mt-6">
        <p className="text-lg">
          <strong className="text-gray-600">Name:</strong> {userData?.name}
        </p>
        <p className="text-lg">
          <strong className="text-gray-600">Email Address:</strong>{' '}
          {userData?.email}
        </p>
        <p className="text-lg">
          <strong className="text-gray-600">Phone Number:</strong>{' '}
          {userData?.number}
        </p>
        <p className="text-lg">
          <strong className="text-gray-600">Account Balance:</strong>{' '}
          {userData?.balance} Taka
        </p>
      </div>
    </div>
  );
};

export default OwerView;
