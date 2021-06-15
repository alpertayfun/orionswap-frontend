import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    id: 0,
    stakingToken: tokens.starfield,
    earningToken: tokens.starfield,
    contractAddress: {
      97: '0x2F6BD2B6ACc688B14fbA499eA0082bD93A04b0CE',
      56: '0xaB5af03653349a052B49f167f4C709599C5f3844',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '55',
    sortOrder: 1,
    isFinished: false,
    isPromoted: true,
  },
]

export default pools
