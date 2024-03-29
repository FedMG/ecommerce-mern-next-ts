import { useNumberInput } from '@/modules/product/hooks'

import { ProductButton } from './Button.product'
import { AddItemIcon, DropItemIcon } from '@/assets'
import { isValidRangeNumber } from '@/utils'

import type { Product } from '@/models'
import type { AddVoidCallback } from '@/utilities'
import type { ClearWarningType, ItemsNumber } from '../../schema'

type Props = Pick<Product, 'stock'> & {
  onClick: AddVoidCallback<ItemsNumber>
} & ClearWarningType

export const ProductsNumberInput = ({ stock, onClick, onChange }: Props): React.ReactElement => {
  const { addItem, dropItem, reset, result } = useNumberInput({
    itemsNumber: isValidRangeNumber(stock) ? stock : 0,
    selectCartItemsNumber: onClick,
    clearWarning: onChange
  })

  return (
    <div className='flex items-center justify-between gap-2 md:gap-4 pt-1 md:pt-4'>
      <span className='font-medium text-gray-700 hidden sm:block'>
        Stock: <span className='text-gray-500'>{stock}</span>
      </span>
      <div className='flex items-center gap-2 justify-between w-full sm:w-auto'>
        <label htmlFor='items number' className='font-medium text-gray-700'>
          Items
          <span className='font-medium text-gray-500 sm:hidden'>({stock})</span>:
        </label>
        <div className='flex'>
          <ProductButton onMouseUpLeave={reset} onMouseDown={dropItem} rounded='rounded-l-md'>
            <DropItemIcon className='w-5 h-5 fill-white stroke-white stroke-2' />
          </ProductButton>
          <span className='bg-gray-50 font-semibold px-2 sm:min-w-[40px] text-center text-gray-800 py-0.5 border'>
            {result}
          </span>
          <ProductButton onMouseUpLeave={reset} onMouseDown={addItem} rounded='rounded-r-md'>
            <AddItemIcon className='w-5 h-5 fill-white stroke-white stroke-2' />
          </ProductButton>
        </div>
      </div>
    </div>
  )
}
