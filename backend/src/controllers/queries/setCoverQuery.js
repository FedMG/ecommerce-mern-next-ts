import Cover from '../../models/Cover.js'

import { splitAndJoin } from '../../utils/functions.js'
import { setSortQuery } from './filters/setSortQuery.js'

export const setCoverQuery = (query) => {
  const { sort, fields, category, brand, alt } = query

  const queryConfig = {}
  const matches = {
    'brand': brand,
    'category': category,
    'alt': { $regex: alt, $options: 'i' }
  }
  
  Object.keys(matches).forEach((key) => {
    if (query[key]) {
      queryConfig[key] = matches[key]
    }
  })

  let result = Cover.find(queryConfig)
  result = setSortQuery(result, sort)

  if (fields) {
    const list = splitAndJoin(fields)
    result = result.select(list)
  }

  return result
}
