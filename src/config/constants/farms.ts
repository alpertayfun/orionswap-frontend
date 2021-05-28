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
      97: '0xbB7e34E1fb9B951182Ad584eeE0B79b288b85b06',
      56: '',
    },
    token: tokens.starfield,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'Starfield-BNB LP',
    lpAddresses: {
      97: '0xd11fB02Be004575EE350BD8b1Da952E4305A465F',
      56: '',
    },
    token: tokens.starfield,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '0x2cEA2928935D6812f3CB038fA03DD42F24682224',
      56: '',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
]

export default farms
