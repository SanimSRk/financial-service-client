import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAxiosPublice from '../../Hooks/useAxiosPublice';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const [error, setError] = useState('');
  const axiosPublice = useAxiosPublice();
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
    const { email, password } = data;
    const info = { email };
    axiosPublice
      .get(`/login?email=${email}&&password=${password}`)
      .then(res => {
        console.log(res?.data?.message);
        if (res?.data?.message) {
          setError('Your email and password invalid. Please try again');
          return;
        }

        const email = res.data.user.email;

        if (res.data.user) {
          axiosPublice.post('/jwt', info).then(res => {
            if (res.data.token) {
              localStorage.setItem('token', res.data.token);
              localStorage.setItem('email', email);
              navigate(location.state || '/');
            }
          });
        }
      });
  };
  return (
    <div>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content w-1/3">
            <div className="card shrink-0 w-full shadow-2xl bg-base-100 border-green-400 border-2">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <h2 className="text-3xl text-center font-bold text-green-400">
                  Login Now
                </h2>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered border-green-400 mb-3"
                    required
                    {...register('email', { required: true })}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered border-green-400"
                    required
                    {...register('password', { required: true })}
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <p className="text-center text-red-500">{error}</p>
                <div className="form-control mt-6">
                  <button className="btn bg-green-400 text-white">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
