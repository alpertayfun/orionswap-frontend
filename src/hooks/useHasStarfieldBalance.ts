import BigNumber from 'bignumber.js'
import { getStarfieldAddress } from 'utils/addressHelpers'
import useTokenBalance from './useTokenBalance'

/**
 * A hook to check if a wallet's CAKE balance is at least the amount passed in
 */
const useHasStarfieldBalance = (minimumBalance: BigNumber) => {
  const cakeBalance = useTokenBalance(getStarfieldAddress())
  return cakeBalance.gte(minimumBalance)
}

export default useHasStarfieldBalance
