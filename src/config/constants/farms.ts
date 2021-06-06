import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'Starfield',
    lpAddresses: {
      97: '0x2F6BD2B6ACc688B14fbA499eA0082bD93A04b0CE',
      56: '',
    },
    token: tokens.starfield,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'Starfield-BNB LP',
    lpAddresses: {
      97: '0xdfa8949999B3b066ed4Fd19Da777571036293087',
      56: '',
    },
    token: tokens.starfield,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '0xbfeE2d3726c5C544c9173Be215a642648552Cff8',
      56: '',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
]

export default farms
