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
      137: '0x63d32B7D032547702301edB4ebE3529321181349',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
]

export default farms
