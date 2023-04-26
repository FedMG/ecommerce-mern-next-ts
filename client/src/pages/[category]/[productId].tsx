import { VALID_DOMAIN } from '@/environment'

import Image from 'next/image'

import { Layout } from '@/components/layout'
import { Heart } from '@/components/heart'
import { BreadCrumbs } from '@/components/breadCrumbs'
import { ProductRating } from '@/components/productRating'
import { ProductDiscountPrice } from '@/components/productDiscount'
import { ProductClothingSizes } from '@/components/productClothingSizes'
import { ProductClothingColors } from '@/components/productClothingColors'
import { ProductButton } from '@/components/productButton'

import { setUpperCase } from '@/utils'
import { getEndpoint } from '../api/utils'
import { productColors } from '@/refs'

import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import type { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import type { Product as ProductObject, ProductProps } from 'additional'
import type { NextPageWithLayout } from '_app-types'
import type { FC, ReactElement } from 'react'

const ProductHeader: FC<Pick<ProductObject, 'category' | 'brand' | 'name'>> = ({ category, brand, name }): ReactElement => {
  return (
    <div className='col-span-2 pb-4 sm:pb-6'>
      <div className='flex rounded-xl'>
        <div className='bg-gray-100 p-4 rounded-xl sm:rounded-r-none sm:rounded-l-xl flex-1'>
          <BreadCrumbs category={category} brand={brand} name={name} />
        </div>
        <div className='p-3 rounded-r-xl bg-gradient-to-t from-gray-400 via-gray-600 to-gray-700 hidden sm:flex items-center'>
          <span className='text-gray-50 sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-extrabold leading-tight'>{setUpperCase(brand)}</span>
        </div>
      </div>
    </div>
  )
}

const ProductImage: FC<Pick<ProductObject, 'image' | 'name'>> = ({ image, name }): ReactElement => {
  return (
    <div className='col-span-1 grid grid-rows-1 select-none'>
      <div className='bg-gray-100 flex justify-center align-items rounded-xl'>
        <Image
          priority
          src={image.src}
          width={390}
          height={0}
          alt={name}
          className='rounded-xl w-auto'
        />
      </div>
    </div>
  )
}

const ProductMainInfo: FC<Pick<ProductObject, 'name' | 'price' | 'rating' | 'discount'>> = ({ name, price, rating, discount }): ReactElement => {
  return (
    <div className='col-span-1 grid grid-rows-1 gap-4'>
      <div className='col-span-1 flex flex-col gap-1 bg-gray-100 rounded-xl p-2 sm:p-3 md:p-6'>
        <div className='pt-2 sm:pt-0 flex flex-row'>
          <h3 className='text-gray-900 text-xl lg:text-3xl xl:text-3xl font-medium leading-tight flex-1'>
            {setUpperCase(name)}
          </h3>
          <Heart />
         {/* <span className="sm:hidden text-end">brand</span> */}
        </div>
        <ProductRating num={rating} />
        {/* use temporal before the implementation in the backend */}
        <ProductClothingSizes sizes={['xs', 'sm', 'md', 'lg', 'xl']} />
        {/* use temporal before the implementation in the backend */}
        <ProductClothingColors colors={productColors.slice(3, 8)} />
        <ProductDiscountPrice price={price} discount={discount} />
        <div className='flex flex-col gap-3 justify-end h-full'>
          <ProductButton name='Buy now' />
          <ProductButton name='Add to cart'>
            <svg
              aria-hidden='true'
              className='w-5 h-5 mr-2 -ml-1'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title className='sr-only'>Cart icon of the button</title>
              <path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
            </svg>
          </ProductButton>
        </div>
      </div>
    </div>
  )
}

const ProductDetails: FC<Pick<ProductObject, 'description'>> = ({ description }): ReactElement => {
  return (
    <div className='col-span-2 rounded-xl'>
      <div className='col-span-2 bg-gray-100 p-4 rounded-xl'>
        <div className='my-3'><span className='text-gray-800 text-md md:text-lg lg:text-xl font-medium'>Description</span></div>
        <p className='text-md text-gray-600'>
          {description}
          forem forem forem forem forem forem forem forem forem forem forem forem forem forem forem
          forem forem forem forem forem forem forem forem forem forem forem forem forem forem forem forem
          forem forem forem forem forem forem forem forem forem forem forem forem forem forem forem forem
          forem forem forem forem forem forem forem forem forem forem
        </p>
      </div>
    </div>
  )
}

const Product: NextPageWithLayout<ProductProps> = ({ product }): ReactElement => {
  const { brand, category, image, name, price, rating, description, discount } = product

  return (
    <div className='py-4 px-3 sm:px-10 lg:px-16 xl:px-24'>
      <ProductHeader name={name} brand={brand} category={category} />
      <div className='grid grid-cols-2 sm:gap-4 gap-1 gap-y-4 rounded-xl'>
        <ProductImage image={image} name={name} />
        <ProductMainInfo name={name} rating={rating} price={price} discount={discount} />
        <ProductDetails description={description} />
      </div>
    </div>
  )
}

Product.getLayout = function getLayout (page, pageProps): JSX.Element {
  return <Layout title='Product' section={pageProps?.product?.name}>{page}</Layout>
}

export async function getServerSideProps ({ params }: GetServerSidePropsContext<Params>): Promise<GetServerSidePropsResult<ProductObject>> {
  if (params?.productId === undefined || VALID_DOMAIN === undefined) return { notFound: true }

  const getProductByID = getEndpoint(`${VALID_DOMAIN}/api/v1/products/`)
  const encodedID = encodeURI(params.productId)

  return await getProductByID(encodedID)
    .then((product) => {
      return { props: { ...product } }
    })
    .catch(() => {
      return { notFound: true }
    })
}

export default Product
