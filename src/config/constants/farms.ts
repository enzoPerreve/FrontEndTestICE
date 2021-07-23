import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'ICE-USDC LP',
    decimal: 18,
    lpAddresses: {
      137: '0x89c4b65bcd26855fecc022be396db993dfaa8baa',
    },
    tokenSymbol: 'ICE',
    tokenAddresses: {
      137: '0x63C5Bc1dBE2539C06Ee29E776fd35b47ba488a21',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'ICE-WMATIC LP',
    decimal: 18,
    lpAddresses: {
      137: '0x0073f4587a2bc0dfedeb0ed88c38b91e42736588',
    },
    tokenSymbol: 'ICE',
    tokenAddresses: {
      137: '0x63C5Bc1dBE2539C06Ee29E776fd35b47ba488a21',
    },
    quoteTokenSymbol: QuoteToken.WMATIC,
    quoteTokenAdresses: contracts.wmatic,
  },
  {
    pid: 2,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'WMATIC',
    decimal: 18,
    lpAddresses: {
      137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827'
    },
    tokenSymbol: 'WMATIC',
    tokenAddresses: {
      137: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
]

export default farms
