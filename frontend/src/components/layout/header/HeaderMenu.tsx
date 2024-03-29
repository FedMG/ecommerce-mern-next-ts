import { useSwapEvent } from '@/hooks'

import { Text } from "@/components/typography"
import { List } from '@/components/templates'
import { HamburgerDropdownButton } from "./DropdownButtons"
import { HeaderMenuList } from './HeaderMenuList'
import { LinkEventButton } from '@/components/LinkButton'

import { CloseIcon, HamburgerIcon } from "@/assets"
import { isString } from '@/utils'

type Links = {
  path: string
  name: string
}
type HeaderLinks = Links & { dropdown?: Links[] }

type Props = {
  links: HeaderLinks[]
  bgColor: string
}

export const HeaderMenu = ({ links, bgColor }: Props) => {
  const [isMenuOpen, selectPage] = useSwapEvent()

  return (
    <div className='max-lg:order-2'>
      <div
        id='header-hamburger-dropdown'
        className={`${isMenuOpen ? 'block' : 'hidden'} ${isString(bgColor) ? bgColor : ''} z-10 absolute lg:relative top-full lg:top-0 left-0 right-0 lg:overflow-visible lg:max-h-0 lg:flex justify-between items-center w-full lg:w-auto lg:order-1 shadow shadow-gray-300`}
      >
        <List id='open-header-menu' role='menu' ariaHidden={!isMenuOpen} className='bg-inherit flex items-center flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
          <List.Item ariaCurrent='false' role='menuitem' className='lg:hidden p-2 w-full border-y border-gray-200 px-6 sm:px-12 flex gap-2'>
            <LinkEventButton
              ariaLabel='Go to Sign In page'
              href='/user/login'
              className='w-full font-medium rounded-lg text-sm px-4 py-2 focus:outline-none hover:text-primary-700 text-gray-800 hover:bg-gray-300 active:bg-gray-200 border text-center'
              onClick={selectPage}
            >
              Sign In
            </LinkEventButton>
            <LinkEventButton
              ariaLabel='Go to Sign Up page'
              href='/user/register'
              className='w-full font-medium rounded-lg text-sm px-4 py-2 focus:outline-none text-white bg-primary-700 hover:bg-primary-800 border text-center'
              onClick={selectPage}
            >
              Sign Up
            </LinkEventButton>
          </List.Item>
          <HeaderMenuList links={links} bgColor={bgColor} selectOption={selectPage} />
        </List>
      </div>

      <HamburgerDropdownButton
        onClick={selectPage}
        labelledby='open-header-menu'
        className='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none'
        ariaControls='header-hamburger-dropdown'
        ariaExpanded={isMenuOpen}
      >
        <CloseIcon className={isMenuOpen ? 'block' : 'hidden'} ariaHidden={!isMenuOpen} />
        <HamburgerIcon className={isMenuOpen ? 'hidden' : 'block'} ariaHidden={isMenuOpen} />
        <Text className='sr-only'>Open header menu</Text>
      </HamburgerDropdownButton>
    </div>
  )
}
