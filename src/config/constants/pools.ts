import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    id: 0,
    stakingToken: tokens.starfield,
    earningToken: tokens.starfield,
    contractAddress: {
      97: '0xbB7e34E1fb9B951182Ad584eeE0B79b288b85b06',
      56: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '50',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
