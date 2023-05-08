import { ProductRating } from './productRating'

import { setUpperCase } from '@/utils'
import type { ProductMainInfoHeaderProps } from 'additional'

export const ProductMainInfoHeader: React.FC<ProductMainInfoHeaderProps> = ({ children, name, rating, breakpoint }) => {
  return (
    <div className={`space-y-2 ${breakpoint}`}>
      <div className='pt-2 sm:pt-0 flex flex-row'>
        <h3 className='text-gray-900 text-xl lg:text-3xl xl:text-3xl font-medium leading-tight flex-1'>
          {setUpperCase(name)}
        </h3>
        {children}
      </div>
      <ProductRating stars={rating?.stars} votes={rating?.votes} />
    </div>
  )
}