import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'OrionSwap',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by PancakeSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://OrionSwap.finance/images/hero.png',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/': {
    title: 'Home | OrionSwap',
  },
  '/farms': {
    title: 'Farms | OrionSwap',
  },
  '/pools': {
    title: 'Pools | OrionSwap',
  },
}
