![image](https://user-images.githubusercontent.com/65929678/232244423-20b3e899-92b7-4b3e-8fbe-3c31ba2b5055.png)

# Jury DAO Front-end

> This is the buidle of [ETHGlobal Tokyo 2023](https://ethglobal.com/events/tokyo).

## What is Jury DAO?

[Checkout the information](https://github.com/catze-labs/jury-dao-info)

JuryDAO is a decentralized autonomous organization (DAO) that aims to provide a decentralized dispute resolution system on the blockchain. It allows users to create and vote on cases, stake tokens as collateral, and engage in a transparent and decentralized decision-making process.


## Main Features

- Case creation: Users can create new dispute resolution cases by submitting a title, description, and stake amount.
- Case voting: Users can vote on cases by staking their JRY tokens and indicating their decision.
- Jury selection: The DAO selects a randomly chosen jury from the community members to vote on each case.
- Transparent decision-making: All decisions and votes are recorded on the blockchain and can be audited for transparency.
- Reward system: Users who participate in the dispute resolution process as jurors are rewarded with JRY tokens as an incentive.
- Staking and unstaking: Users can stake and unstake their JRY tokens as collateral for cases, and the tokens are locked during the resolution process.


## Project Detail

### 1. Library

- React18
- Next.js : 13.2.4
- Tailwind.css (with `clsx`)
- Recoil
- Axios
- React-Query v3
- Stroybook
- Wagmi + Rainbow Kit

### 2. Structures

Feature based file system with concerns of serverless paradigm.

```bash
src/
├─ styles/  # tailwind style, global styles...
├─ public/  # index.html, favicons, metadata for SEO...
│   ├─ assets/ # images, ...
│   └─ meta/ # metadatas
├─ states/ # global states handled by recoil
├─ components/ # common components
├─ [feature name]/ # feature
│   ├─ components/ # component only used in feature
│   ├─ utils/ # utils only used in feature
│   ├─ hooks/ # hooks only used in feature
│   └─ pages/ # pages for routing
├─ pages/ # routing & API
│   └─ api/ # export from src/api
│   └─ [feature name routers...]
├─ requests/ # API call with axios & Server state driven by React-Query
├─ types/ # collection of types d.ts
└─ api/ # Next.js Serverless API directory
   └─ [domain name]/ # /api/[domain_name]
      ├─ dao.ts # If using prisma, define dao
      ├─ services.ts # logics, process entity...
      └─ controllers.ts # Controller
```
