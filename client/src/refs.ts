import type { FooterLinks, HeaderLinks } from 'additional'
import { ProductColors } from 'enums'

export const SESSIONS = Object.freeze({
  LOGIN: 'login',
  REGISTER: 'register'
})

export const sessions = {
  [SESSIONS.LOGIN]: {
    title: 'Login',
    linkName: 'register',
    linkText: 'Are you new here? So, sign up!'
  },
  [SESSIONS.REGISTER]: {
    title: 'Register',
    linkName: 'login',
    linkText: 'Are you already registered? So, sign in!'
  }
}


// use temporal before the implementation in the backend
export const productColors = [
'rose 500',
'orange 600',
'yellow 400',
'lime 400',
'green 500',
'cyan 600',
'violet 600',
'fuchsia 500',
'pink 600',
'neutral 950'
]

export const productColor: Record<ProductColors, string> = Object.freeze({
    [ProductColors.ROSE_500] : 'bg-rose-500',
    [ProductColors.ORANGE_600] : 'bg-orange-600',
    [ProductColors.YELLOW_400] : 'bg-yellow-400',
    [ProductColors.LIME_400] : 'bg-lime-400',
    [ProductColors.GREEN_600] : 'bg-green-600',
    [ProductColors.CYAN_600] : 'bg-cyan-600',
    [ProductColors.VIOLET_600] : 'bg-violet-600',
    [ProductColors.FUCHSIA_500] : 'bg-fuchsia-500 ',
    [ProductColors.PINK_600] : 'bg-pink-600',
    [ProductColors.NEUTRAL_950] : 'bg-neutral-950',
})


export const filterStructure = {
  name: null,
  brand: null,
  discount: null
}

export const headerLinks: HeaderLinks[] = [
  {
    path: '/',
    name: 'Home'
  },
  {
    path: '/about',
    name: 'About'
  },
  {
    path: '#categories',
    name: 'Categories',
    dropdown: [
      {
        path: "/men's clothing",
        name: "Men's clothing"
      },
      {
        path: "/women's clothing",
        name: "Women's clothing"
      },
      {
        path: '/shoes',
        name: 'Shoes'
      },
      {
        path: '/accessory',
        name: 'Accesories'
      }
    ]
  }
]

export const footerLinks: FooterLinks[] = [
  {
    name: 'About',
    path: '',
    links: [
      {
        name: 'Features',
        path: '#'
      },
      {
        name: 'Pricing',
        path: '#'
      },
      {
        name: 'Payments methods',
        path: '#'
      }
    ]
  },
  {
    name: 'Policy',
    path: '',
    links: [
      {
        name: 'Privacy Policy',
        path: '#'
      },
      {
        name: 'Terms of Service',
        path: '#'
      },
      {
        name: 'Consumer Rights',
        path: '#'
      }
    ]
  },
  {
    name: 'Help',
    path: '',
    links: [
      {
        name: 'Common Questions',
        path: '#'
      },
      {
        name: 'Support',
        path: '#'
      },
      {
        name: 'Contact us',
        path: '#'
      }
    ]
  }
]
