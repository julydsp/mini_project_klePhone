export default function LoginPage() {
  return (
    <div className=" bg-[#715EEA] bg-cover h-screen flex justify-center flex-col gap-7 items-center">
      <label htmlFor="" className="text-white font-win font-light">
        Welcome in <span className="font-logo">KlePhone.</span>
      </label>
      <div className="w-60 md:w-80 lg:w-96 flex flex-col items-center bg-white h-auto gap-4 px-2 py-2 rounded-xl">
        <h1 className="text-gray-950 pt-4 text-sm md:text-xl font-bold  font-win text-center">
          Sign In
        </h1>
        <form action="" className="w-52 md:w-64 lg:w-80 md:pt-5">
          <div className="flex flex-col ">
            <label htmlFor="" className="text-sm font-win font-light">
              Username
            </label>
            <input
              type="text"
              className="border-solid border-b-[1px] outline-none border-gray-800"
            />
            <p className="text-red-600 text-sm mb-3 font-win font-light">
              username not valid
            </p>
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-sm font-win font-light">
              Password
            </label>
            <input
              type="text"
              className=" border-solid border-b-[1px] outline-none border-gray-800"
            />
            <p className="text-red-600 text-sm mb-3 font-win font-light">
              password wrong !!!
            </p>
          </div>
        </form>
        <button
          type="submit"
          className="bg-[#331FA8] px-2 py-2 w-24 mb-4 rounded-md text-white font-win font-light"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
