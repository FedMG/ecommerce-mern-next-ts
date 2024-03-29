import { ProductRating } from '../form'
import { Header } from '@/components/templates'
import { Text } from '@/components/typography'

import type { Product } from '@/models'
import type { BaseComponentProps } from '@/schemas'

type ProductHeaderProps = BaseComponentProps & Pick<Product, 'rating'>
type ProductTitleProps = BaseComponentProps

export const ProductTitle: React.FC<ProductTitleProps> = ({ children, className }) => (
  <Text.Accessible id='product-form-section' className={`${className} capitalize text-xl lg:text-3xl xl:text-3xl font-medium leading-tight flex-1`}>
    {children}
  </Text.Accessible>
)

export const ProductHeader: React.FC<ProductHeaderProps> = ({ children, rating, className }) => (
  <Header labelledlby='product-label' className={`${className} py-2 pb-4 space-y-2`}>
    <div className='flex flex-row' id='product-label'>
      {children}
    </div>
    <ProductRating stars={rating?.stars} votes={rating?.votes} />
  </Header>
)
