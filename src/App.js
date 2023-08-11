import "./App.css";

//Components
import Navigation from "./components/Navigation";
import FrontPage from "./components/FrontPage";
import DigitalWallet from "./components/DigitalWallet";

import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  zora,
  sepolia,
  goerli,
} from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, zora, sepolia, goerli],
  [alchemyProvider({ apiKey: process.env.REACT_APP_API_KEY }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "BuyMeaCrypto",
  projectId: process.env.REACT_APP_PROJECT_ID,
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        theme={darkTheme({
          accentColor: "#828282",
          accentColorForeground: "white",
          fontStack: "system",
          overlayBlur: "small",
        })}
        modalSize="compact"
        chains={chains}>
        <div class="stars">
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
        </div>
        <Navigation />
        <FrontPage />
        <DigitalWallet />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
