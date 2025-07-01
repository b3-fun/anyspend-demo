This repository hosts a Next.js application designed to demonstrate the minimal setup to use AnySpend packages: `@b3dotfun/sdk`. The primary goal of this demo is to simplify the integration process for developers looking to incorporate AnySpend functionalities into their own Next.js applications, leveraging common Web3 tools.

## Live Demo

You can access the live demo of this application here: [https://anyspend-demo.vercel.app/](https://anyspend-demo.vercel.app/)

## Features

- **Swap:** Swap cross-chain tokens.
- **Mint NFT:** Mint an NFT.
- **Join Tournament:** Join a tournament.
- **Stake B3:** Stake B3 tokens for rewards.
- And more!

## Packages Used

- `@b3dotfun/sdk`: The core SDK for interacting with B3 ecosystem, including AnySpend services.
- `next` (v15 with Turbopack): The React framework for production.
- `react` (v19): A JavaScript library for building user interfaces.
- `react-dom` (v19): Serves as the entry point to the DOM and server renderers for React.
- `@rainbow-me/rainbowkit`: A React library for adding wallet connection to your dapp.
- `@tanstack/react-query`: Hooks for fetching, caching and updating asynchronous data in React.
- `thirdweb`: A platform for building web3 apps.
- `viem`: A TypeScript interface for Ethereum.
- `wagmi`: React Hooks for Ethereum.
- `tailwindcss`: A utility-first CSS framework.

## Getting Started

### Prerequisites

- Node.js (version 20 or higher is recommended)
- pnpm (version `10.11.0` is used in this project, as specified in `package.json`'s `packageManager` field)

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/b3fun/anyspend-demo.git
    ```
2.  Install NPM packages (using pnpm is recommended)
    ```sh
    pnpm install
    ```
3.  Run the development server
    ```sh
    pnpm dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
