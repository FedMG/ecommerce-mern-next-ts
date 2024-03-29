import { StatusCodes } from 'http-status-codes'

class NotFoundError extends Error {
  constructor (message) {
    super(message)
    this.statusCode = StatusCodes.NOT_FOUND
  }
}

class BadRequestError extends Error {
  constructor (message) {
    super(message)
    this.statusCode = StatusCodes.BAD_REQUEST
  }
}

class UnauthenticatedError extends Error {
  constructor (message) {
    super(message)
    this.statusCode = StatusCodes.UNAUTHORIZED
  }
}

class ServiceUnvailableError extends Error {
  constructor (message) {
    super(message)
    this.statusCode = StatusCodes.SERVICE_UNAVAILABLE
  }
}

export {
  NotFoundError,
  BadRequestError,
  UnauthenticatedError,
  ServiceUnvailableError
}
