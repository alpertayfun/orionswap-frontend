import { MenuEntry } from '@pancakeswap/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.orionswap.finance/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.orionswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'Overview',
  //       href: 'https://orionswap.info',
  //     },
  //     {
  //       label: 'Tokens',
  //       href: 'https://orionswap.info/tokens',
  //     },
  //     {
  //       label: 'Pairs',
  //       href: 'https://orionswap.info/pairs',
  //     },
  //     {
  //       label: 'Accounts',
  //       href: 'https://orionswap.info/accounts',
  //     },
  //   ],
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: 'https://docs.orionswap.finance/contact-us',
      },
      {
        label: 'Github',
        href: 'https://github.com/orionswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.orionswap.finance',
      },
      {
        label: 'Blog',
        href: 'https://medium.com/@orionswap',
      },
    ],
  },
]

export default config
