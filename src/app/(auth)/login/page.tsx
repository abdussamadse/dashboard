export default function LoginPage() {
  return (
    <div className="flex h-screen w-full bg-[#22182D]">
      <div className="mx-auto flex w-full max-w-[1920px] flex-col items-center justify-center px-4">
        <div className="flex h-full w-full items-center justify-center">
          {/* Sign in */}
          <div className="z-10 mr-[-100px] h-[680px] w-[580px] flex-shrink-0 rounded-[20px] bg-[#30243C]">
            <div className="mt-[100px] flex w-full flex-col items-center gap-4">
              <h1 className="text-[32px] leading-normal font-semibold text-white">
                Sign In
              </h1>
              <p className="text-sm leading-normal font-medium text-[#F4F5F7]">
                Welcome back! Please enter your details
              </p>
            </div>

            <form className="mt-[32px] flex w-full flex-col items-center gap-4">
              <div className="flex w-[364px] flex-col gap-2">
                <label className="pl-4 text-xs leading-normal font-normal text-[#969DA6] uppercase">
                  Email
                </label>
                <div className="w-full flex-shrink-0 rounded-xl bg-[#645B6D] px-4 py-3">
                  <input
                    type="text"
                    placeholder="example@email.com"
                    className="text-sm leading-normal font-normal text-[#E0E4EA] outline-none"
                  />
                </div>
              </div>

              <div className="flex w-[364px] flex-col gap-2">
                <label className="pl-4 text-xs leading-normal font-normal text-[#969DA6] uppercase">
                  Password
                </label>
                <div className="w-full flex-shrink-0 rounded-xl bg-[#645B6D] px-4 py-3">
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    className="text-sm leading-normal font-normal text-[#E0E4EA] outline-none"
                  />
                </div>
              </div>

              <div className="flex w-[364px] items-center gap-1 pl-4">
                <input type="checkbox" />

                <p className="text-sm leading-normal font-medium text-white">
                  Remember me
                </p>
              </div>

              {/* Button */}
              <button className="mt-[8px] h-12 w-[364px] flex-shrink-0 cursor-pointer rounded-[24px] bg-[#1F74EC]">
                <div className="text-base leading-normal font-medium text-white">
                  Sing in
                </div>
              </button>
            </form>
          </div>

          {/* Illustration */}
          <div className="h-[900px] w-[1174px] flex-shrink-0 rounded-[20px] bg-[#1F74EC]">
            {/* Your content here */}
          </div>
        </div>
      </div>
    </div>
  );
}
