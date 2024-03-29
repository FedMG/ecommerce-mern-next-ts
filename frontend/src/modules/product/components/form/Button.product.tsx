import type { CallbackEvents } from '@/schemas'
import type { AddOptional } from '@/utilities'

interface ProductButtonProps extends AddOptional<CallbackEvents> {
  children?: React.ReactNode
  name?: string
  rounded?: string
}

export const ProductButton: React.FC<ProductButtonProps> = ({ children, name, onClick, onMouseDown, onMouseUpLeave, rounded }): React.ReactElement => {
  return (
    <button
      type='button'
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUpLeave}
      onMouseLeave={onMouseUpLeave}
      className={`hover:ring-2 px-2 py-1 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none active:bg-blue-600 font-medium ${typeof rounded === 'string' ? rounded : 'rounded-lg'} text-sm md:text-md lg:text-lg text-center inline-flex items-center justify-center`}
    >
      {children}{name}
    </button>
  )
}
