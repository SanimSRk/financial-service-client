import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useUser from '../../Hooks/useUser';
import useAxiosPublice from '../../Hooks/useAxiosPublice';
import { toast } from 'react-toastify';

const CashOut = () => {
  const [sendMoney, setSendMoney] = useState(0);
  const [sendMessage, setSendMessange] = useState('');
  const { userData, refetch } = useUser();
  const axiosPublic = useAxiosPublice();
  console.log(userData?.balance);
  const handileClickCoins = e => {
    setSendMoney(e);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
    const { numbers, password } = data;
    const date = new Date();
    const money = parseFloat(sendMoney);
    const email = localStorage.getItem('email');
    console.log(numbers, money, date, email);
    if (userData?.status === 'actived') {
      const sendIfno = { email, numbers, money, password, date };
      if (userData?.balance < money) {
        setSendMessange('not avile avile balance');
        return;
      } else {
        axiosPublic.post('/cash-out', sendIfno).then(res => {
          console.log(res.data);
          if (res?.data?.message) {
            setSendMessange(res?.data?.message);
            return;
          } else {
            setSendMessange('');
          }
          if (res.data.user.insertedId) {
            toast.success('Cash out success fully done ');
          }
        });
      }
    } else {
      toast.error(
        ' your account is not actived please with active your account! '
      );
    }
  };
  console.log(sendMessage);
  return (
    <div>
      <div className=" lg:w-2/3 border-2 border-green-300 mx-auto py-8 px-6 my-[80px] shadow-lg lg:py-[60px] lg:px-[80px]">
        <h2 className="text-3xl font-bold text-center gap-0 ">
          <span className="text-green-400">Cash</span>Out
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" mt-8">
            <div className="form-control my-6">
              <input
                type="text"
                placeholder="sending amount
"
                onChange={e => handileClickCoins(e.target.value)}
                name="sendmoney"
                className="input flex items-center input-bordered border-green-300"
                required
              />
            </div>

            <div className="form-control w-full mt-2">
              <label className="label">
                <span className="label-text">Account Number</span>
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

          <div className="form-control w-full mt-2">
            <label className="label">
              <span className="label-text">Your pin</span>
            </label>
            <input
              type="password"
              className="input input-bordered border-green-300"
              placeholder="Enter your pin"
              name=""
              id=""
              {...register('password', { required: true })}
            />
          </div>
          <p className="text-red-500 mt-2 text-center font-semibold">
            {sendMessage}
          </p>
          <input
            className="text-white btn w-full mt-6 bg-green-400"
            type="submit"
            value="Cash Out
"
          />
        </form>
      </div>
    </div>
  );
};

export default CashOut;
