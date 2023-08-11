import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navigation = () => {
  return (
    <div>
      <header>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <div class="text-center sm:text-left">
              <h1 class="text-2xl font-bold text-[#828282] sm:text-3xl">
                BUY ME A CRYPTO
              </h1>
            </div>

            <div class="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              {/* <button
                class="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
                type="button">
                <span class="text-sm font-medium">Subscribe to Newsletter</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </button> */}

              <ConnectButton
                showBalance={{
                  smallScreen: false,
                  largeScreen: true,
                }}
                chainStatus="icon"
                label="Connect"
                modalSize="compact"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navigation;
