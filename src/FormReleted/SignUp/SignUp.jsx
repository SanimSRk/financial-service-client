import { useForm } from 'react-hook-form';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    const { fullName, email, photo, password } = data;
    console.log(data);
  };
  return (
    <div>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content w-full md:w-3/4 lg:w-[40%] flex-col lg:flex-row-reverse">
            <div className="card shrink-0 w-full shadow-2xl bg-base-100 border-green-400 border-2">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <h2 className="text-3xl text-center font-bold text-green-400">
                  Registration Now
                </h2>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered border-green-400"
                    required
                    {...register('fullName', { required: true })}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Number</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your Number"
                    className="input input-bordered border-green-400"
                    required
                    {...register('email', { required: true })}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered border-green-400"
                    required
                    {...register('email', { required: true })}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Profile URL...</span>
                  </label>
                  <input
                    type="file"
                    name=""
                    id=""
                    placeholder="Profile Picture URL"
                    required
                    {...register('photo', { required: true })}
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
                  {/* <p className="text-center font-semibold text-red-500">
                    {error}
                  </p> */}
                </div>
                {/* <label className="label">
                  <span className="label-text">Select Your Role</span>
                </label>
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                /> */}

                <div className="form-control mt-6">
                  {/* <p className="text-red-500 mb-2 font-semibold">{errorsss}</p> */}
                  <button className="btn bg-green-400 text-white">
                    Registration
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
