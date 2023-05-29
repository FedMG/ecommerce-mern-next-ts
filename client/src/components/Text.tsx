import type { NextTextType, TextProps, GradientTextType, AccessibleTextType, StateTextType } from 'additional'

export const Text: NextTextType<TextProps> = ({ className, as: Element = 'span', children }) => {
  return <Element className={className}>{children}</Element>
}

const TextGradient: GradientTextType = ({ from = 'from-white', via = '', to = 'to-black', children }) => {
  return (
    <span className={`bg-gradient-to-r ${from} ${via} ${to} text-transparent bg-clip-text`}>{children}</span>
  )
}
TextGradient.displayName = 'Text.Gradient'
Text.Gradient = TextGradient

const TextAccessible: AccessibleTextType = ({ id, className, as: Element = 'span', children }) => {
  return <Element id={id} className={className}>{children}</Element>
}
TextAccessible.displayName = 'Text.Accessible'
Text.Accessible = TextAccessible

const TextState: StateTextType = ({ id, ariaLive, className, as: Element = 'span', children }) => {
  return <Element aria-live={ariaLive} id={id} className={className}>{children}</Element>
}
TextState.displayName = 'Text.State'
Text.State = TextState