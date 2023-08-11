const DigitalWallet = () => {
  return (
    <div class="digitalWallet">
      <div>
        <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div class="mx-auto max-w-3xl text-center">
            <h1 class="text-gray-400 bg-clip-text text-3xl font-extrabold sm:text-5xl">
              DO YOU HAVE A <span class="color">WEB3 WALLET</span>?
            </h1>
          </div>
          <div class="relative justify top-600">
            <a class="image-rounded-left image-rounded block w-full rounded-3xl border-blue-600 bg-[#00F900] px-12 py-3 text-sm font-medium text-white hover:bg-black hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
              NO
            </a>
            <div>
              <a class="image-rounded-left image-rounded block w-full rounded-3xl border-blue-600 bg-[#00F900] px-12 py-3 text-sm font-medium text-white hover:bg-black hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
                YES
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalWallet;
