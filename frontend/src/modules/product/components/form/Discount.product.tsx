import { applyDiscount, isNumber } from '@/utils'
import type { Product } from '@/models'

interface ProductDiscountPriceProps extends Pick<Product, 'price' | 'discount'> {}

export const ProductDiscountPrice: React.FC<ProductDiscountPriceProps> = ({ price, discount }) => {
  if (!isNumber(discount)) {
    return (
      <div className='py-2'>
        <div className='w-full relative'>
          <span className='text-gray-900 font-semibold text-lg md:text-2xl'>
            ${applyDiscount({discount, price})}
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className='px-3 sm:px-4 py-2'>
      <div className='w-full relative'>
        <p className='-ml-2 text-gray-600 text-sm sm:text-md lg:text-lg font-medium'>
          <del>${price}</del>
        </p>
        <div className='flex w-full justify-content align-items'>
          <div className='flex gap-1 sm:gap-3'>
            <span className='text-gray-900 font-semibold text-lg md:text-2xl'>
              ${applyDiscount({discount, price})}
            </span>
            <span className='text-green-600 font-medium text-sm sm:text-md lg:text-lg'>
              -{discount}% OFF
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
