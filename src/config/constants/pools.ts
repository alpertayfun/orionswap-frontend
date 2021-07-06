import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    id: 0,
    stakingToken: tokens.starfield,
    earningToken: tokens.starfield,
    contractAddress: {
      97: '0xc7AEaA136657A9Ee1Bb21CE9a170F7E77151f46A',
      56: '0xFc4D8B845931cBBCa2FE545a874022ebAC1d0b8B',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '24',
    sortOrder: 1,
    isFinished: false,
    isPromoted: true,
  },
]

export default pools
