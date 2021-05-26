import { useMemo } from 'react'
import useWeb3 from 'hooks/useWeb3'
import {
  getBep20Contract,
  getCakeContract,
  getBunnyFactoryContract,
  getBunnySpecialContract,
  getPancakeRabbitContract,
  getMasterchefContract,
  getClaimRefundContract,
  getErc721Contract,
  getCakeVaultContract,
  getChainlinkOracleContract,
} from 'utils/contractHelpers'

/**
 * Helper hooks to get specific contracts (by ABI)
 */

export const useERC20 = (address: string) => {
  const web3 = useWeb3()
  return useMemo(() => getBep20Contract(address, web3), [address, web3])
}

/**
 * @see https://docs.openzeppelin.com/contracts/3.x/api/token/erc721
 */
export const useERC721 = (address: string) => {
  const web3 = useWeb3()
  return useMemo(() => getErc721Contract(address, web3), [address, web3])
}

export const useCake = () => {
  const web3 = useWeb3()
  return useMemo(() => getCakeContract(web3), [web3])
}

export const useBunnyFactory = () => {
  const web3 = useWeb3()
  return useMemo(() => getBunnyFactoryContract(web3), [web3])
}

export const usePancakeRabbits = () => {
  const web3 = useWeb3()
  return useMemo(() => getPancakeRabbitContract(web3), [web3])
}

export const useMasterchef = () => {
  const web3 = useWeb3()
  return useMemo(() => getMasterchefContract(web3), [web3])
}

export const useBunnySpecialContract = () => {
  const web3 = useWeb3()
  return useMemo(() => getBunnySpecialContract(web3), [web3])
}

export const useClaimRefundContract = () => {
  const web3 = useWeb3()
  return useMemo(() => getClaimRefundContract(web3), [web3])
}

export const useCakeVaultContract = () => {
  const web3 = useWeb3()
  return useMemo(() => getCakeVaultContract(web3), [web3])
}

export const useChainlinkOracleContract = () => {
  const web3 = useWeb3()
  return useMemo(() => getChainlinkOracleContract(web3), [web3])
}
