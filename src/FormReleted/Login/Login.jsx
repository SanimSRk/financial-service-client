import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
  const [error, setError] = useState('');
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
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
