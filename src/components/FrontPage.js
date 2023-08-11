import { Link } from "react-scroll";

const FrontPage = () => {
  return (
    <div>
      <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div class="mx-auto max-w-3xl text-center">
          <h1 class="text-gray-400 bg-clip-text text-3xl font-extrabold sm:text-5xl">
            INVEST IN CRYPTO WITH
            <span class="sm:block">
              <span className="color">
                <span class="underline">D</span>OLLAR&nbsp;
                <span class="underline">C</span>OST&nbsp;
                <span class="underline">A</span>VERAGE&nbsp;
              </span>
              APPROACH ON DEXES
            </span>
          </h1>

          <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-[#828282]">
            Use AI Crypto Advisor to make a right choice
          </p>

          <div class="mt-8 flex flex-wrap m-10 justify-center">
            <Link
              class="block w-full m-0 rounded-3xl border-blue-600 bg-[#00F900] px-12 py-3 text-sm font-medium text-white hover:bg-black hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              to="digitalWallet"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}>
              EXPLORE
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="px-5">
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v4.59L7.3 9.24a.75.75 0 00-1.1 1.02l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V6.75z"
                  clip-rule="evenodd"
                />
              </svg>
            </Link>
          </div>

          <div class="absolute left-60 top-40">
            <a class="image-rounded-left image-rounded block w-full rounded-3xl border-blue-600 bg-[#00F900] px-12 py-3 text-sm font-medium text-white hover:bg-black hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
              SOCIAL INVESTING
            </a>
          </div>

          <div class="absolute right-60 top-40">
            <a class="image-rounded-right block w-full rounded-3xl border-blue-600 bg-[#00F900] px-12 py-3 text-sm font-medium text-white hover:bg-black hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
              STAKING
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
