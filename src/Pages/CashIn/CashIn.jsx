import { useForm } from 'react-hook-form';
import useUser from '../../Hooks/useUser';
import useAxiosPublice from '../../Hooks/useAxiosPublice';
import { toast } from 'react-toastify';

const CashIn = () => {
  const { userData, refetch } = useUser();
  const axiosPublic = useAxiosPublice();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    const { numbers, balance } = data;
    console.log(numbers, balance);
    const date = new Date();
    if (userData?.status === 'actived') {
      const sendRequst = {
        numbers,
        money: balance,
        email: userData?.email,
        userNumber: userData?.number,
        status: 'request',
        date,
        paymentStatus: 'cash-in',
      };

      axiosPublic.post('/amount-request', sendRequst).then(res => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success('Cash in request success fully send ');
        }
      });
    } else {
      toast.error(
        ' your account is not actived please with active your account! '
      );
    }
  };
  return (
    <div>
      <div className=" lg:w-1/2 border-2 border-green-300 mx-auto py-8 px-6 my-[80px] shadow-lg lg:py-[60px] lg:px-[80px]">
        <h2 className="text-3xl font-bold text-center gap-0 ">
          <span className="text-green-400">Cash</span>-In
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-8">
            <div className="form-control my-6">
              <input
                type="text"
                placeholder="request amount"
                className="input  input-bordered border-green-300"
                {...register('balance', { required: true })}
                required
              />
            </div>

            <div className="form-control w-full mt-2">
              <label className="label">
                <span className="label-text">Agent Account Number</span>
              </label>
              <input
                type="number"
                className="input input-bordered border-green-300"
                placeholder="Entr agent number"
                name=""
                id=""
                {...register('numbers', { required: true })}
              />
            </div>
          </div>

          <input
            className="text-white btn w-full mt-6 bg-green-400"
            type="submit"
            value="Cash-In request"
          />
        </form>
      </div>
    </div>
  );
};

export default CashIn;
