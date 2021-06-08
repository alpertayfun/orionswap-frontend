import BigNumber from 'bignumber.js/bignumber'
import { BIG_TEN } from 'utils/bigNumber'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export const BSC_BLOCK_TIME = 3

// TODO: Farm pool for Starfield burning?? Dig in and get details

// STARFIELD_PER_BLOCK details
// 100 Starfield is minted per block
// 10 Starfield per block is sent to Burn pool (A farm just for burning Starfield)
// 50 Starfield per block goes to Starfield Galaxy pool
// 50 Starfield per block goes to Yield farms
// STARFIELD_PER_BLOCK in config/index.ts = 100 as we only change the amount sent to the burn pool which is effectively a farm.
// Starfield/Block in src/views/Home/components/StarfieldStats.tsx = 100 (40 - Amount sent to burn pool)

export const STARFIELD_PER_BLOCK = new BigNumber(100)
export const BLOCKS_PER_YEAR = new BigNumber((60 / BSC_BLOCK_TIME) * 60 * 24 * 365) // 10512000
export const BASE_URL = 'https://orionswap.finance'
export const BASE_SWAP_URL = 'https://swap.orionswap.finance'
export const BASE_ADD_LIQUIDITY_URL = `${BASE_SWAP_URL}/#/add`
export const BASE_LIQUIDITY_POOL_URL = `${BASE_SWAP_URL}/#/pool`
export const BASE_BSC_SCAN_URL = 'https://bscscan.com'
export const DEFAULT_TOKEN_DECIMAL = BIG_TEN.pow(18)
