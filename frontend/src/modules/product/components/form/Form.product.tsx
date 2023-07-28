import { Section, Text } from '@/components'

import { ProductButton } from './Button.product'
import { ProductClothingColors } from './ClothingColors.product'
import { ProductClothingSizes } from './ClothingSizes.product'
import { ProductsNumberInput } from './NumberInput.product'
import { CartIcon } from '@/assets'

import type { Product } from '@/models'

interface ProductFormProps extends Pick<Product, 'sizes' | 'colors' | 'stock'> {
  productId: Product['id']
  product: Pick<Product, 'name' | 'price' | 'discount' | 'image'>
}

export const ProductForm: React.FC<ProductFormProps> = ({ productId, product, sizes, colors, stock }) => {
  return (
    <form className='flex flex-col gap-1 h-full'>
      <ProductClothingSizes sizes={sizes} />
      <ProductClothingColors colors={colors} />
      <ProductsNumberInput stock={stock} />

      <Section.Accessible role='region' className='flex flex-col justify-end h-full pt-2 gap-2 md:gap-3'>
        <Text as='h2' className='sr-only'>Button section</Text>
        <ProductButton name='Buy now' />
        <ProductButton name='Add to cart' onClick={()=> undefined}>
          <CartIcon />
          <Text className='sr-only'>Cart icon of the button</Text>
        </ProductButton>
      </Section.Accessible>
    </form>
  )
}
